import sys 
sys.path.append("..")
from fastapi import FastAPI
<<<<<<< HEAD:Backend/app/api.py
from app.server.routes.photo_upload_api import photo_router
from app.server.routes.retrieve_user_avatars_api import user_avatars_router
from app.server.routes.user_api import user_router
=======
from model.routes.photo_upload_api import photo_router
from model.routes.retrieve_user_avatars_api import user_avatars_router
from model.routes.user_api import user_router
>>>>>>> bc62cee3584fe3d4b4b254024e2b4f07635f195e:Backend/api.py

# 👇 FastAPI INSTANCE
app = FastAPI(root_path="/")




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
    return {"Message":"Welcome to Noxus Avatar AI"}

# include api endpoints

app.include_router(photo_router, tags=["User Photos"])
app.include_router(user_avatars_router)
app.include_router(user_router)
