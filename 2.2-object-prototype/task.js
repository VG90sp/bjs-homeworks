//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function isPalindrome() {
    let sentence = this.toUpperCase();
    for (let i = 0; i <= sentence.length; i++) {
      if (sentence[i] === sentence[sentence.length - 1 - i]) {
        return true;
      } return false;
    }
}

function getAverageMark(marks)  {
    if (marks.length === 0){
        return 0
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++ ){
        sum = sum + marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}


function checkBirthday(birthday) {
    let now = Date.now();
    let diff = now - Number(new Date(birthday));
    let age = diff / 31557600000;
    if (age > 18) {
        return true;
    } else false;

}