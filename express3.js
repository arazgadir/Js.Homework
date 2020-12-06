// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число.


let digit = "триста двадцать пять"          // можно менять значение переменной на другое число

let arr = digit.split(' ');
console.log(arr);

if (arr.length == 1){ 
let simple = simpleDigits()
  console.log(simple)

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
 console.log(`цифра  : ${hundredNum}${tenNum} `)
}
else if (arr[1] == '0'){
  digit = arr[2]
  simpleNum = simpleDigits()
  console.log(`цифра  : ${hundredNum}${simpleNum} `)
}
else {
  digit = arr[1]
 tenNum = tenDigits();
 digit = arr[2]
simpleNum = simpleDigits()

console.log(`цифра  : ${hundredNum}${tenNum}${simpleNum}  `)
}

  }

function simpleDigits(){


  switch(digit) {
  case 'ноль':  digit = "0"
  break;
  case 'один':  digit = "1"
  break;
  case 'два':  digit = "2"
  break;
  case 'три':  digit = "3"
  break;
  case 'четыре':  digit = "4"
  break;
  case 'пять':  digit = "5"
  break;
  case 'шесть':  digit = "6"
  break;
  case 'семь':  digit = "7"
  break;
  case 'восемь':  digit = "8"
  break;
  case 'девять':  digit = "9"
  break;
  case "десять":  digit = "10"
  break;
  case "одиннадцать": digit = "11"
  break;
  case "двенадцать":  digit = "12"
  break;
  case "тринадцать":  digit = "13"
  break;
  case "четыренадцать": digit = "14"
  break;
  case "пятьнадцать":  digit = "15"
  break;
  case "шестнадцать":  digit= "16"
  break;
  case "семьнадцать": digit = "17"
  break;
  case "восемьнадцать": digit = "18"
  break;
  case "девятьнадцать":  digit = "19"
  break;
  } 
  return digit
  
  }

    function tenDigits(){
      switch(digit) {
        case "двадцать":  digit = "2" 
        break;
        case "тридцать": digit = "3"
        break;
        case "сорок":  digit = "4" 
        break;
        case "пятьдесять":  digit = "5" 
        break;
        case "шестьдесять":  digit = "6" 
        break;
        case "семьдесять":  digit = "7"
        break;
        case "восемьдесять":  digit = "8" 
        break; 
        case "девяносто":  digit = "9" 
        break;
        
        } 
        return digit 
       
  }


  function hundredDigits(){
    switch(digit) {
      case "сто":  digit = "1"
      break;
      case "двести": digit = "2"
      break;
      case "триста":  digit = "3"
      break;
      case "четыреста":  digit = "4"
      break;
      case "пятьсот":  digit = "5"
      break;
      case "шестьсот":  digit = "6"
      break;
      case "семьсот":  digit = "7"
      break;
      case "восемьсот":  digit = "8"
      break;
      case "девятьсот":  digit = "9"
      break;
    }
    return digit;
   } 
  

