from fastapi import APIRouter, Path
from schemas import AvatarModel, UpdateAvatarModel
from fastapi import UploadFile, File, Form
from database import db
from typing import List
from fastapi import Body, HTTPException, status
from fastapi.responses import Response, JSONResponse
from fastapi.encoders import jsonable_encoder
import boto3
from bson import json_util
import json

# Define Avatar route instance
photo_router = APIRouter()

S3_BUCKET_NAME = "hngtest"


@photo_router.get("/api/get_photos", response_model= List[AvatarModel])
async def get_all_photos():
    all_photos = await db['avatar_pictures'].find().to_list(1000)
    #all_photos = json.loads(json_util.dumps(all_photos))
    avatar_model = []
    print(all_photos)
    for photo in all_photos:
        avatar_model.append(
            AvatarModel(
                email = photo['email'], photo_names=photo['photo_name'], photo_urls=photo['photo_urls'], photo_class=photo['photo_class']
            )
        )
        avatar_model = json.loads(json_util.dumps(avatar_model))
    return JSONResponse(status_code=status.HTTP_200_OK, content=avatar_model)
    

@photo_router.post("/api/upload_photos", status_code=201,response_description="Add new Photo")
async def add_photo(files: list[UploadFile] = File(...), email: str = Form(default="example@example.com"), photo_class: str = Form(default="man/woman")):

    # Upload file to AWS S3
    images_url = []
    images_filename = []
    s3 = boto3.resource("s3")
    bucket = s3.Bucket(S3_BUCKET_NAME)
    for file in files:
        bucket.upload_fileobj(file.file, file.filename, ExtraArgs={"ACL": "public-read"})

        uploaded_file_url = f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{file.filename}"
        
        #images_url[file.filename] = uploaded_file_url
        images_url.append(uploaded_file_url)
        images_filename.append(file.filename)

    photo = {
        "email": email,
        "photo_class":photo_class,
        "photo_urls": images_url,
        "photo_name": images_filename
    }
    new_photo = await db["avatar_pictures"].insert_one(photo)
        
    created_photo = await db["avatar_pictures"].find_one({"_id": new_photo.inserted_id})
    created_photo = json.loads(json_util.dumps(created_photo))
        
    return JSONResponse(status_code=status.HTTP_201_CREATED, content = created_photo)