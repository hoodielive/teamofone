# Factory encapsulates object creation i.e. factory is an object that creates other objects 
# Solves uncertainties in types of objects
# Decisions to be made about what classes to use at runtime 
# Scenario - Pet shop only sold dogs, but now needs to sale cats too 

class Dog:
    """ A simple dog class""" 

    def __init__(self, name):
        self._name = name 

    def speak(self):
        return "Woof!"


class Cat:
    """ A simple cat class""" 

    def __init__(self, name):
        self._name = name 

    def speak(self):
        return "Meow!"


def get_pet(pet = "dog"):
    """The factory method""" 
    
    pets = dict(dog=Dog("Rahel"), cat=Cat("Peace"))

    return pets[pet]
    
     
