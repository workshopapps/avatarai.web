from pydantic import BaseModel

#User data model
class User(BaseModel):
    first_name:str
    last_name : str
    email:str
    password: str
    is_deleted:bool

    class Config:
        schema_extra = {
            'example': {
                
                "first_name": "John",
                "last_name": "Doe",
                "email":"johndoe@gmail.com",
                "password": "I_can't_think_of_a_password",
                "is_deleted": False                
            }
        }

# Define our Avatar Api Data model 

class AvatarModel(BaseModel):
    id: int #?
    email: str
    photo_name: str
    photo_url: str
    photo_class: str
    is_deleted : bool

    
    class Config:
        schema_extra = {
            'example': {
                'id': 1,
                'email': "example@example.com",
                'photo_name':"avatar1.png",
                'photo_url':"http://aws.s3.bucket/1243ed/avatar1.png",
                'photo_class':"man",
                'is_deleted': False
                
            }
        }

        
    
    