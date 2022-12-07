from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from server.routes.photo_upload_api import photo_router
from server.routes.retrieve_user_avatars_api import user_avatars_router
from server.routes.user_api import user_router
from server.routes.avatars import avatar_router

from starlette.requests import Request

# 👇 FastAPI INSTANCE
app = FastAPI(root_path="/")

##################################

#app.mount('/', user_router)
# app.mount('/api', user_router)


@app.get('/')
async def root():
    return HTMLResponse('<body><a href="/token">Log In</a></body>')

###############################
#endpoint to test google auth
###############################
@app.get('/token')
async def token(request: Request):
    return HTMLResponse('''
                <script>
                function send(){
                    var req = new XMLHttpRequest();
                    req.onreadystatechange = function() {
                        if (req.readyState === 4) {
                            console.log(req.response);
                            if (req.response["result"] === true) {
                                window.localStorage.setItem('jwt', req.response["access_token"]);
                            }
                        }
                    }
                    req.withCredentials = true;
                    req.responseType = 'json';
                    req.open("get", "/auth?"+window.location.search.substr(1), true);
                    req.send("");

                }
                </script>
                <button onClick="send()">Get FastAPI JWT Token</button>
            ''')




##################################

# ===================================================================

# 👇 MIDDLEWARES
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(
    SessionMiddleware,
    secret_key="secret",
    
   
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
