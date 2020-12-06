//вести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

let number = (Math.floor(Math.random()*100000)+1); // Случайные числа до 100 000. Можете изменить длину цифр . 
console.log(number);

function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverseNumber(number));



