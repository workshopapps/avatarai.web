# App Modules
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


## User Modules
from app.photo_upload_api import photo_router
from app.retrieve_user_avatars_api import user_avatars_router
from app.user_api import user_router

# 👇 FastAPI INSTANCE
app = FastAPI()#root_path="/api/v1")

# ===================================================================

# 👇 MIDDLEWARES

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =================================================================


@app.get('/app')
async def start():
    return {"Message":"Welcome to Noxus Avatar AI"}

# include api endpoints

app.include_router(photo_router)
app.include_router(user_avatars_router)
app.include_router(user_router)