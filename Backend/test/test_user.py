from fastapi.testclient import TestClient
from .user_api import user_router

client =TestClient(user_router)

def test_read_main():
    response = client.post(
        "/api/user",
        headers={"X-Token": "coneofsilence"},
        json={ 
                "first_name": "John",
                "last_name": "Doe",
                "email":"johndoe@gmail.com",
                "password": "I_can't_think_of_a_password",
            },
    )

    assert response.status_code == 200
    
    # assert response.json() == {
    #     'id': any,
    #     'first_name':str,
    #     'last_name' : str,
    #     'email' :str,
    #     'password': str
    # }