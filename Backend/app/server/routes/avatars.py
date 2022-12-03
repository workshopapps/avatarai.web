from fastapi import FastAPI, File, UploadFile, status, APIRouter, Form, Depends
from fastapi.exceptions import HTTPException
from server.models.schemas import Token
from server.auth.utility import *
import os
import boto3
import json
from server.utils.avatarzip import unzip_avatar, get_avatars
from server.utils.sendmail import sendmail

avatar_router = APIRouter()

app = FastAPI()

S3_BUCKET_NAME = "hngtestzip"

@avatar_router.post("/avatar")
async def upload(file: UploadFile = File(...), email: str = Form(default="example@example.com")):#, email: str = Form()):
    s3 = boto3.resource("s3",
                      aws_access_key_id=os.environ["ACCESS_KEY"],
                      aws_secret_access_key=os.environ["SECRET_KEY"])
    
    bucket = s3.Bucket(S3_BUCKET_NAME)
    file.filename = f"{email}.zip"
    bucket.upload_fileobj(file.file, file.filename, ExtraArgs={"ACL": "public-read"})
    
    url = f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{file.filename}"
    
    sendmail(url)
    
    unzip_avatar(email)
    
    return {"Message":'Successfully Uploaded Zip and Saved Content'}


@avatar_router.get("/avatar/{email}")
async def get_avatar(email): #(email : Token = Depends(get_current_user)):
    list_of_avatars = get_avatars(id, "hngtest")
    
    return {"data": list_of_avatars}