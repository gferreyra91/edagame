This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# EDA Game, adivina número de 4 cifras

Autor: Gastón Ferreyra.
Desarrollado para la entrevista laboral de EventBrite.

# Instrucciones para la ejecución
1. Clonar la rama "master" del repositorio.
2. Dentro del directorio, ejecutar el comando `npm install`.
3. Ejecutar el comando `npm start`.

# Instrucciones del juego

Existen 2 opciones del juego:
1. El usuario cumple el rol de adivinar un número de 4 dígitos distintos que genera la CPU. "Adivinar".
2. El usuario ingresa un número de 4 dígitos distintos y la CPU se encarga de adivinar. "Ser adivinado".

Los modos de juego se pueden seleccionar en la parte superior de la pantalla.

## Adivinar
El usuario selecciona "nuevo juego". Luego ingresa un intento en el campo inferior. Si el usuario acerta al número de la CPU, aparece el mensaje "JUEGO TERMINADO"

## Ser adivinado
El usuario ingresa un número a adivinar, luego selecciona "comenzar" y luego puede ver los intentos de la CPU hasta acertar el número ingresado.

# Ejecución de tests
1. `npm test`