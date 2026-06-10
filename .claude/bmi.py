def getbmi(weight,height):
    bmivalue=weight / height/height
    if bmivalue>=28:
        return '肥胖'
    elif bmivalue>=24:
        return '偏胖'
    elif bmivalue>=18.5:
        return '正常'
    elif bmivalue>=0:
        return '偏瘦'
    else:
        return '异常'
    

for i in range(5):
    weight=input('please input your weight:  ')
    height=input('please input your height:  ')
    print(getbmi(float(weight),float(height)))

