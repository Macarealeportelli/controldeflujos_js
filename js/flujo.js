// analizar si se cumple una condición

// let username = "Coderhouse"

// let username = prompt("Ingrese su nombre de usuario:")

// if (username == "Coderhouse") {
//     console.log("Bienvenido", username)
// } else {
//     console.warn("no se reconoce el usuario")
// }

//IF-ELSE IF
// let miOferta = prompt("Ingrese su oferta económica:")

// miOferta = parseInt(miOferta) //convertir en numero entero

// if (miOferta < 22) {
//     console.error("No way! Su oferta es demasiado baja")
// } else if (miOferta < 30) {
//     console.warn("Deberías estirarte un poco mas")
// } else if (miOferta < 50) {
//     console.warn("Estás cerca. Estirate solo un poco mas")
// } else if (miOferta < 80) {
//     console.log("Tu oferta es de nuestro interés. Remate ganado")
// }

//booleanos

// let confirma = confirm("¿Desea cambiar su sitema Operativo?")

// if (confirma) {
//     console.log("Instalando...")
// } else {
//     console.warn("Su sistema no cambiará")
// }

//EJERCICIO

let saludo = prompt("Ingrese su saludo:")

if (saludo === "Hola") {
    console.log(" Hola! Bienvenido")
} else {
    console.warn("No es un saludo válido")
}