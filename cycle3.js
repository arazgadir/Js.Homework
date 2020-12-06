//Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

let a = (Math.floor(Math.random()*100)+1);


const sq = Math.sqrt(a)
const result = parseInt(sq);
console.log(`Квадратный корень из числа ${a} : ${result} `) 

