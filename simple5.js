//Написать программу определения оценки студента по его рейтингу, на основе следующих правил

//Рейтинг 	Оценка
//0-19	    F
//20-39	    E
//40-59	    D
//60-74	    C
//75-89	    B
//90-100	A

let rating = (Math.floor(Math.random()*100)+1);

if (rating<20){
    console.log(` Rating : ${rating} \n Mark : F`)
}
if (rating>=20 &&rating<40 ){
    console.log(` Rating : ${rating} \n Mark : E`)
}
if (rating>=40 && rating<60){
    console.log(` Rating : ${rating} \n Mark : D`)
}
if (rating>=60 && rating<75){
    console.log(` Rating : ${rating} \n Mark : C`)
}
if (rating>=75 && rating<90){
    console.log(` Rating : ${rating} \n Mark : B`)
}
if (rating>=90 && rating<101){
    console.log(` Rating : ${rating} \n Mark : A`)
}




