#Enunciado del ejercicio:

#Escribe un programa que sea capaz de mostrar los números del 1 al 100 en orden inverso.


"""
contador = 1

while contador <= 100:
    
    print (contador)
    contador += 1"""

del1Al100 = range(1,101)

for valor in reversed(del1Al100):
    print(valor)