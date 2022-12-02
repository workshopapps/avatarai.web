from fastapi import FastAPI
from app.server.routes.photo_upload_api import photo_router
from app.server.routes.retrieve_user_avatars_api import user_avatars_router
from app.server.routes.user_api import user_router
from app.server.routes.avatars import avatar_router

# 👇 FastAPI INSTANCE
app = FastAPI(root_path="/api/v1")

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
 

@app.get('/app')
async def start():
    return {"Message":"Welcome to Zuvatar AI"}

# include api endpoints

app.include_router(photo_router, tags=["User Photos"])
app.include_router(avatar_router, tags=["Avatars"])
app.include_router(user_avatars_router)
app.include_router(user_router)
