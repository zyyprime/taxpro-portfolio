# 第四题列表操作（共20分）
# 小题1（6分）：编写程序，创建一个空列表 scores，
# 使用while循环让用户输入4个成绩（整数），
# 每次输入后使用append()添加到列表中，最后打印完整的列表。
# 小题2（6分）：基于上面的scores列表，使用while循环计算所有成
# 绩的总和并打印。
# 小题3（8分）：基于上面的scores列表，使用while循环找出第二高
# 的分数并打印。
# 提示：需要同时追踪最高分和第二高分两个变量，并思考何时更新
# 它们。


# 小题1

scores=[]
i=1
while i<=4:
    i+=1
    scores.append(int(input('please input a score:  ')))

for a in scores:
    print(str(a))

# 小题2
sum=0
for a in scores:
    sum+=a
print(str(sum))

# 小题3
# scores.sort();
first=0
second=0
i=0
while i<4:   
    if scores[i]>first:
        second=first
        first=scores[i]        
    elif scores[i]>=second and scores[i]<first:
        second=scores[i]
    elif first==second :
        second=scores[i]
    i+=1

if first!=second:
    print(str(second))
else:
    print('第一高分和第二高分并列都是'+str(first))