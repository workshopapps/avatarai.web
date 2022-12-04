"""User routes"""

#################
# IMPORTS
#################
from fastapi import APIRouter, status, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from google.oauth2 import id_token
from google.auth.transport import requests
from starlette.requests import Request
from server.models.schemas import User, Login, EmailSchema,ContactForm, TokenData

from database import db
##############

from server.auth.utility import *
from bson import json_util
import json


#######################
#HASHING PASSWORD
#######################
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

#######################
#COMPARING HASH
#######################
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


#######################
#HASHING
#######################
def get_password_hash(password):
    return pwd_context.hash(password)


user_router = APIRouter()

###########################
#API
###########################
@user_router.post("/api/user", response_model = User)
async def create_user(raw_user: User):
    user = {        
        "username": raw_user.username,
        "email":raw_user.email,
        "password": raw_user.password,                     
    }
    #print(raw_user)
    
    ##########################
    #STORING HASHED PASSWORD
    ##########################
    password_hash = get_password_hash(raw_user.password)
    user["password"] = password_hash


    ############################
    #MAKING POST TO DATABASE
    ############################
    if await db.user.find_one({"email": raw_user.email} ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={'message' : 'Something went wrong. Try another email'}
        )

    if await db.user.find_one({"username": raw_user.username} ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={'message' : 'Username not unique'}
        )

    new_user = await db['user'].insert_one(user)
    create_user= await db.user.find_one({"_id": new_user.inserted_id})
    create_user["_id"] = str(create_user["_id"])

    access_token = create_access_token(user['email'])
    #refresh_token = create_refresh_token(userRes['email'])
    # print(access_token)
    Response = {
        "token" :{ "token" : access_token},
        "userData":{
            'username': user['username'],
            'email': user['email'],
            }
        }
    return JSONResponse(Response, status_code=status.HTTP_201_CREATED)
    





##############################
#Login Api
##############################
@user_router.post("/api/user/login", response_model = Login)
async def login(login : OAuth2PasswordRequestForm = Depends()):
    user = await db["user"].find_one({ "email": login.username }, None)
    # print(user)
    userRes = json.loads(json_util.dumps(user))

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )

    password_hash = str(user["password"])
    plain_password= login.password
    value = verify_password(plain_password, password_hash)
    #print(value)


    ####################
    #Jwt token
    ####################
    if not verify_password(plain_password, password_hash):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = create_access_token(userRes['email'])
    #refresh_token = create_refresh_token(userRes['email'])
    # print(access_token)
    Response = {
        "access_token" : token, "token_type": "bearer",
        "userData":{
            'username': userRes['username'],
              'email': userRes['email'],
            }
        }
    return JSONResponse(Response, status_code=status.HTTP_201_CREATED)


# @user_router.get("user/login/google")
# def authentication(request: Request,token:str):
#     try:
#         # Specify the CLIENT_ID of the app that accesses the backend:
#         user =id_token.verify_oauth2_token(token, requests.Request(), os.environ["CLIENT_ID"])
  
#         request.session['user'] = dict({
#             "email" : user["email"] 
#         })
          
#         return user['name'] + ' Logged In successfully'
#     except ValueError:
#         return "unauthorized"


@user_router.post("/contactForm")
async def send_mail(email: ContactForm): 
    return JSONResponse(status_code=200, content={"message": "email has been sent"})

@user_router.post("/newsletter")
async def send_mail(data : EmailSchema ):
    email = {        
        "username": data.email,                     
    }
    
    new_news_letter = await db['NewsLetter'].insert_one(email)
    print(new_news_letter)
    news_letter= await db.NewsLetter.find_one({"_id": new_news_letter.inserted_id})
    print(news_letter)
    news_letter["_id"] = str(news_letter["_id"])
    return JSONResponse(status_code=200, content={"message": "success"})


@user_router.post("/forgotPassword", response_model = TokenData )
async def send_mail(data: TokenData): 
    user = await db["user"].find_one({ "email": data.username }, None)
    # print(user)
    userRes = json.loads(json_util.dumps(user))

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Not Found"
        )
    return JSONResponse(status_code=200, content={"message": "An email has been sent to you"})



