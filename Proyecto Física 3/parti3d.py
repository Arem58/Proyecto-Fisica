import sys
from pylab import *
import re
 

q = float(1.0)
m = float(1.0)
dt = 1e-2
t0 = 0
t1 = 10
t = linspace(t0, t1, 1) # tiempos en los que vamos a calcular la posición (t1 - t0)//dt
n = len(t)
r = zeros((n,3))
v = zeros((n,3))

#Velocidad y posición inicial de la partícula $v(t=0)$ y $r(t=0)$
r[0] = [0.0, 0.0, 0.0]
v[0] = [2.0, 0.0, 0.7] # velocidad sólo en eje x

#Fuerza experimentada por una partícula que se mueve a una velocidad $\vec{v}$ en un campo magnético $\vec{B}$:
#De aquí podemos sacar la aceleración gracias a la segunda ley de Newton: la velocidad y la posición!

#Creamos un campo magnético que va en el eje $z$ positivo (hacía arriba)
B = array([0, 0.1, 1.0])

#Realizamos los cálculos
for i in range(len(t)-1):
    a   = q/m* cross(v[i],B) 
    v[i+1] = v[i] + a*dt
    r[i+1] = r[i] + v[i+1]*dt

#Print de la trayectoria seguida por la partícula cargada

from mpl_toolkits.mplot3d import Axes3D

figure(figsize=(12,10))
ax = gca(projection='3d')
plot(r[:,0], r[:,1], r[:,2])

ax.set_xlabel("$x$",fontsize=26)
ax.set_ylabel("$y$",fontsize=26)
ax.set_zlabel("$z$",fontsize=26)