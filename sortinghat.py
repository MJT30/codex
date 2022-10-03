from pickletools import int4


count = 0
dawn = 1
dusk = 2
Thegood = 'The Good'
Thegreat = 'The Great'
Thewise = "The Wise"
Thebold = 'The Bold'

Q1 = int(input("Q1) Do you like Dawn or Dusk? : "))
Q2 = int(input("When I'm dead, I want people to remmeber me as: "))


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
