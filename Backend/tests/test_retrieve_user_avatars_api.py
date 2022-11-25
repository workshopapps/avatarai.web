import pytest
from fastapi.testclient import TestClient


from ..app import app


@pytest.fixture
def client():
    client = TestClient(app)
    return client

# ====================== TESTS FOR AN EXISTENT USER =========================================
# ===========================================================================================
def test_retrieve_user_avatars(client):
    user_id = 123456789
    avatars = [
        "http://aws.s3.bucket/1243ed/avatar1.png",
        "http://aws.s3.bucket/1243ed/avatar2.png",
    ]

    response = client.get(
        f"/api/avatars/{user_id}",
        headers={"Content-Type": "application/json"},
        json={
            "user_id": user_id,
            "avatar_urls": avatars,
        },
    )

    assert response.status_code == 200
    assert ("user_id", user_id) in response.json().items()
    assert ("avatar_urls", avatars) in response.json().items()
    assert response.json() == {
            "id": user_id,
            "avatar_urls": avatars,
        }

# ====================== TESTS FOR AN INEXISTENT USER =========================================
# ==============================================================================================
def test_inexistent_retrieve_user_avatars():
    inexistent_user_id = 000000000
    response = client.get(f"/api/avatars/{inexistent_user_id}",
        headers={"Content-Type": "application/json"})
    assert response.status_code == 404
    assert response.json() == {"detail": "Item not found"}
