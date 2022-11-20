from datetime import datetime
from typing import List, Optional

from bson import ObjectId
from pydantic import BaseModel, EmailStr, Field


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
    # is_deleted : bool
    # created_at: datetime | None = None
    # updated_at: datetime | None = None

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "email": "example@example.com",
                "photo_names": ["avatar1.png"],
                "photo_url": ["http://aws.s3.bucket/1243ed/avatar1.png"],
                "photo_class": "man",
                #'is_deleted': False
            }
        }


class UserAvatarModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    user_id: PyObjectId = Field(...)
    avatar_urls: list = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "user_id": "6378cb047e7a4bae4c5f82d4",
                "avatar_urls": [
                    "http://aws.s3.bucket/1243ed/avatar1.png",
                    "http://aws.s3.bucket/1243ed/avatar2.png",
                ],
            }
        }


class UpdateAvatarModel(BaseModel):
    email: Optional[EmailStr]
    photo_name: Optional[str]
    photo_url: Optional[list]
    photo_class: Optional[str]
    # is_deleted: Optional[bool]

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "email": "example@example.com",
                "photo_name": "avatar1.png",
                "photo_url": ["http://aws.s3.bucket/1243ed/avatar1.png"],
                "photo_class": "man",
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

