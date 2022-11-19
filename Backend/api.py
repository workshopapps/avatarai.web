from fastapi import FastAPI
from photo_upload_api import photo_router
from retrieve_user_avatars_api import user_avatars_router
from user_api import user_router

# 👇 FastAPI INSTANCE
app = FastAPI()

# ===================================================================

# 👇 MIDDLEWARES
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =================================================================


@app.get('/')
async def start():
    return {"Message":"Welcome to Noxus Avatar AI"}

# include api endpoints

app.include_router(photo_router)
app.include_router(user_avatars_router)
app.include_router(user_router)
