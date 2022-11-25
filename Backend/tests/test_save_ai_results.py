#################
import sys # added!
sys.path.append("..") # added!
#######################


import pytest
from fastapi.testclient import TestClient

from ..api import app


@pytest.fixture
def client():
    client = TestClient(app)
    return client


def test_save_ai_result(client):
    user_id = "6378cb047e7a4bae4c5f82d4"
    avatar_urls = [
        "http://aws.s3.bucket/1243ed/avatar1.png",
        "http://aws.s3.bucket/1243ed/avatar2.png",
    ]

    response = client.post(
        "/api/avatar_result",
        headers={"Content-Type": "application/json"},
        json={
            "user_id": "6378cb047e7a4bae4c5f82d4",
            "avatar_urls": avatar_urls,
        },
    )

    assert response.status_code == 201
    assert ("user_id", user_id) in response.json().items()
    assert ("avatar_urls", avatar_urls) in response.json().items()
