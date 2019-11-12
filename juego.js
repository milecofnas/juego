// Mile, muy buen trabajo! 

// Noto dos cosas en el código a mejorar, y no me es facil explicarlas de manera breve. 
// Asi que vamos comentándolas paso por paso, leelo tranquila cuando puedas, y si sentís que no queda claro, 
// podemos ver de hacer una breve videollamada así te termina de quedar claro. 

// La primera es que no tenemos manera de saber quién ganó. Si bien le decimos a los usuarios
// quién ganó, no es un dato que guardemos nosotras para poder usarlo después. 
// Para tenerlo disponible, debemos guardarlo en una variable. 
// Por ejemplo, hagamos dos variables:
// let puntajeJugador1 = 0;
// let puntajeJugador2 = 0;
// Cada vez que un jugador gana, dentro del if, podemos agregar puntajeJugador1++ o puntajeJugador2++ según corresponda
// (si es empate, no hacemos nada, porque nadie gana un punto). 
// Al terminar el juego, podemos por ejemplo comparar cual de las variables es mas grande
// Y mostrar al ganador. 
// Ahora bien, ¿cómo sabemos cuando termina el juego?

// Tal como esta hecho, este juego tiene siempre tres partidas, ya que el for sigue corriendo mientras 
// partidasJugadas sea mayor o igual a 0. 
// Hagamos que el código siga corriendo, sin importar el número de partidas, y sólo se detenga cuando uno de los
// jugadores alcance dos puntos. 
// Para hacer eso vamos a usar nuevamente las variables que declaramos antes. 
// Queremos que el juego se interrumpa cuando uno de los jugadores llegue a los 2 puntos
// Pero al for no le podemos decir "interrumpite cuando pase tal condición". Le tenemos que decir
// "Seguí ejecutandote mientras esta condición sea verdadera". 
// En este caso, interrumpirse cuando uno de los jugadores llega a dos puntos, es lo mismo que decir
// "seguí ejecutandote mientras los dos jugadores tengan menos de 2 puntos". 
// O dicho en javascript: puntajeJugador1 <= 2 && puntajeJugador2 <= 2

// Podemos poner esa condición en el for, así:
// for (let i = partidasJugadas; puntajeJugador1 <= 2 && puntajeJugador2 <= 2; i--) {

// (Notá que, en este caso, ni la  primera condición del for ni la última tienen mucha importancia, 
// ya que sólo nos interesa saber cuándo dejar de ejecutar el código)

// Con el codigo modificado de la manera que te comenté, ¿te animás a pensar vos como
// avisarle a jugador 1 o a jugador 2, quien es el ganador?





let jugador1 = prompt("JUGADOR 1, por favor ingrese su nombre")
let jugador2 = prompt("JUGADOR 2, por favor ingrese su nombre")

let partidasJugadas = 2

for (let i = partidasJugadas; partidasJugadas >= 0; i--) {
    
        var preguntaJugador1 = prompt(`${jugador1}: ¿Piedra, papel o tijera?`)
        var preguntaJugador2 = prompt(`${jugador2}: ¿Piedra, papel o tijera?`)

        if (preguntaJugador1 === "piedra" && preguntaJugador2 === "piedra") {
            alert("¡Empate!")
            partidasJugadas--
        }
        else if (preguntaJugador1 === "papel" && preguntaJugador2 === "papel") {
            alert("¡Empate!")
            partidasJugadas--
        }
        else if (preguntaJugador1 === "tijera" && preguntaJugador2 === "tijera") {
            alert("¡Empate!")
            partidasJugadas--
        }
        else if (preguntaJugador1 === "piedra" && preguntaJugador2 === "tijera") {
            var ganaJugador1 = alert(`¡Ganó ${jugador1}!`)
            partidasJugadas--
        }
        else if (preguntaJugador1 === "piedra" && preguntaJugador2 === "papel") {
            var ganaJugador2 = alert(`¡Ganó ${jugador2}!`)
            partidasJugadas--
        }
        else if (preguntaJugador1 === "papel" && preguntaJugador2 === "tijera") {
            var ganaJugador2 = alert(`¡Ganó ${jugador2}!`)
            partidasJugadas--
        }
        else if (preguntaJugador1 === "papel" && preguntaJugador2 === "piedra") {
            var ganaJugador1 = alert(`¡Ganó ${jugador1}!`)
            partidasJugadas--
        }
        else if (preguntaJugador1 === "tijera" && preguntaJugador2 === "piedra") {
            var ganaJugador2 = alert(`¡Ganó ${jugador2}!`)
            partidasJugadas--
        }
        else if (preguntaJugador1 === "tijera" && preguntaJugador2 === "papel") {
            var ganaJugador1 = alert(`¡Ganó ${jugador1}!`)
            partidasJugadas--
        }
        else {
            alert("Ingrese una respuesta válida")
        }
    }

