//Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

let a = Math.floor(Math.random() * 100) + 1;
console.log(a)
let result = true
for (i=2; i<a ; i++) {
  
  if (a%i == 0){
    result=false
    
   break;
  }
  
}

if (result) {
  console.log(`Простое число`)
}
else  {
  console.log(`Составное число`)
}


    








 

