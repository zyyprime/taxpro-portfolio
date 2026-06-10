username='zyy'
password='111'
tries=0
while tries<3:
    tries+=1
    yourname=input('username?  ')
    yourcode=input('password?  ')
    if username==username and yourcode==password:
        print('success!!!')
        break
    else:
        print('wrong!!!')
if tries>=3:
    print('too many tries, critical failure!!!')