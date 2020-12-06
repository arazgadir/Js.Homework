// Найти расстояние между двумя точками в двумерном декартовом пространстве.

let x1 = Math.floor(Math.random() * 20) -10; // числа от -10 до 10
let x2 = Math.floor(Math.random() * 20) -10; // числа от -10 до 10
let y1 = Math.floor(Math.random() * 20) -10; // числа от -10 до 10
let y2 = Math.floor(Math.random() * 20) -10; // числа от -10 до 10

console.log(`\nКоординаты точки А : ${x1} и ${y1}`)
console.log(`Координаты точки B : ${x2} и ${y2}`)


let legX = Math.abs(x1 + x2) 
let legY = Math.abs(y1 + y2)

let hypotenuzeC = Math.sqrt(Math.pow(legX,2)+Math.pow(legY,2))

console.log(`\nРасстояние от А до B : ${hypotenuzeC}\n`)