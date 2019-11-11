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

