let jugador1 = prompt("JUGADOR 1, por favor ingrese su nombre")
let jugador2 = prompt("JUGADOR 2, por favor ingrese su nombre")

let partidasJugadas = 3
let puntajeJugador1 = 0
let puntajeJugador2 = 0

for (let i = partidasJugadas; puntajeJugador1 <= 2 && puntajeJugador2 <= 2; i--) {

    var preguntaJugador1 = prompt(`${jugador1}: ¿piedra, papel o tijera?`)
    var preguntaJugador2 = prompt(`${jugador2}: ¿piedra, papel o tijera?`)

    if (preguntaJugador1.toLowerCase()  === "piedra" && preguntaJugador2.toLowerCase() === "piedra") {
        alert("¡Empate!")
    }
    else if (preguntaJugador1.toLowerCase() === "papel" && preguntaJugador2.toLowerCase() === "papel") {
        alert("¡Empate!")
    }
    else if (preguntaJugador1.toLowerCase() === "tijera" && preguntaJugador2.toLowerCase() === "tijera") {
        alert("¡Empate!")
    }
    else if (preguntaJugador1.toLowerCase() === "piedra" && preguntaJugador2.toLowerCase() === "tijera") {
        alert(`¡Ganó ${jugador1}!`)
        puntajeJugador1++
        console.log(jugador1 + puntajeJugador1)
    }
    else if (preguntaJugador1.toLowerCase() === "piedra" && preguntaJugador2.toLowerCase() === "papel") {
        alert(`¡Ganó ${jugador2}!`)
        puntajeJugador2++
        console.log(jugador2 + puntajeJugador2)
    }
    else if (preguntaJugador1.toLowerCase() === "papel" && preguntaJugador2.toLowerCase() === "tijera") {
        (`¡Ganó ${jugador2}!`)
        puntajeJugador2++
        console.log(jugador2 + puntajeJugador2)
    }
    else if (preguntaJugador1.toLowerCase() === "papel" && preguntaJugador2.toLowerCase() === "piedra") {
        (`¡Ganó ${jugador1}!`)
        puntajeJugador1++
        console.log(jugador1 + puntajeJugador1)
    }
    else if (preguntaJugador1.toLowerCase() === "tijera" && preguntaJugador2.toLowerCase() === "piedra") {
        alert(`¡Ganó ${jugador2}!`)
        puntajeJugador2++
        console.log(jugador2 + puntajeJugador2)
    }
    else if (preguntaJugador1.toLowerCase() === "tijera" && preguntaJugador2.toLowerCase() === "papel") {
        alert(`¡Ganó ${jugador1}!`)
        puntajeJugador1++
        console.log(jugador1 + puntajeJugador1)
    }
    else {
        alert("Ingrese una respuesta válida")
    }
}
if (puntajeJugador1 >= 3) {
    alert (`¡Ganó todo el juego ${jugador1}!`)
}
else {
    alert (`¡Ganó todo el juego ${jugador2}!`)
}

