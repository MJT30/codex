import random

num = random.randint(1, 9)

question = random.choice(['Do you want to get some pizza?',
                          'How are you feeling today?', 'Are you happy?']
                         )

answer = random.choice(['Sure, I love pizza', 'I am feeling okay...can not complain',
                       'No....not really....I mean I am not unhappy'])
print('Question:', question)
print('Magic 8 Ball:', answer)
