import os
def greet(name):
    print("Hello, {0}!".format(name))

name = input("What's your name?")
greet(name)

try:
    print("test")
except     NameError as  err:
    print(err, '--> our error message')

raise  IOError( "file error")

key in dict

 os.getcwd()