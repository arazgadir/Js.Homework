//Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))



let RandomNumbers = () => Math.floor(Math.random() * 100) + 1;
let randoms = Array(10).fill(0).map(RandomNumbers);

console.log(randoms)

function bubbleSort() {
  for (let j = randoms[9]; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (randoms[i] > randoms[i + 1]) {
        let temp = randoms[i];
        randoms[i] = randoms[i + 1];
        randoms[i + 1] = temp;
      }
    }
  }
  return randoms
}

console.log(bubbleSort())