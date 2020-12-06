//Найти индекс максимального элемента массива


let RandomNumbers = () => Math.floor(Math.random() * 100) + 1;
let randoms = Array(10).fill(0).map(RandomNumbers); 
console.log(randoms)

let max = 0; 

for (var name of randoms){
if (name>max){
  max = name 
}
}
console.log(`Maximal element of massive = ${max}`)

const maxindex = randoms.indexOf(max);

console.log(`Index ox maximal element of massivemaxindex: ${maxindex}`)