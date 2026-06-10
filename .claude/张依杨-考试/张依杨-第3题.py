# 第三题：while循环进阶（共20分）
# 小题1（6分）：使用while循环打印1到20之间的所有偶数，每个数
# 字一行。
# 提示：判断偶数可以用 if n%2 == 0
# 小题2（6分）：使用while循环计算1+2+3+...+100的结果，并打印
# 总和。
# 小题3（8分）：编写代码打印出乘法口诀(无需考虑每一列的上下对
# 其)

# 小题1
i=1
while i<21:
    if i%2==0:
        print(i)
    i+=1


# 小题2
i=1
sum=0
while i<101:
    sum+=i
    i+=1

print(str(sum))

# 小题3
i=1
j=1
for j in range (1,10):
    s=''
    for i in range(1,10):
        if i<=j:
            s+=str(i)+'×'+str(j)+'='+str(i*j)+' '
    print(s)



