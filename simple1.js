//Если а – четное посчитать а*б, иначе а+б

let a = (Math.floor(Math.random()*100)+1);
let b = (Math.floor(Math.random()*100)+1);
let Result = 0;

if   (a%2==0){
    Result = a*b;

    console.log(`Product of ${a} and ${b} = ${Result}` ) 
}
else { 
    Result = a+b;
    console.log( `Sum of ${a} and ${b} = ${Result}`) 
};



