import random

print("欢迎来到猜数字！")
print("提示：数字范围是 100 ~ 200")

tries = 0
random_num = random.randint(100, 200)
flag = False

while not flag:
    raw = input("请输入你猜的数字: ")
    try:
        input_num = int(raw)
    except ValueError:
        print("请输入有效的整数！！")
        continue

    tries += 1

    if input_num > random_num:
        print("大了！！！！")
    elif input_num < random_num:
        print("小了")
    else:
        print("猜中了！！")
        flag = True

print(f"你共猜了 {tries} 次", end="")
if tries > 8:
    print("，太笨了")
elif tries > 5:
    print("，一般笨")
else:
    print("，不笨")
