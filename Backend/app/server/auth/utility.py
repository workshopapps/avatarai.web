from fastapi import APIRouter, status, HTTPException, Depends
# from server.auth.utility import User, Login, Token, TokenData
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
import os
from datetime import datetime, timedelta
from typing import Union, Any
from jose import jwt, JWTError

# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText



# from passlib.context import CryptContext
# import os
# from datetime import datetime, timedelta
# from typing import Union, Any
# from jose import jwt

ACCESS_TOKEN_EXPIRE_MINUTES = 30  # 30 minutes
REFRESH_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7 # 7 days
ALGORITHM = "HS256"
JWT_SECRET_KEY = os.environ['JWT_SECRET_KEY']    
JWT_REFRESH_SECRET_KEY = os.environ['JWT_REFRESH_SECRET_KEY']     
password_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

###################################
#authentication
###################################

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/user/login")
oauth2_scheme_3 = OAuth2PasswordBearer(tokenUrl="/forgotPassword")

# ##################################
# #Google uthentication
# ##################################
# async def login_via_google(request):
#     google = oauth.create_client('google')
#     redirect_uri = request.url_for('authorize_google')
#     return await google.authorize_redirect(request, redirect_uri)


def rand():
    import random
    random_id = ''.join([str(random.randint(0, 999)).zfill(3) for _ in range(2)])
    return random_id
####################################
#get current User
####################################
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=['HS256'])
        #print(payload)
        user = payload.get('sub')
        return user
    except:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
        detail = 'invalid username or password')


#######################
#HASHING PASSWORD
#######################
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

#######################
#COMPARING HASH
#######################
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


#######################
#HASHING
#######################
def get_password_hash(password):
    return pwd_context.hash(password)


def create_access_token(data: Union[str, Any], expires_delta: int = None):
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode = {"exp": expires_delta, "sub": str(data)}
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET_KEY, ALGORITHM)
    return encoded_jwt


def create_refresh_token(subject: Union[str, Any], expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)
    
    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, JWT_REFRESH_SECRET_KEY, ALGORITHM)
    return encoded_jwt

# def send_mail():
    

#     mail_content = '''Hello,
#     This is a simple mail. There is only text, no attachments are there The mail is sent using Python SMTP library.
#     Thank You
#     '''
#     #The mail addresses and password
#     sender_address = 'sender123@gmail.com'
#     sender_pass = 'xxxxxxxx'
#     receiver_address = 'receiver567@gmail.com'
#     #Setup the MIME
#     message = MIMEMultipart()
#     message['From'] = sender_address
#     message['To'] = receiver_address
#     message['Subject'] = 'A test mail sent by Python. It has an attachment.'   #The subject line
#     #The body and the attachments for the mail
#     message.attach(MIMEText(mail_content, 'plain'))
#     #Create SMTP session for sending the mail
#     session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
#     session.starttls() #enable security
#     session.login(sender_address, sender_pass) #login with mail_id and password
#     text = message.as_string()
#     session.sendmail(sender_address, receiver_address, text)
#     session.quit()
#     print('Mail Sent')