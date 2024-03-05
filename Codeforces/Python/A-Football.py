# SOLUTION

n = input()
 
zero = 0
one = 0
i = 0
 
for num in n:
    if zero < 7 and one < 7:
        if num == '0':
            one = 0
            zero += 1
        elif num == '1':
            zero = 0
            one += 1
            
    if zero >= 7:
        print('YES')
        break
    elif one >= 7:
        print('YES')
        break
    i += 1
    
if zero < 7 and one < 7:
    print('NO')


'''
TEST #1
input:
001001
output:
NO

TEST #2
input:
1000000001
output:
YES

TEST #2
input:
00100110111111101
output:
YES

TEST #4
input:
10000000
output:
YES

TEST #5
input:
01
output:
NO
'''