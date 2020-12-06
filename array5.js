//Посчитать сумму элементов массива с нечетными индексами


let RandomNumbers = () => Math.floor(Math.random() * 10) + 1;
let randoms = Array(10).fill(0).map(RandomNumbers);
console.log(randoms);

let result = 0;

for (let i = 1; i < randoms.length; i++) {
    console.log( randoms[i]);
    result = result + randoms[i]
    i++;
  }

  console.log(`Сумма элементов массива с нечетными индексами : ${result}`)