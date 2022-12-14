import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import os

# def sendmail(url):
#     sender = "Private Person <from@example.com>"
#     receiver = "A Test User <to@example.com>"

#     message = f"""\
#     Subject: Hi We have finished Generating your avatars
#     To: {receiver}
#     From: {sender}

#     This is your Link: {url}"""

#     with smtplib.SMTP("smtp.mailtrap.io", 2525) as server:
#         server.login("907b31e8506bbf", "acfc3e3c6f348e")
#         server.sendmail(sender, receiver, message)


async def sendmail(url, email):

    mail_content = '''Hello,
    This is a simple mail. There is only text, no attachments are there The mail is sent using Python SMTP library.
    Thank You
    '''
    #The mail addresses and password
    sender_address = os.environ.get("EMAIL")
    sender_pass = os.environ.get("PASSWORD")
    receiver_address = f'{email}'
    #Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = 'A test mail sent by Python. It has an attachment.'   #The subject line
    #The body and the attachments for the mail
    message.attach(MIMEText(mail_content, 'plain'))
    #Create SMTP session for sending the mail
    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(sender_address, sender_pass) #login with mail_id and password
    text = message.as_string()
    session.sendmail(sender_address, receiver_address, text)
    session.quit()
    
    print('Mail Sent')

# sendmail("https://hngtest.s3.amazonaws.com/man_1.jpeg", "musaadamuw@gmail.com")