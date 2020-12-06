// Вводим число (0-999), получаем строку с прописью числа.

let number = (Math.floor(Math.random()*999)+1);
console.log(number);
let digit = String(number)

let arr = digit.split('');
console.log(arr);

if (arr.length == 1){ 
let simple = simpleDigits()
  console.log(simple)

}

else if (arr.length == 2 && number < 20){ 

  digit = arr[1]
  let tens = fromTenDigits()
console.log(`цифра  : ${tens}`)

}


else if (arr.length == 2){ 

  digit = arr[0]
  let tenNum = tenDigits();
    digit = arr[1]
    simpleNum = simpleDigits()
console.log(`цифра  : ${tenNum}  ${simpleNum}  `)

}


else if (arr.length == 3){ 

digit = arr[0]
let hundredNum = hundredDigits()

if (arr[1] == '1'){
 digit =  arr[2]
 tenNum = fromTenDigits()
 console.log(`цифра  : ${hundredNum} ${tenNum} `)
}
else if (arr[1] == '0'){
  digit = arr[2]
  simpleNum = simpleDigits()
  console.log(`цифра  : ${hundredNum} ${simpleNum} `)
}
else {
  digit = arr[1]
 tenNum = tenDigits();
 digit = arr[2]
simpleNum = simpleDigits()

console.log(`цифра  : ${hundredNum} ${tenNum}  ${simpleNum}  `)
}

  }

function simpleDigits(){


  switch(digit) {
  case '0':  digit = "0"
  break;
  case '1':  digit = "один"
  break;
  case '2':  digit = "два"
  break;
  case '3':  digit = "три"
  break;
  case '4':  digit = "четыре"
  break;
  case '5':  digit = "пять"
  break;
  case '6':  digit = "шесть"
  break;
  case '7':  digit = "семь"
  break;
  case '8':  digit = "восемь"
  break;
  case '9':  digit = "девять"
  break;
  
  } 
  return digit
  
  }


  function fromTenDigits(){
    switch(digit) {
      case "0":  digit = "десять"
      break;
      case "1": digit = "одиннадцать"
      break;
      case "2":  digit = "двенадцать"
      break;
      case "3":  digit = "тринадцать"
      break;
      case "4": digit = "четыренадцать"
      break;
      case "5":  digit = "пятьнадцать"
      break;
      case "6":  digit= "шестнадцать"
      break;
      case "7": digit = "семьнадцать"
      break;
      case "8": digit = "восемьнадцать"
      break;
      case "9":  digit = "девятьнадцать"
      break;
      
       default  : return "";
      } 
      return digit;
  }


    function tenDigits(){
      switch(digit) {
        case "2":  digit = "двадцать" 
        break;
        case "3": digit = "тридцать"
        break;
        case "4":  digit = "сорок" 
        break;
        case "5":  digit = "пятьдесять" 
        break;
        case "6":  digit = "шестьдесять" 
        break;
        case "7":  digit = "семьдесять"
        break;
        case "8":  digit = "восемьдесять" 
        break; 
        case "9":  digit = "девяносто" 
        break;
        
        } 
        return digit 
       
  }


  function hundredDigits(){
    switch(digit) {
      case "1":  digit = "сто"
      break;
      case "2": digit = "двести"
      break;
      case "3":  digit = "триста"
      break;
      case "4":  digit = "четыреста"
      break;
      case "5":  digit = "пятьсот"
      break;
      case "6":  digit = "шестьсот"
      break;
      case "7":  digit = "семьсот"
      break;
      case "8":  digit = "восемьсот"
      break;
      case "9":  digit = "девятьсот"
      break;
    }
    return digit;
   } 
  

