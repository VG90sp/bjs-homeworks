"use strict"
function getResult(a,b,c){
    let D = 0;
    D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
      return[];
    }
    if (D === 0) {
      const result = -b / (2 * a);
      return [result];
  }
  else if (D > 0) {
    const resultFirst = (-b + Math.sqrt(D))/(2*a);
    const resultSecond = (-b - Math.sqrt(D))/(2*a);
    return [resultFirst,resultSecond];
  }

    
}

function getAverageMark(marks){
    let sum = 0;
    if (marks.length == 0) {
        return 0;
    }else  {
        console.log ("среднее число, первых пяти оценок");
        marks = marks.slice(0, 5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]; 
    }
      let averageMark = sum / marks.length;
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