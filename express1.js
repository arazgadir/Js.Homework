//Получить строковое название дня недели по номеру дня. 

let a = Math.floor(Math.random() * 7)+1;

console.log (`Number of the day : ${a}`)

switch (a){
case 1 : console.log(`Monday`);
         break;
case 2 : console.log(`Tuesday`);
         break;
case 3 : console.log(`Wednesday`);
         break;
case 4 : console.log(`Thursday`);
         break;
case 5 : console.log(`Friday`);
         break;
case 6 : console.log(`Sutarday`);
         break;
case 7 : console.log(`Sunday`);
         break;
}