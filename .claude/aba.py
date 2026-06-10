for a in range(100,1000):
    
    z=a%10
    y=a//10%10
    x=a//100%10
    if z==x and z!=y:
        print(a)