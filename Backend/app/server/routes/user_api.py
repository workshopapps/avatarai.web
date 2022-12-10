"""User routes"""

#################
# IMPORTS
#################
from fastapi import APIRouter, status, HTTPException, Depends, Request
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse

from google.auth.transport import requests
from google.oauth2 import id_token

from authlib.integrations.starlette_client import OAuth
from starlette.config import Config


from server.models.schemas import User, Login, EmailSchema,ContactForm, TokenData

from database import db
##############
import smtplib
from server.auth.utility import *
from bson import json_util
import json
from typing  import List


import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


config = Config('.env')
oauth = OAuth(config)






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
@user_router.get("/user/{email}")
async def user(get_user : str= Depends(oauth2_scheme)):
    try:
        user = await db.user.find_one({"email": 'johnemma1234@gmail.com'}, None)
        print(user)
    except None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={'message' : 'Something went wrong. Try again'}
        )

    Response = {
        "userData": {
            'id': str(user['_id']),
            'firstname': user['first_name'],
            'lastname': user['lastname'],
            'email': user['email'],
            }
        }
    return JSONResponse(Response, status_code=status.HTTP_200_OK)

@user_router.post("/api/user", response_model = User)
async def create_user(raw_user: User):
    user = {        
        "first_name": raw_user.first_name,
        "lastname": raw_user.last_name,
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

    # if await db.user.find_one({"username": raw_user.username} ):
    #     raise HTTPException(
    #         status_code=status.HTTP_400_BAD_REQUEST,
    #         detail={'message' : 'Username not unique'}
    #    )

    new_user = await db['user'].insert_one(user)
    create_user= await db.user.find_one({"_id": new_user.inserted_id})
    create_user["_id"] = str(create_user["_id"])

    access_token = create_access_token(user['email'])
    #refresh_token = create_refresh_token(userRes['email'])
    # print(access_token)
    Response = {
        "token" :{ "token" : access_token},
        "userData":{
            'firstname': user['first_name'],
            'lastname': user['lastname'],
            'email': user['email'],
            }
        }
    return JSONResponse(Response, status_code=status.HTTP_201_CREATED)
    



@user_router.put("/updateUser", response_model = User)
async def create_user(raw_user: User):
    user = {        
        "first_name": raw_user.first_name,
        "lastname": raw_user.last_name,
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
    

    # if await db.user.find_one({"username": raw_user.username} ):
    #     raise HTTPException(
    #         status_code=status.HTTP_400_BAD_REQUEST,
    #         detail={'message' : 'Username not unique'}
    #    )

    new_user = await db['user'].update_one({"email": user['email']},  {"$set": {
        "first_name": user["first_name"],
        "lastname": user["lastname"],
        "email":user["lastname"],
        }})

    
    Response = {
            "userData":{
            'firstname': user['first_name'],
            'lastname': user['lastname'],
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
            'Firstname': userRes['first_name'],
            'Lastname': userRes['lastname'],
            'email': userRes['email'],
            }
        }
    return JSONResponse(Response, status_code=status.HTTP_201_CREATED)



CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID') or None
CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET') or None
if CLIENT_ID is None or CLIENT_SECRET is None:
    raise BaseException('Missing env variables')



#############################################
#Email signUp
#############################################


#@user_router.get('/verifyGoogle' )
#async def verify(token:list):
#    try:
#        idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
#       
#        user = idinfo['sub']
    # user = {        
    #     "first_name": raw_user.first_name,
    #     "lastname": raw_user.last_name,
    #     "email":raw_user.email,
    #     "password": raw_user.password,                     
    # }
    # #print(raw_user)
    
    # ##########################
    # #STORING HASHED PASSWORD
    # ##########################
    # password_hash = get_password_hash(raw_user.password)
    # user["password"] = password_hash


    # ############################
    # #MAKING POST TO DATABASE
    # ############################
    # if await db.user.find_one({"email": raw_user.email} ):
    #     raise HTTPException(
    #         status_code=status.HTTP_400_BAD_REQUEST,
    #         detail={'message' : 'Something went wrong. Try another email'}
    #     )

    # # if await db.user.find_one({"username": raw_user.username} ):
    # #     raise HTTPException(
    # #         status_code=status.HTTP_400_BAD_REQUEST,
    # #         detail={'message' : 'Username not unique'}
    # #    )

    # new_user = await db['user'].insert_one(user)
    # create_user= await db.user.find_one({"_id": new_user.inserted_id})
    # create_user["_id"] = str(create_user["_id"])

    # access_token = create_access_token(user['email'])
    # #refresh_token = create_refresh_token(userRes['email'])
    # # print(access_token)
    # Response = {
    #     "token" :{ "token" : access_token},
    #     "userData":{
    #         'firstname': user['firstname'],
    #         'lastname': user['lastname'],
    #         'email': user['email'],
    #         }
    #     }


    # except ValueError:
    #     raise HTTPException(
    #         status_code=status.HTTP_401_UNAUTHORIZED,
    #         detail='Could not validate credentials',
    #         headers={'WWW-Authenticate': 'Bearer'},
    #     )


@user_router.post("/contactForm")
async def send_mail(data : ContactForm):
    msg={
        'firstname': data.firstname,
        'lastname': data.lastname,
        'email': data.email,
        'message': data.message,
    }

    new = await db['questions'].insert_one(msg)
    create= await db.questions.find_one({"_id": new.inserted_id})
    create["_id"] = str(create["_id"])





    ##################
    #SMTP
    ##################
    msg = 'Subject: Thanks for Reaching out.'
    #The mail addresses and password
    sender_address = os.environ.get('EMAIL')
    sender_pass = os.environ.get('PASSWORD')
    receiver_address = data.email
    #Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = 'Password Recovery'   #The subject line
    #The body and the attachments for the mail
    message.attach(MIMEText(msg, 'plain'))
    #Create SMTP session for sending the mail
    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(sender_address, sender_pass) #login with mail_id and password
    text = message.as_string()
    session.sendmail(sender_address, receiver_address, text)
    session.quit()
    
    return JSONResponse(status_code=200, content={"message": "Thanks for reaching out"})

    

@user_router.post("/newsletter")
async def send_mail(data : EmailSchema):
    news={
        "email": data.email
    }
    
    print(data)
    new_news_letter = await db['NewsLetter'].insert_one(news)
  
    news_letter= await db.NewsLetter.find_one({"_id": new_news_letter.inserted_id})
  
    news_letter["_id"] = str(news_letter["_id"])

    msg = 'Subject: Thanks for Reaching out.'
    #The mail addresses and password
    sender_address = os.environ.get('EMAIL')
    sender_pass = os.environ.get('PASSWORD')
    receiver_address = news['email']
    #Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = 'Password Recovery'   #The subject line
    #The body and the attachments for the mail
    message.attach(MIMEText(msg, 'plain'))
    #Create SMTP session for sending the mail
    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(sender_address, sender_pass) #login with mail_id and password
    text = message.as_string()
    session.sendmail(sender_address, receiver_address, text)
    session.quit()
    print('Mail Sent')
    return JSONResponse(status_code=200, content={"message": "success"})




@user_router.post("/forgotPassword")
async def password_recovery(data: EmailSchema):
  
    userRes = data.email
    print(userRes)
    
    user = await db["user"].find_one({ 'email': userRes}, None)
    
    print(user)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Not Found"
        )
    random = rand()
    
   
    msg = f'Subject: Hi there! Your secret code is {random}.'
    print(msg)
    # ##################
    # #SMTP
    # ##################

    #The mail addresses and password
    sender_address = os.environ.get('EMAIL')
    sender_pass = os.environ.get('PASSWORD')
    receiver_address = user['email']
    #Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = 'Password Recovery'   #The subject line
    #The body and the attachments for the mail
    message.attach(MIMEText(msg, 'plain'))
    #Create SMTP session for sending the mail
    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(sender_address, sender_pass) #login with mail_id and password
    text = message.as_string()
    session.sendmail(sender_address, receiver_address, text)
    session.quit()
    print('Mail Sent')
    
   

    
    return JSONResponse(
        {
            
            'pin': random,
            
            
        },
    status_code = status.HTTP_200_OK)

@user_router.put('/updatepassword')
async def update_user_pass(password : TokenData):
   
    
    password_hash = get_password_hash(password.password)
 
    print(password_hash)
    user = await db.user.find_one({"email": password.email} )
    userRes = json.loads(json_util.dumps(user))
    print(userRes)
    update_result = await db["user"].update_one({"email": userRes['email']},  {"$set": {'password': password_hash}})
    
    print(update_result)
    return JSONResponse(status_code=status.HTTP_201_CREATED)






