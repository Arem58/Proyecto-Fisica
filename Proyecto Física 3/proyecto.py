
#Fisica 3 Proyecto 1
#Universidad del valle 

#Por: Andree Toledo  18439
#	  Renato estrada 181899


#Imports	
from numpy import *
import math
import matplotlib.pyplot as plt

"""
En esta función se hace plot de cada particula
"""

def plot():

	print("""

	            Cargas		Masas
	Electrón =   -1.6
	Positrón =   1.6
	Protón =     -1.6
	Neutrón =    1.67
	Alpha =      3.2
	Deuterio =   1.6
	Muón =       -1.6
	Mesón =      -1.6
	Bosón =      -1.6
	Tau =        -3.167
	
	""")
	v = float(input("\tEscribe la velocidad de la particula (en números):"))
	q = -float(input("\tEscribe la carga de la particula (en números):"))
	d = 0.0001
	m = float(input("\tEscribe la masa de la particula (en números):")) #9.10938291*(10**-31)
	V = 1*(10**-19)
	pq =1*(10**-31)
	E = float(input("\tEscribe la magnitud del campo:"))
	l = int(input("\tEn milimetros escribe la posición inicial en Y de la particula (en números):"))
	t= linspace(0,10,15)

	ecuation = ((+(((q*V)+v/(d*(m*pq)))*t*t))/10) + l
	
	a = (q*(E*V)/m)
	x = v*t
	y = v*t+((a*t**2)/2)



	#trazar los datos como puntos de dispersión
	plt.plot(t,ecuation,'r')
	plt.ylabel('y (m)')
	plt.xlabel('x (m)')
	plt.title('Campo con carga'+ " " + campo)

#Se pregunta con cuantas particulas se quiere trabajar
campo = input("Ingrese el tipo de campo eléctrico (Positivo/Negativo)")
particles = int(input("Escribe la cantidad de particulas que deseas generar (en números):"))
for i in range(0,particles):
	print("\nParticula " + str(i+1) + ":")
	plot()
plt.show()