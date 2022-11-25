import pytest
from fastapi.testclient import TestClient

@pytest.fixture(scope="session")
def test_get_photos(client: TestClient):
    response = client.get("/photos")
    assert response.status_code == 200
    assert response.json() == [
    [
        [
            "id",
            {
                "$oid": "638007cdd3aee676299fa2b6"
            }
        ],
        [
            "email",
            "example@example.com"
        ],
        [
            "photo_names",
            [
                "2fe8661ad0a1a69c414b561233900a53.jpeg",
                "4d97fee3d9e2b8add1974a20901820ab.jpeg"
            ]
        ],
        [
            "photo_urls",
            [
                "https://hngtest.s3.amazonaws.com/2fe8661ad0a1a69c414b561233900a53.jpeg",
                "https://hngtest.s3.amazonaws.com/4d97fee3d9e2b8add1974a20901820ab.jpeg"
            ]
        ],
        [
            "photo_class",
            "man/woman"
        ]
    ],
    [
        [
            "id",
            {
                "$oid": "638007cdd3aee676299fa2b7"
            }
        ],
        [
            "email",
            "example1@example.com"
        ],
        [
            "photo_names",
            [
                "951vzfnektd81.jpeg",
                "80.png",
                "12ruleslife_288577211_1223710734835569_7723254678073480181_n.jpeg"
            ]
        ],
        [
            "photo_urls",
            [
                "https://hngtest.s3.amazonaws.com/951vzfnektd81.jpeg",
                "https://hngtest.s3.amazonaws.com/80.png",
                "https://hngtest.s3.amazonaws.com/12ruleslife_288577211_1223710734835569_7723254678073480181_n.jpeg"
            ]
        ],
        [
            "photo_class",
            "man"
        ]
    ]
]