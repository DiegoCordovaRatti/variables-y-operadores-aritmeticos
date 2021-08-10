alert ("Ingrese 5 numeros")
let n1 = +prompt(`Ingresa tu primer numero: `)
let n2 = +prompt(`Ingresa tu segundo numero: `)
let n3 = +prompt(`Ingresa tu tercer numero: `)
let n4 = +prompt(`Ingresa tu cuarto numero: `)
let n5 = +prompt(`Ingresa tu quinto numero: `)

let sumatoria = n1 + n2 + n3 + n4 + n5
let promedio = sumatoria / 5

document.write(`<p class='text-center mt-5'>La suma de sus numeros es <strong>${sumatoria}</strong> y su promedio es <strong>${promedio}</strong></p>`)