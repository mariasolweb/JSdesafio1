
const NUMERO_PARTIDOS = prompt("Ingrese el numero total de partidos jugados")
let sumatoria = 0
let promedio = 0

for(let i = 1; i <= NUMERO_PARTIDOS; i++){
    const GOLES = prompt("Ingrese cantidad de goles realizados: " + i)
sumatoria = sumatoria + parseFloat(GOLES)
console.log(sumatoria)
}

promedio = sumatoria / NUMERO_PARTIDOS

alert("El promedio de goles es "+ promedio)



