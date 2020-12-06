//Сделать реверс массива (массив в обратном направлении)

let RandomNumbers = () => Math.floor(Math.random() * 10) + 1;
let randoms = Array(10).fill(0).map(RandomNumbers);
console.log(randoms);

randoms.reverse();

console.log(randoms)