# Functions are a set of tasks
# The "return" statement signals the end of the function block

# def about_me(name, proffesion, pet):
#     print("Hi my name is", name)
#     print("I am a ", proffesion)
#     print("and my pets are", pet)


# about_me("Myles", "Software Developer", "Rocket, Harley & JoJo")

import random
from sty import fg


def generateRGB():
    red = random.randint(0, 256)  # Numbers between 0 and 256
    green = random.randint(0, 256)
    blue = random.randint(0, 256)
    return red, green, blue


def generateColor(red, green, blue):
    return fg(red, green, blue)


red, green, blue = generateRGB()
color = generateColor(red, green, blue)
print(color, "I'm randomly changing colors")
