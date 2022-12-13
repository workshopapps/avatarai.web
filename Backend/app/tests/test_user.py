import sys 
sys.path.append("..")


from fastapi.testclient import TestClient
import pytest
from  ..app.api import app
from database import db 
from bson import json_util
import json
@pytest.fixture
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
    data = json.loads(json_util.dumps(user))

    response = client.post(
        "/api/user", data,
        headers={
            "Content-Type": "application/json"
            }
    )
    
    assert response.status_code == 422

