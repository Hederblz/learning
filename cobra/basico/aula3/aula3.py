nome = input('Qual o seu nome?\n')
idade = int(input('Sua idade : '))
if idade >= 18:
    print(f'Seu nome eh {nome} e sua idade {idade} ',)
elif idade >=10:
    print('Muito jovem')
else:
    print('So para maiores')
if 'd' in nome:
    print('tem D no seu nome')