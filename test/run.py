def greet(name):
    print("Hello, {0}!".format(name))
print("What's your name?")
name = input()
greet(name)

try:
    print("test")
except NameError, err:
    print err, '--> our error message'