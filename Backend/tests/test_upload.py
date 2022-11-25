import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope="session")
def test_upload_file(client: TestClient):
    test_file = 'test_file.png'
    files = {'files': ('test_file.png', open(test_file, 'rb'))}
    email = "example3@gmail.com"
    photoclass = "woman"
    
    response = client.post('/photos', files=files, email=email, photo_class=photoclass)
    assert response.status_code == 201
    assert response.json() == {
                        "_id": {
                            "$oid": "6378615bb1a255681e1db55a"
                            },
                        "email": "example@example.com",
                     "photo_class": "man/woman",
                    "photo_urls": [
                    "https://hngtest.s3.amazonaws.com/2fe8661ad0a1a69c414b561233900a53.jpeg",
                     "https://hngtest.s3.amazonaws.com/4d97fee3d9e2b8add1974a20901820ab.jpeg"
                    ],
                    "photo_name": [
                    "2fe8661ad0a1a69c414b561233900a53.jpeg",
                    "4d97fee3d9e2b8add1974a20901820ab.jpeg"
                     ]
                }
