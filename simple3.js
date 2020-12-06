//Найти суммы только положительных из трех чисел

let a = (Math.floor(Math.random()*200)-100);
let b = (Math.floor(Math.random()*200)-100);
let c = (Math.floor(Math.random()*200)-100);

let result = 0
console.log(`Numbers : a = ${a}, b = ${b}, c = ${c}`)

if (a > 0  && b > 0 && c > 0){
    result = a+b+c
        console.log(`a+b+c = ${a} + ${b} + ${c} = ${result}`)}
else if (a > 0  && b > 0){
    result = a+b
        console.log(`a+b = ${a} + ${b} = ${result}`)}
else if (a > 0 && c > 0){
    result = a+c
        console.log(`a+c = ${a} + ${c} = ${result}`)}
else if (b > 0 && c > 0){
    result = b+c
        console.log(`b+c = ${b} + ${c} = ${result}`)}

else if (a < 0  && b < 0 && c < 0){
        console.log(`Numbers are negative`)}

else if (a < 0  && b < 0){

        console.log(`You have 2 negative numbers`)}
else if (a < 0 && c < 0){

        console.log(`You have 2 negative numbers`)}
else if (b < 0 && c < 0){

        console.log(`You have 2 negative numbers`)}




