def greet(name):
    print("Hello, {0}!".format(name))

name = raw_input("What's your name?")
greet(name)

try:
    print("test")
except   NameError as  err:
    print(err, '--> our error message')

raise  IOError( "file error")