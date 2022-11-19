from pydantic import BaseModel


# Define our Avatar Api Data model 

class AvatarModel(BaseModel):
    id: int
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

        
    
    