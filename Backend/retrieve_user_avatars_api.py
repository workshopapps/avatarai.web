from fastapi import APIRouter, Path
from schemas import AvatarModel


# ========================================================================================
# 👇This Endpoint is responsible for fetching the avatars of a particular user-(ID) 
#   and then serve back to the request as a response
# =========================================================================================


# Define Avatar route instance
user_avatars_router = APIRouter()

user_avatar_list = []



@user_avatars_router.get('/api/avatars/{user_id}')
async def retrieve_user_avatars(user_id: int) -> dict:
    # 👇 DB query for the specific user generated avatars will be done here 
    user_avatar_list.append({
        'user_id': user_id,
        'avatar_id': f'avatar_{user_id}',
        'avatar_name': f'avatar {user_id}',
        'avatar_img_url': f'http://aws.s3.bucket/1243ed/avatar{user_id}.png'
    })
    return {'User generated avatars': user_avatar_list}