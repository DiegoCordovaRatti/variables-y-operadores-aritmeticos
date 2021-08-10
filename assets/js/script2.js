let celsius = +prompt(`Hola, ingresa la temperatura en grados Celsius`)

let kelvin = (celsius + 273.15)
let fahrenheit = (celsius * 9 / 5) + 32

document.write(`<p class='text-center mt-5'><u>${celsius}°C</u> equivale tanto a <u>${kelvin}°K</u>, como a <u>${fahrenheit}°F</u></p>`)