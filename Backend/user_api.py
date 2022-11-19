from fastapi import APIRouter, status
from pydantic import BaseModel
from schemas import User
from passlib.context import CryptContext
from database import db
from fastapi.responses import  Response, JSONResponse


#temp class
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)


user_router = APIRouter()
user_list= []

@user_router.post("/api/user", response_model=User)
async def create_user(raw_user: User):
    user = {
         
        "first_name": raw_user.first_name,
        "last_name": raw_user.last_name,
        "email":raw_user.email,
        "password": raw_user.password,
                      
    }
    
    #print(raw_user)
    password_hash = get_password_hash(raw_user.password)

    user["password"] = password_hash
    new_user = await db['user'].insert_one(user)
    create_user= await db.user.find_one({"_id": new_user.inserted_id})
    create_user["_id"] = str(create_user["_id"])
    return JSONResponse(
        status_code=status.HTTP_201_CREATED,
        content=create_user
    )