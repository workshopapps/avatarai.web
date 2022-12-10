import os
import boto3
import json
from io import BytesIO
from zipfile import ZipFile
from botocore.exceptions import ClientError   

s3_resource = boto3.resource("s3",
                        aws_access_key_id=os.environ["ACCESS_KEY"],
                        aws_secret_access_key=os.environ["SECRET_KEY"])

def unzip_avatar(email):
        
    source_bucket = "hngtestzip"
    target_bucket = "hngtest"
        
    my_bucket = s3_resource.Bucket(source_bucket)
        
    for file in my_bucket.objects.all():
        if(str(file.key).endswith('.zip')):
            zip_obj = s3_resource.Object(bucket_name=source_bucket, key=file.key)
            buffer = BytesIO(zip_obj.get()["Body"].read())
            
            z = ZipFile(buffer)
            for filename in z.namelist():
                file_info = z.getinfo(filename)
                #filename = f"{email}/generated/{filename}"
                try:
                    response = s3_resource.meta.client.upload_fileobj(
                        z.open(filename),
                        Bucket=target_bucket,
                        Key=f"{email}/generated/{filename}"
                    )
                except Exception as e:
                    return e
        else:
            return {"message": f"{file.key} is not a zip file"}
       
def get_avatars(email, bucket_name): 
    avatars = []
    client = boto3.client('s3',
                          aws_access_key_id=os.environ["ACCESS_KEY"],aws_secret_access_key=os.environ["SECRET_KEY"])

    bucket = client.list_objects(Bucket=bucket_name, Marker=f"{email}/generated")
    for content in bucket["Contents"]:
        key = content["Key"]
        avatars.append(key)
    
    return {"Avatars": avatars}