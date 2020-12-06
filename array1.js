//Найти минимальный элемент массива

let RandomNumbers = () => Math.floor(Math.random() * 100) + 1;
let randoms = Array(10).fill(0).map(RandomNumbers); 
console.log(randoms)

let min = 100; 

for (var name of randoms){
if (name<min){
    min = name 
}
}
console.log(`Minimal element of massive = ${min}`)