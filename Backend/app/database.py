import os
import motor.motor_asyncio
import pymongo
from dotenv import load_dotenv

load_dotenv()

client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"])
#client = pymongo.MongoClient(os.environ["MONGODB_URL"])
db = client.hngtest