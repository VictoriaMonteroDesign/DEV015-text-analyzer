# Analizador de texto

## Índice

* [1. Descripción del proyecto](#1-descripcion-del-proyecto)
* [2. Funcionalidades Requeridas](#2-funcionalidades-requeridas)
* [3. Prototipado](#3-prototipado)
* [4. Desarrollo](#4-Desarrollo)
* [5. Testing](#5-testing)

***

## 1. Descripción del proyecto

En este proyecto crearás una aplicación web que servirá para que la usuaria
pueda analizar un texto en el navegador mostrando una serie de indicadores y
métricas específicas sobre caracteres, letras, números, etc.

## 2. Funcionalidades Requeridas

El analizador de texto debe tener una caja de texto donde el usuario pueda 
ingresar un input, tambien debe tener un boton para limpiar la caja y debe 
calcular las siguientes métricas y actualizar el resultado en tiempo real 
a medida que la usuaria escribe su texto:

  - **Recuento de palabras**: la aplicación debe poder contar el número de
    palabras en el texto de entrada y mostrar este recuento a la usuaria
  - **Recuento de caracteres**: la aplicación debe poder contar el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y mostrar este recuento a la usuaria.
  - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación debe poder contar el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento
    a la usuaria.
  - **Recuento de números**: la aplicación debe contar cúantos números hay en
    el texto de entrada y mostrar este recuento a la usuaria.
  - **Suma total de números**: la aplicación debe sumar todos los números que
    hay en el texto de entrada y mostrar el resultado a la usuaria.
  - **Longitud media de las palabras**: la aplicación debe calcular la
    longitud media de las palabras en el texto de entrada y mostrársela a la usuaria.

## 3. Prototipado

![Wireframe Desktop en Figma]("https://i.imgur.com/kidGh9i.png")

Realizando un wireframe en alta de mi prototipo en Figma de como me gustaria que 
luciera mi producto final en su mejor escenario.

## 4. Desarrollo

**Sprint 1**

1- Tuve que realizar un fork del repositorio entregado por Laboratoria, luego 
tuve que generar mi llave ssh para poder enlazar ese repositorio a mi visual code
en mi computadora. El proceso del clone me tomo mas tiempo, ya que me estuvo 
generando error, y luego cuando quise dar npm start no me funcionaba correctamente,
finalmente tuve que borrar todo y volver a hacer el proceso completo, con lo cual 
logre que quedara funcionando correctamente.

2- Lei el Readme y me hice una idea de como queria que se viera mi proyecto, con
lo cual pase a plasmarlo en Figma.

3- Trabaje en el Html y Css, en general avance bastante rapido en esta parte,
dejandolo a un nivel basico que me permitiera empezar a programar en Javascrip.
Las unicas problematicas que se me presentaron fueron:
- No pude hacer que el fondo fuera una imagen alojada de forma local
- No logre que mis li quedaran correctamente centrados.

**Sprint 2**

1- Dedique mas tiempo de lo que debia a tratar de solucionar mis problemas con 
el css, ademas de seguir trabajando en que la visual fuera lo mas cercano a
lo que hice en mi prototipo

2- Inicie en las funcionalidades de Javascript, las cuales no terminaba de 
entender, y dedique el resto del sprint en leer distinto tipo de informacion
que me proporcionaba google.

**Sprint 3**

1- Segui trabajando en mi javascript en mi index, logrando medianamente que 
funcionara mi contador de caracteres, pero me quede atascada en el contador de 
palabras.

2- Finalmente agente una OH en la cual Marcia me ayudo a enfocarme bien en el 
proceso que debia seguir para encontrar la formula correcta. Con lo cual borramos
lo que habia hecho hasta ese momento, lo cual no terminaba de entender, y 
comenzamos desde 0, trabajando conjuntamente en el index y el analayzer.

3- Me explico Marcia como enlazar de forma correcta mi index a mi analyzer y a 
mi html. 

4- Pude dejar funcionando correctamente mi contador de cracteres y mi contador
de palabras.

**Sprint 4**

1- Inicie trabajando en las funcionalidades que me hacian falta, las cuales logre
dejar funcionando correctamente en mi javascript.

2- Comenze a realizar mis testing hasta dejar todos mis error en el test oas 
funcionando correctamente.

3- En mis e2e se me presentaron problemas ya que no entendia los errores, con lo 
cual tuve que agendar una OH, y Daniel me ayudo a entenderlos y solucionarlos, 
y pude seguir yo trabajando en pasar todos los test

![Analizador de texto]("https://i.imgur.com/rbeh0TL.png")

## 5. Testing

En cuanto a mis testing, logre que tanto mis oas y mis e2e salieran correctos, 
luego active los test opcionales, donde la mayoria salieron buenos, excepto un 
par y de los cuales hubo uno que no logre que se arreglara para cuando ya decidi
que agendar mi PF.

![Testing01]("https://i.imgur.com/GzQc7nd.png")
![Testing02]("https://i.imgur.com/3AhHOWw.png")
![Testing03]("https://i.imgur.com/WxUlIJn.png")
