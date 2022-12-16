import os
import json
import boto3
import requests

from fastapi import APIRouter, Path, Depends
from fastapi import UploadFile, File, Form
from fastapi import Body, HTTPException, status
from fastapi.responses import Response, JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import List
from bson.objectid import ObjectId

from server.models.schemas import AvatarModel, UpdateAvatarModel, Token
from database import db
from server.utils.astria import check_data

from bson import json_util
from io import BytesIO
import uuid

#### image processing module
from PIL import Image
from server.auth.utility import *


import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Define Avatar route instance
photo_router = APIRouter()

S3_BUCKET_NAME = "dreambooth-ajsn"#"hngtest"

client = boto3.client(
    's3',
    aws_access_key_id=os.environ["ACCESS_KEY"],
    aws_secret_access_key=os.environ["SECRET_KEY"],
)

@photo_router.get("/photos", response_model= List[AvatarModel])
async def get_all_photos():#(token :Token = Depends(get_current_user)):
    all_photos = await db['avatar_pictures'].find().to_list(1000)
    #all_photos = json.loads(json_util.dumps(all_photos))


    avatar_model = []
    for photo in all_photos:
        avatar_model.append(
            AvatarModel(
                email = photo['email'], photo_names=photo['photo_name'], photo_urls=photo['photo_urls'], photo_class=photo['photo_class']
            )
        )
        avatar_model = json.loads(json_util.dumps(avatar_model))
    return JSONResponse(status_code=status.HTTP_200_OK, content=avatar_model)
    

@photo_router.post("/photos", status_code=201,response_description="Add new Photo")
async def add_photo(files: list[UploadFile] = File(...), email: str = Form(default="example@example.com"), photo_class: str = Form(default="man/woman"), title: str = Form(default="title here")):

    # Upload file to AWS S3
    count = 0
    images_url = []
    images_filename = []
    s3 = boto3.resource("s3",
                      aws_access_key_id=os.environ["ACCESS_KEY"],
                      aws_secret_access_key=os.environ["SECRET_KEY"])
    
    bucket = s3.Bucket(S3_BUCKET_NAME)
    file_folder_id = uuid.uuid1()
    for file in files:
        image = Image.open(file.file)
        new_image = image.resize((512,512))
        image_io = BytesIO()
        new_image.save(image_io, 'JPEG')
        
        count = count + 1
        file.filename = f"{photo_class}_{count}.jpeg"
        #file_folder = f"{email}/training/{file.filename}"
        file_folder = f"{email}/training/{file_folder_id}/{file.filename}"
        image_io.seek(0)
        bucket.upload_fileobj(image_io, file_folder, ExtraArgs={"ACL": "public-read"})
        
        uploaded_file_url = f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{file.filename}"
        
        #images_url[file.filename] = uploaded_file_url
        images_url.append(uploaded_file_url)
        images_filename.append(file.filename)

    # photo = {
    #     "email": email,
    #     "photo_class":photo_class,
    #     "photo_urls": images_url,
    #     "photo_name": images_filename,
    #     "status": False
    #     "tune_prompts": 
    #     "tune_id": 
    #     "title": title
    # }
    
    URL = "https://api.astria.ai/tunes"
    # payload = {
    #     "tunes": {
    #     "callback": "",
    #     "title": title,
    #     "name": photo_class,
    #     "branch":"fast",
    #     "images_urls": images_url
    # }
    #     }
    payload = {
        "tune": {
        "callback": "https://optional-callback-url.com/to-your-service-when-ready",
        "title": "Grumpy cat",
        "name": "cat",
        "branch": "fast",
        "image_urls": [
        "https://i.imgur.com/HLHBnl9.jpeg",
        "https://i.imgur.com/HLHBnl9.jpeg",
        "https://i.imgur.com/HLHBnl9.jpeg",
        "https://i.imgur.com/HLHBnl9.jpeg"
                ]
        }
    }
    
    API_KEY = os.environ['API_KEY']
    Headers = {"Authorization": f"Bearer {API_KEY}"}
    
    astria_request = requests.post(url=URL, json=payload, headers=Headers)
    
    
    data = {
        "email": email,
        "photo_class":photo_class,
        "photo_urls": images_url,
        "photo_name": images_filename,
        "status": "false",
        "tune_prompts": [],
        "tune_id": 185617,
        "title": title
    }
    
    
    # print(astria_request.status_code)
    # print(astria_request.json())
