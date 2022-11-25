import sys 
sys.path.append("..")

from httpx import AsyncIOMotorClient
from fastapi.testclient import TestClient
import pytest
from  ..api import app
from database import db 

@pytest.mark.any
def client():
    client = TestClient(app)
    return client


#client =TestClient(user_router)
#return client




def test_create_user(client):
    user={ 
        "first_name": "John",
        "last_name": "Doe",
        "email":"johndoe@gmail.com",
        "password": "I_can't_think_of_a_password",
    }
    response = client.post(
        "/api/user",
        headers={"Content-Type": "application/json"},
        json ={
            "first_name": user['first_name'],
            "last_name": user['last_name'],
            "email":user['email'],
        }

    
    )

    assert response.status_code == 422

