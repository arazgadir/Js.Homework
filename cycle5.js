//Посчитать сумму цифр заданного числа

let num = (Math.floor(Math.random()*100)+1);
let sum = 0
for (i=0; i<=num; i++) {
sum = sum +i
}

console.log (`Сумма цифр ${num} = ${sum}` )
