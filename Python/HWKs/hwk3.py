# Escribe un programa en la consola de python que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una variable, e imprima por pantalla la frase Tu índice de masa corporal es donde es el índice de masa corporal calculado redondeado con dos decimales. Tienes que subir capturas de pantalla en una carpeta comprimida zip.

peso = input("Ingresa tu peso en Kg: ")
altura = input("Ingresa tu altura en Mts: ")

imc = float(peso)/float(altura)**2
print("Tu índice de masa corporal es", round(imc, 2))