#     {
#   "tune": {
#     "callback": "https://optional-callback-url.com/to-your-service-when-ready",
#     "title": "Grumpy cat",
#     "name": "cat",
#     "branch": "fast",
#     "image_urls": [
#       "https://i.imgur.com/HLHBnl9.jpeg",
#       "https://i.imgur.com/HLHBnl9.jpeg",
#       "https://i.imgur.com/HLHBnl9.jpeg",
#       "https://i.imgur.com/HLHBnl9.jpeg"
#     ]
#   }
# }
    #   make a post request to get images from the users
    # email, title, class, images
    
    
    
    # before addding anything to the db, make another post request to astria endpoint with the following request body---> https://api.astria.ai/tunes
    # payload--> callback:"", image_urls, title, name,branch:"fast",  
    
    
    
    
    # recieve a response body with the following---> 
    # id: -> tune_id, pickup the id
    # add to the database the follwing details
    # email, title, class, image_urls, tune_id, tune_prompts
    # status: false
    
    
    
    
    
    new_values = await db['avatar_pictures'].insert_one(data)
    created_values = await db["avatar_pictures"].find_one({"_id": new_values.inserted_id})
    created_values = json.loads(json_util.dumps(created_values))
    # new_photo = await db["avatar_pictures"].insert_one(photo)
   
        
    # created_photo = await db["avatar_pictures"].find_one({"_id": new_photo.inserted_id})
    # created_photo = json.loads(json_util.dumps(created_photo))
    
    # # request the astria api with the Post request with body
    # # --> urls of the images, title: mark , name:man--> class, 

    #  #The mail addresses and password

    msg = """Your Images have been Successfully Uploaded to Our dreambooth Server.It takes approximately 2 hours to train and generate the Avatar images. Just chill and wait for an email woth your images.
    The Process: Upload Images -> Train DreamBooth With Images -> Generate Avatar Images -> Send Email
    Thank You For Using ZUVATAR
    """
    sender_address = os.environ.get('EMAIL')
    sender_pass = os.environ.get('PASSWORD')
    receiver_address = data['email']
    #Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = 'Images Successfully Uploaded For Training'   #The subject line
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


    ##############################################################
    #Temporary fix to manually train the model pending dreambooth payment
    ##############################################################


    msg = f"""Hi! We have a new upload from {email}.
        We Have Saved the file at {file_folder} on S3 Bucket.
        """

    #The mail addresses and password
    sender_address = os.environ.get('EMAIL')
    sender_pass = os.environ.get('PASSWORD')
    receiver_address = 'ezikegodson@gmail.com'
    #Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = 'New upload!'   #The subject line
    #The body and the attachments for the mail
    message.attach(MIMEText(msg, 'plain'))
    #Create SMTP session for sending the mail
    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(sender_address, sender_pass) #login with mail_id and password
    text = message.as_string()
    session.sendmail(sender_address, receiver_address, text)
    session.quit()
        
    return JSONResponse(status_code=status.HTTP_201_CREATED, content = created_values)#created_photo)



@photo_router.get("/get_avatars", response_description="Get Generated Avatars")
async def get_avatars():
    all_avatars = await db['avatar_pictures'].find("").to_list(1000)
    model = []
    data = []
    for photo in all_avatars:
        photo_id = photo["_id"]
        avatar_model = []
        
        if "status" in photo.keys() and (photo['status']=="false"):
            tune_id = photo['tune_id']
            data = check_data(185617)
            if data['check'] == True:
                avatar_model.append(data['data'])
                status_value = "true"
                updated_values = await db['avatar_pictures'].update_one({"_id":ObjectId(photo_id)},[{"$set": {"status":status_value}},
                    {"$set":                                                  {"tune_prompts":avatar_model}}])
                
                model.append(updated_values)
            # avatar_model.append(
            #     AvatarModel(
            #         email = photo['email'], photo_names=photo['photo_name'], photo_urls=photo['photo_urls'], photo_class=photo['photo_class'], status=photo['status'], tune_prompts=photo["tune_prompts"],tune_id=184368, title=photo['title']
            #     )
            # )
            text_info = ''
            
            for d in data['data']:
                text_info = text_info + d['text'] +'\n' + str(d['images']) + '\n' + '\n'
            
            
            msg = f"""Hi! We have trained the model and here are your 
            prompts and images {text_info}.
            We Have Saved the file at on S3 Bucket.
                """
            #The mail addresses and password
            sender_address = os.environ.get('EMAIL')
            sender_pass = os.environ.get('PASSWORD')
            receiver_address = f'{photo["email"]}'
            #Setup the MIME
            message = MIMEMultipart()
            message['From'] = sender_address
            message['To'] = receiver_address
            message['Subject'] = 'New Training Results'   #The subject line
            #The body and the attachments for the mail
            message.attach(MIMEText(msg, 'plain'))
            #Create SMTP session for sending the mail
            session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
            session.starttls() #enable security
            session.login(sender_address, sender_pass) #login with mail_id and password
            text = message.as_string()
            session.sendmail(sender_address, receiver_address, text)
            session.quit()
       
    # avatar_model = json.loads(json_util.dumps(avatar_model))
    model = json.loads(json_util.dumps(data))
    return JSONResponse(status_code=status.HTTP_200_OK, content=model)
