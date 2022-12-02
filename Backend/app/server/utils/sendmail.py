import smtplib

def sendmail(url):
    sender = "Private Person <from@example.com>"
    receiver = "A Test User <to@example.com>"

    message = f"""\
    Subject: Hi We have finished Generating your avatars
    To: {receiver}
    From: {sender}

    This is your Link: {url}"""

    with smtplib.SMTP("smtp.mailtrap.io", 2525) as server:
        server.login("907b31e8506bbf", "acfc3e3c6f348e")
        server.sendmail(sender, receiver, message)