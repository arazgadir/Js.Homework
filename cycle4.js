//Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

let factorial = (Math.floor(Math.random()*10)+1); //Факториал Чисел от 1 до 10 . Можно изменить диапазон чисел изменив число "10"  на 20, 30 и т.д. 
let result = 1
let equal = 1

while (equal<=factorial){
    result = result*equal
    equal++
}

console.log(`Факториал числа ${factorial} = ${result}`);