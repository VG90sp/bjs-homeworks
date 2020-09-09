"use strict"
function getResult(a,b,c){
    let x = [];
    
}

function getAverageMark(marks){
    let sum = 0;
    let arrayMark = marks;

    if (marks.length == 0) {
        return 0;
    }else  {
        console.log ("среднее число, первых пяти оценок");
        arrayMark = marks.slice(0, 5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum += arrayMark[i]; 
    }
      let averageMark = sum / arrayMark.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

  if (age >= 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
}