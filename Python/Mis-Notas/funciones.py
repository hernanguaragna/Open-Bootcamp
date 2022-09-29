# funciones
# def nombreDeLaFuncion(parametros opcionales):
# pass -> instruccion
"""
from glob import glob


def saludar():
    print("Hola")


saludar()
temperatura = 40


def suma(a, b):
    return a+b


print(suma(1, 4))




def saludoPersonalizado(nombre):
    global temperatura # para modificar el valor de una variable global, lo que hacemos es poner global nombreFuncion= nuevo valor
    temperatura = 6.0
    print("Hola " + nombre, "en este momento la temperatura es de ",
          temperatura, " grados")


saludoPersonalizado("Hernán")

print(temperatura)

# Poner como parametro un valor por defecto





def saludar (nombre = "Amig@"):
    nombre = input("tu nombre?")
    
    print("Hola " + nombre + "que bonito nombre!")

saludar()
saludar("Nicolas")



def suma(a, b, c):
    print(a + b + c)

suma(1,2,3)

def suma2(a=4,b=4,c=2):
    print(a+b+c)
suma2()
suma2(c=12)

#parametros variables con numeros, se utiliza el *args
def suma3(*args):
    resultado = 0
    for arg in args:
        resultado += arg
    print(resultado)
suma3(2,2,2,2)
"""
#parametros con nombre **kwargs named parameters




#def suma4(**kwargs):
#    for key, value in kwargs.items():
#        print(key, "=", value)
#
#suma4(vivienda = 'piso', auto = 'rojo')

def suma(**kwargs):
    if kwargs['coche']=='bonito':
        print('Tu auto es bonito')

suma(coche='bonito')