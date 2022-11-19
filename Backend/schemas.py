from pydantic import BaseModel, Field, EmailStr
from bson import ObjectId
from typing import Optional, List
from datetime import datetime


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

# Define our Avatar Api Data model 

class AvatarModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    email: EmailStr = Field(...)
    photo_names: list = Field(...)
    photo_urls: list = Field(...)
    photo_class: str = Field(...)
    #is_deleted : bool
    #created_at: datetime | None = None
    #updated_at: datetime | None = None

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            'example': {
                'email': "example@example.com",
                'photo_names':["avatar1.png"],
                'photo_url':["http://aws.s3.bucket/1243ed/avatar1.png"],
                'photo_class':"man",
                #'is_deleted': False  
            }
        }


class UpdateAvatarModel(BaseModel):
    email: Optional[EmailStr]
    photo_name: Optional[str]
    photo_url: Optional[list]
    photo_class: Optional[str]
    #is_deleted: Optional[bool]

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            'example': {
                'email': "example@example.com",
                'photo_name':"avatar1.png",
                'photo_url':["http://aws.s3.bucket/1243ed/avatar1.png"],
                'photo_class':"man",
                #'is_deleted': False  
            }
        }

#User data model
class User(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    first_name:str
    last_name : str
    email:str
    password: str
    #is_deleted:bool

    

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            'example': {               
                "first_name": "John",
                "last_name": "Doe",
                "email":"johndoe@gmail.com",
                "password": "I_can't_think_of_a_password",
            }
        }
