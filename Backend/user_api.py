"""User routes"""

#################
# IMPORTS
#################
from fastapi import APIRouter, status, HTTPException, Depends
from pydantic import BaseModel
from schemas import User, Login
from passlib.context import CryptContext
from database import db
from fastapi.responses import  Response, JSONResponse
##############
import os
from datetime import datetime, timedelta
from typing import Union, Any
# from jose import jwt
from utility import *
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
        "first_name": raw_user.first_name,
        "last_name": raw_user.last_name,
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
    #MAKING TO POST TO DATABASE
    ############################
    new_user = await db['user'].insert_one(user)
    create_user= await db.user.find_one({"_id": new_user.inserted_id})
    create_user["_id"] = str(create_user["_id"])
    return JSONResponse(
        status_code=status.HTTP_201_CREATED,
        content=create_user
    )
##############################
#Login Api
##############################
@user_router.post("/api/user/login", response_model = Login)
async def login(login : Login):
    # user_data= {
        
    #     "email":login.email,
    #     "password": login.password
    # }
    
    
    user = await db["user"].find_one({ "email": login.email }, None)
    # print(user)
    userRes = json.loads(json_util.dumps(user))
    print(userRes)
    

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
            detail="Incorrect email or password"
        )

    access_token = create_access_token(userRes['email'])
    #refresh_token = create_refresh_token(userRes['email'])
    # print(access_token)
    Response = {
        "token" :{ "token" : access_token},
        "userData":{
            'first_name': userRes['first_name'],
             'last_name': userRes['last_name'],
              'email': userRes['email'],
            }
        }
    return JSONResponse(Response, status_code=status.HTTP_201_CREATED)


    
