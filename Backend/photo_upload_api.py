from fastapi import APIRouter, Path
from schemas import AvatarModel
from fastapi import UploadFile

# Define Avatar route instance
photo_router = APIRouter()

photo_list = []

@photo_router.post("/api/upload")
async def upload_photo(photo: AvatarModel) -> dict:
    photo_list.append(photo)
    
    return {'Message': "Photo Successfully uploaded"}


@photo_router.get('/api/photos')
async def retrieve_photos() -> dict:
    return {'Photo List': photo_list}