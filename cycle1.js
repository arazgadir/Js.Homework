//Найти сумму четных чисел и их количество в диапазоне от 1 до 99

let sumEvenNumbers = 0       // Переменная для Суммы четных Чисел 
let quantityEvenNumbers = 0    // Переменная для Количетсва четных Чисел

for (i = 0 ; i<=99; i++){

if (i%2===0){
    sumEvenNumbers = sumEvenNumbers + i;
    quantityEvenNumbers++
}
}

console.log(`Сумма четных чисел в диапазоне (1 - 99) = ${sumEvenNumbers}. \nКоличество = ${quantityEvenNumbers}` ) ;
