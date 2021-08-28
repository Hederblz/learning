num1 = int(input('Digite um numero : '))
re = num1%2
if num1.isdigit():
    if re == 0:
        print('eh par')
    else:
        print('eh impar')
else:
    print('O numero deve ser inteiro')