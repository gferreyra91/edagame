# Homework EDA 3.O
## Voy a responder a la pregunta principal ¿Qué harías si tuvieras que hacer tu propio www.eventbrite.com?

Creo que los principales requerimientos de Eventbrite se dividen en 2 categorías o puntos de vista, basados en el tipo de usuario de la plataforma:

+ Organizador del evento.
+ Compartir el evento que va a realizar.
+ Administrar las entradas y ventas.
+ Difundir el evento a realizar.
+ Asistente al evento.
+ Obtener información de los eventos que hay en una zona determinada.
+ Adquirir entradas a los eventos determinados.

Ahora bien, para cumplir con esos objetivos, se necesita una cantidad de gente y trabajo en equipo importante. Pensando como un ingeniero en sistemas próximo a recibirse, voy a describir qué herramientas y aspectos del desarrollo de software utilizaría para poder desarrollar un sistema que resuelva los requerimientos antes planteados, pero también pensando en realizar el trabajo en equipo de la manera más óptima.

## Lenguaje de programación y tecnologías
Una alternativa válida es la de unificar el lenguaje de programación, con el objetivo de que todos los desarrolladores, tanto de front-end como de back-end utilizarían en mismo lenguaje de programación. Cualquier desarrollador podría comprender, al menos mínimamente, cualquier parte del código del sistema.

La lenguaje en concreto que propongo es JavaScript, ya que posee librerías y frameworks tanto como para frontend (ReactJS) como para el backend (NodeJS y Express).

Además al seleccionar una librería como ReactJS para el front-end, permite compartir código para el desarrollo de aplicaciones móviles, a través de React Native.

React Native permite desarrollar con Javascript y la “arquitectura” basada en componentes de React, aplicaciones móviles nativas, tanto como Android como para iOS.

### Arquitectura
Propongo una arquitectura de tres niveles, empezando como parte central una api, que le brinde los servicios de la parte central del sistema a las vistas, web o aplicaciones móviles.

[!arquitectura](https://i.imgur.com/0KotriV.png)

### Base de datos
Creo que la disponibilidad y la consistencia son mucho más necesarios que la escalabilidad, por ello utilizaría una base de datos relacional, postgresql, ya que tiene compatibilidad con NodeJS y tiene mayor robustez y funcionalidades comparados con MariaDB o MySql.

### Seguridad
La seguridad es fundamental, no solamente por la sensibilidad de la información sino también a la hora de la venta de las entradas para los eventos.

Contar con estándares como OWASP para Web, nos permite desarrollar en forma defensiva, siendo conscientes de los ataques más comunes.

Para las funcionalidades de pago, utilizaría servicios externos como PayU o MercadoPago. Delegando esta responsabilidad me permite reducir el tiempo de desarrollo del sistema.

### Herramientas colaborativas de desarrollo y versionado de código
La organización de tareas es indispensable para poder reducir los tiempos y costos en el desarrollo del sistema. Propongo la utilización de las herramientas de la empresa Atlassian, principalmente Jira como organizador de tareas, y Bitbucket como versionado de código.

La integración de estas herramientas permite el control de la ejecución de las tareas de desarrollo, testing y producción. Funcionalidades como los “hooks” de Bitbucket, permiten disparar tareas de compilación, pruebas unitarias, integración y puesta en producción de manera automática.

### Metodología de desarrollo
Trataría de implementar la metodología TDD (test driven development). Pensar y desarrollar las pruebas antes de siquiera programar la funcionalidad requerida, brinda no solamente confianza y seguridad, sino que permite también descomponer el problema a solucionar en partes más pequeñas y “testeables”. En el caso de que la funcionalidad desarrollada sea luego transferida a otro desarrollador, para la corrección de bugs o mejoras, este último desarrollador ya cuenta no solamente con el código fuente, sino también con la prueba codificada, facilitando la comprensión de la funcionalidad.
