
"""
resultado = a != b
print(resultado)
# condicionales < > <= >= ==
# 

#print(resultado)

#and
#la única convinación que daria true es true and true
# true and false = false
#false and false = false
#false and true = false


or
dan todos true salvo false or false porque los dos son falsos

print ("f o f", False or False) #false
print ( "f y t",False or True)#true
print ("t y t",True or True)#true
print ( "t y f",True or False)#true
print()

#XOR ^ para que este de True uno solo de los dos tiene que ser true, no los dos, si no que uno
print ("f o f", False ^ False)
print ( "f y t",False ^ True)#True
print ("t y t",True ^ True)
print ( "t y f",True ^ False)#True
"""



#Condicionales IF and While *las condiciones solo se ejecutan si son TRUE

a = 5
b = 6
c = 7

#if condicion:
   #acciones
"""
if a > b:
    print("es menor")
elif b > c:
    print("estoy en el elif")
else:# se puede usar también sin este ELSE, directo el print
    print ("todas son False y respondio el else") 

# bucle While
# while mientras la condicion sea True:
#    ejecuta las acciones
    
contador = 1

while contador <= 10:
    if contador % 2 == 0:
        print(contador,"Es par")
    contador += 1
    
"""
# bucle for se usa para recorrer listas y tuplas, valores etc
#for valor in cosa:
#    acciones
"""
lista = [1,2,3,'a',5]
longitudLista = len(lista)
print('la lista tiene', longitudLista,'elementos')

#for valorActual in lista:
#    print(valorActual)

for valor in range(5,10):
    print(valor) 

lista = ['hola', 'chau','perro','gato']
for palabra in lista:
    print('palabra actual',palabra)
    if palabra == 'perro':
        print('he encontrado la palabra',palabra)
        break #en este caso como encontro la palabra perro el break corto ahi y no llego a la palabra gato de la lista

#forma optimizada de hacer lo de arriba
lista = ['hola', 'chau','perro','gato']
if 'perro' in lista:
    print('he encontrado la palabra')

   
print()
lista2 = ['gorra', 'chaucha','perro','gato']
if 'comadreja' not in lista2:
    print('la comadreja no esta en la guarida')

#ordenar una lista de menor a mayor
lista = [1,5,3,7,2]
listaOrdenada = sorted(lista)
print(listaOrdenada)

#ordenar una lista de mayor a menor

listaDesordenada = sorted(lista, reverse=True)
print(listaDesordenada)

#Ordenar una lista de letras
listaLetras = ['A', 'a', 'p', 'q', 'M']
listaDesordenadaLetras = sorted(listaLetras, reverse=False)
print(listaDesordenadaLetras)

# SWICH -> match

valor = 3
match valor:
    case 1:
        print('valor es 1')
    case 2:
        print('valor es 2') 
    case 3:
        print('valor es 3') 
    case 4:
        print('valor es 4') 
    case 5:
        print('valor es 5') 

#cuando uso un FOR y no da true porque no encuentra el elemento, puedo usar el ELSE para que me de un mensaje sobre que no encontro el elemento en la itetación.
lista = ['hola', 'chau','perro','gato']
for palabra in lista:
    
    if palabra == 'comadreja':
        print('he encontrado la palabra')
        break
else:
    print('la comadreja se escapó de la lista')

# palabra reservada PASS -> cuando se que voy a tener que usar un bucle  y la quiero declarar nada mas pero sin poner parametros uso la palabra pass y no lanza error

lista = [1,2,3,4,5]
for numero in lista:
    pass

if 4 > 5:
    pass

while numero > 4:
    pass
"""
