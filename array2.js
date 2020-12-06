//Найти максимальный элемент массива

let RandomNumbers = () => Math.floor(Math.random() * 100) + 1;
let randoms = Array(10).fill(0).map(RandomNumbers); 
console.log(randoms)

var max = 0; 

for (var name of randoms){
if (name>max){
  max = name 
}
}
console.log(`Maximal element of massive = ${max}`)

