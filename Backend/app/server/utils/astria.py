import requests
import os
import json
from dotenv import load_dotenv

load_dotenv()

URL = "https://api.astria.ai/tunes"
payload = {
  "tune": {
    "callback": "https://optional-callback-url.com/to-your-service-when-ready",
    "title": "Grumpy cat",
    "name": "cat",
    "branch": "fast",
    "image_urls": [
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg"
    ]
  }
}
# {
#         "tunes": {
#         "callback": "",
#         "title": "testt",
#         "name": "man",
#         "branch":"fast",
#         "images_urls": ["https://i.imgur.com/HLHBnl9.jpeg",
#       "https://i.imgur.com/HLHBnl9.jpeg",
#       "https://i.imgur.com/HLHBnl9.jpeg",
#       "https://i.imgur.com/HLHBnl9.jpeg"]
#     }
#         }
API_KEY = os.environ['API_KEY']
Headers = {"Authorization": f"Bearer {API_KEY}"}
    
astria_request = requests.post(url=URL, json=payload, headers=Headers)
astria_response = astria_request.json()
tune_id = astria_response["id"]
# print(astria_request.status_code)
# print(tune_id)


def check_data(id):
    url = f'https://api.astria.ai/tunes/{id}/prompts/'

    payload = ""
    headers = {
        'Authorization': 'Bearer sd_AmpfZBHGwSUFG2sh6WBXAmMkKdpxar',
        'Cookie': '_sdbooth_session=qHfhRg9fUfN6Igra1XTzIgJV0R1pIJ5Y9tqe3ng173c0ovEaiCiQ5E1KM%2FCkyqCSHKEBOS2AKk7sNFiPwx6YqAoKda7XEg5o78Kbix3jUKMzkzLn0sPyK0nv3sSTiUzKsUggmDZ9o0XoCbL5cyNg3fAeTeLdtZ%2F7s%2F5jglyNPltei2UKKIkgAAxDY3JNzdzHm9YCnNjEGu5Wt1uHO%2BA4j95ss90RTqzBMqZ20B1W5%2FX%2FilUmEhbnZG48Nm7IqDNnBuDtlTryAnEaHkl4ATm%2F0a3ucds8pEZYDTuUM2feO9lhH%2FxpPdE2TmFZ5dHNXG5mF2bWq2Kt1NcCqmr9ZHOsjesKOAvgDLXvDAw91raCUT22PBlPZnWSJqX%2BA1QzstvIuqfy1AaurNc24QhFSCkHROWvxjzZg%2BnB9UL9Eh%2F22SZbDc%2FVFhh6M6vu2Jk%2BbKathq4XHecYHH3SClLZP0PXwbl7oKjk%2Br6Cqa38iUg7f7Rr0nhNPdf%2B03CR1lLmVyc8JOXUM9wiea4P6HF5--bsYZG1oKTwiaCPPr--EvhbwpR3wHTk2sDxhMZbIw%3D%3D'
    }

    response = requests.request("GET", url, headers=headers) #, data=payload)
    print(response.status_code)
    if response.status_code == 200:
        data = response.json() #json.loads(response.text)
        if data == []:
            return {"check":False,'data':None}
        else:
            return {"check":True,'data':data}
    return {"check":False,'data':None}

# else:
# return {"check":False,'data':None}
   
# hh = check_data(185617)
# print(hh)