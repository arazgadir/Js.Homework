//Посчитать количество нечетных элементов массива

let RandomNumbers = () => Math.floor(Math.random() * 10) + 1;
let randoms = Array(10).fill(0).map(RandomNumbers);
console.log(randoms);

let max = 0; 

for (var name of randoms){
if (name%2 != 0){
  max++ 
}
}
console.log(`Количество нечетных элементов массива : ${max}`)