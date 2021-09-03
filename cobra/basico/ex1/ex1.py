num1 = input('Digite um numero : ')

if num1.isdigit():
    num1 = int(num1)
    re = num1%2
    if re == 0:
        print('eh par')
    else:
        print('eh impar')
else:
    print('O numero deve ser inteiro')

nome = input('Digite seu nome : ')
ta = len(nome)

if ta <= 4:
    print('Seu nome é curto.')
elif ta <=6:
    print('Seu nome é normal.')
else:
    print('Seu nome é muito grande.')