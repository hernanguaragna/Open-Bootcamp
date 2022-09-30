# Escribe una función que pueda decirte si un año (número entero) es bisiesto o no.
def bisiesto():
    anio = int(input("Escribe el año: "))
    if anio % 4 == 0:
        if anio % 100 == 0:
            if anio % 400 == 0:
                print("El año {} es bisiesto".format(anio))
            else:
                print("El año {} no es bisiesto".format(anio))
        else:
            print("El año {} es bisiesto".format(anio))
    else:
        print("El año {} no es bisiesto".format(anio))


bisiesto()
