hihi = 'gay'
contador = 0
super_gay = 'Murilo, O Lord dos Gays'
resposta = input('Você é gay? (s/n): ')

while hihi == 'gay':
    if resposta == 'n':
        input('não, você não é gay. aperte enter para vazar daqui')
        break
    if resposta == 's':
        print('sim, você é gay')
        contador += 1
        print(f'você é tudo isso de gay: {contador}')
        if contador == 10:
            imprimir = input('Você quer continuar? (s/n): ')
            if imprimir == 'n':
                break
            if imprimir == 's':
                input(f'voce pode continuar, mas o {super_gay} é mais gay que você')
                contador = 0
                continue