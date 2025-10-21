# SMTP --> Simple Mail Transfer Protocal
# GMail [Need App Pwd]  --> smtp.gmail.com
# Yahoo mail            --> smtp.mail.yahoo.com
# Outlook/hotmail.com   --> smtp-mail.outlook.com
# AT&T                  --> smpt.mail.att.net (use port 465)
# Verizon               --> smtp.verizon.net (use port 465)
# Comcast               --> smtp.comcast.net

import smtplib
import getpass
smtp_object = smtplib.SMTP('smtp.gmail.com', 587)
# 587 --> TLS
smtp_object.ehlo()
smtp_object.starttls()
# pwd = getpass.getpass('Enter your password')
app_pwd = 'frqxqgadsxgfjyjd'

email = getpass.getpass("Email: ")
# password = getpass.getpass("Password: ")  
smtp_object.login(email, app_pwd)
from_address = 'vasanth37cbe@gmail.com'
to_address = 'sangeethachitra121@gmail.com'
subject = 'Mail from Python'
message = 'Hello sangeetha i am trying to send mail using python from mac'
msg = "Subject: " + subject + '\n' + message
smtp_object.sendmail(from_address, to_address, msg)
smtp_object.quit()