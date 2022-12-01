from fastapi import APIRouter, Body, Path, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from bson import ObjectId

from utility import *
from database import db
from schemas import UserAvatarModel

# ========================================================================================
# 👇This Endpoint is responsible for fetching the avatars of a particular user-(ID)
#   and then serve back to the request as a response
# =========================================================================================


# Define Avatar route instance
user_avatars_router = APIRouter()

user_avatar_list = []


@user_avatars_router.get("/api/avatars/{user_id}")
async def retrieve_user_avatars(user_id: int = Depends(oauth2_scheme)) -> dict:
    # 👇 DB query for the specific user generated avatars will be done here
    user_avatar_list.append(
        {
            "user_id": user_id,
            "avatar_id": f"avatar_{user_id}",
            "avatar_name": f"avatar {user_id}",
            "avatar_img_url": f"http://aws.s3.bucket/1243ed/avatar{user_id}.png",
        }
    )
    return {"User generated avatars": user_avatar_list}


# stores user's avatars in database
@user_avatars_router.post(
    "/api/avatar_result",
    response_description="Successfully saved the avatars generated for user.",
    response_model=UserAvatarModel,
)
async def save_user_avatars(users_avatars: UserAvatarModel = Body(...)):
    users_avatars = jsonable_encoder(users_avatars)
    new_avatars = await db["avatars"].insert_one(users_avatars)
    created_avatars = await db["avatars"].find_one(
        {"_id": new_avatars.inserted_id}
    )
    return JSONResponse(
        status_code=status.HTTP_201_CREATED, content=created_avatars
    )
