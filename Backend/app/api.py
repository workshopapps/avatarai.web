from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from server.routes.photo_upload_api import photo_router
from server.routes.retrieve_user_avatars_api import user_avatars_router
from server.routes.user_api import user_router
from server.routes.avatars import avatar_router



from fastapi import FastAPI

import sentry_sdk


sentry_sdk.init(
    dsn="https://772868875b8a427b8e30c9a40e462d91@o4504280846565376.ingest.sentry.io/4504280979275776",

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production,
    traces_sample_rate=1.0,
)

# 👇 FastAPI INSTANCE
app = FastAPI(root_path="/")

##################################

##################################

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

# Test sentry
@app.get("/sentry-debug")
async def trigger_error():
    division_by_zero = 1 / 0
    return {"message": "Error"}

# include api endpoints

app.include_router(photo_router, tags=["User Photos"])
app.include_router(avatar_router, tags=["Avatars"])
app.include_router(user_avatars_router)
app.include_router(user_router)
