# SOLUTION

n = int(input())
 
for i in range(n):
    number = int(input())
    res = '' 
 
    while number > 0:
        resta = 26
        if(number - (2-len(res)) < resta):
            resta = number - (2-len(res))
        number -= resta 
        res = chr(96+resta) + res 
    
    print(res)

'''
TEST #1
input:
5
24
70
3
55
48
output:
aav
rzz
aaa
czz
auz
'''