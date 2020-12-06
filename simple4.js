//Посчитать выражение макс (а*б*с,  а+б+с)+3

let a = (Math.floor(Math.random()*200)-100);
let b = (Math.floor(Math.random()*200)-100);
let c = (Math.floor(Math.random()*200)-100); 

console.log(`Numbers : ${a}, ${b}, ${c}`)

let sum = a+b+c
let product = a*b*c
let result = 0

if (product>sum){
    result = product + 3
    console.log(`Product of three numbers =  ${product}. Answer is  ${product} + 3 = ${result}`)
     }
     
else {
    result = sum + 3
    console.log(`Sum of three numbers =  ${sum}. Answer is ${sum} + 3 =  ${result}`)
     }