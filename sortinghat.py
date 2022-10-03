from pickletools import int4


count = 0
dawn = 1
dusk = 2
Thegood = 'The Good'
Thegreat = 'The Great'
Thewise = "The Wise"
Thebold = 'The Bold'
violin = 'The Violin'
trumpet = 'The Trumpet'
piano = 'The Piano'
drum = 'The Drum'

Q1 = int(input("Q1) Do you like Dawn or Dusk? : "))
Q2 = input("Q2) When I'm dead, I want people to remmeber me as: ")
Q3 = input('Q3) Which kind of instrument most pleases your ear?: ')


if Q1 == dawn:
    print('Gryffindor and Ravenclaw both get', count + 1, 'point')
elif Q1 == dusk:
    print('Hufflepuff and Slytherin both get', count + 1, 'point')
else:
    print('Wrong input')

if Q2 == Thegood:
    print('Huffelpuff earns', count + 1, 'point')
elif Q2 == Thegreat:
    print('Slytherin earns', count + 1, 'point')
elif Q2 == Thewise:
    print('Ravenclaw earns', count + 1, 'point')
elif Q2 == Thebold:
    print('Gryffindor earns', count + 1, 'point')
else:
    print('Wront input')


if Q3 == violin:
    print('Slytherin gains '. count + 1, 'point')
elif Q3 == trumpet:
    print('Huffelputt gains ', count + 1, 'point')
elif Q3 == piano:
    print('Ravenclaw gains', count + 1, 'point')
elif Q3 == drum:
    print('Gryffindor gains' + 1, 'point')
else:
    print('Wrong input')

print(count)
