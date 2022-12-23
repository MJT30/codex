# == equal to
# != not equal to
# > greater than
# < less than
# >= greater than or equal to
# <= less than or equal to


ph = int(input("Enter pH value (0-14):"))

if ph > 7:
    print("Basic")
elif ph < 7:
    print("Acidic")
else:
    print("Neutral")
