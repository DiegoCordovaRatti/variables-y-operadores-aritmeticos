let dias = +prompt(`ingresa una cantidad de días para calcular a cuantos años, semanas y días equivale`)

let anios = Math.floor(dias / 365)
let semanas = Math.floor((dias - (anios * 365))/7)
let dia = Math.floor(dias - (anios * 365) - (semanas * 7))

document.write(`<p class='text-center mt-5'><strong>${dias} días</strong> equivalen a <strong>${anios} años</strong>, <strong>${semanas} semanas</strong> y <strong>${dia} días</strong></p>`)
