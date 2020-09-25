
#Fisica 3 Proyecto 1
#Universidad del valle 

#Por: Andree Toledo  18439
#	  Renato estrada 18


#Imports	
from numpy import *
import math
import matplotlib.pyplot as plt

"""
En esta 3función se hace plot de cada particula
"""

def plot():
	v = float(input("\tEscribe la velocidad de la particula (en números):       "))
	q = -float(input("\tEscribe la carga de la particula (en números):       "))
	d = 0.0001
	m = 9.10938291*(10**-31)
	V = 1*(10**-15)
	l = int(input("\tEn milimetros escribe la posición inicial en Y de la particula (en números):       "))
	t= linspace(0,10,15)
	ecuation = ((+(((-q*V)/(d*m))*t*t))/10) + l

	#trazar los datos como puntos de dispersión
	plt.plot(t,ecuation,'r')
	plt.ylabel('y-axis en metros')
	plt.xlabel('x-axis en metros')
	plt.title('Trayectoria')

#Se pregunta con cuantas particulas se quiere trabajar
particles = int(input("Escribe la cantidad de particulas que deseas generar (en números)      "))
for i in range(0,particles):
	print("\nParticula " + str(i+1) + ":       ")
	plot()
plt.show()