//Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

let RandomNumbers = () => Math.floor(Math.random() * 100) + 1;
let randoms = Array(10).fill(0).map(RandomNumbers);       //Массив принимает 10 случайных чисел от 1 до 100
console.log(randoms);

let t = 0;

let halfRandoms = randoms.length/2;
let temp = halfRandoms + randoms.length % 2;

for ( i = 0; i < halfRandoms; i++) {

  t = randoms[i];
  randoms[i] = randoms[temp + i];
  randoms[temp + i] = t;
}

console.log(randoms)



