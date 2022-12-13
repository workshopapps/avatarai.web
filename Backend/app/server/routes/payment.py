from fastapi import APIRouter, status

from fastapi.responses import JSONResponse
from database import db


from pypaystack import Transaction

import os

from server.models.schemas import Payment
import json
from bson import json_util

payment = APIRouter()




@payment.post('/verify_transaction')
async def verify_payment(data: Payment):
    print(data)
    userRes = json.loads(json_util.dumps(data))
    print(userRes)
    trans_ref = data.trans_ref
    key= os.environ.get('PAYSTACK')

    try:
        transaction = Transaction(authorization_key=key)

        response  = (transaction.verify(trans_ref)) #Verify a transaction given a reference code "refcode".
      
        
        update = await db['user'].update_one({"email": data.email},  {"$set": {
        "paid": True,
    
        }})
        return  JSONResponse(response, status_code=status.HTTP_200_OK)
        
    except Exception: 
        return JSONResponse(status_code= status.HTTP_500_INTERNAL_SERVER_ERROR)


    
