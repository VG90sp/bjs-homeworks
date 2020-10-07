class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return (this.state *= 1.5);
       }
        set state(state) {
             if (state < 0) {
             return (this._state = 0);

             } else if (state > 100) {
             return (this._state = 100);

             } else {
             return (this._state = state);
             }
        }
        get state() {
            return this._state;
       }
    }

    class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount, state) {
            super(name, releaseDate, pagesCount, state);
            this.type = "magazine"
        }
    }

    class Book extends PrintEditionItem {
        constructor (author, name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount);
            this.author = author;
            this.type = 'book';
        }
    }

    class NovelBook extends Book {
        constructor(author, name, releaseDate, pagesCount, state) {
            super(author, name, releaseDate, pagesCount, state);
            this.type = "novel";
        }
    }

    class FantasticBook extends Book {
        constructor(author, name, releaseDate, pagesCount, state) {
            super(author, name, releaseDate, pagesCount, state);
            this.type = "fantastic";
        }
    }

    class DetectiveBook extends Book {
        constructor(author, name, releaseDate, pagesCount, state) {
            super(author, name, releaseDate, pagesCount, state);
            this.type = "detective";
        }
    }

    class Library {
        constructor(name) {
             this.name = name;
             this.books = []; 
        }
        addBook(book) {
            if (book.state > 30)
   
            return this.books.push(book);
       }
       findBookBy(type, value) {
        for (let key in this.books) {
            if (this.books[key][type] == value)
            return this.books[key];
        }

        return null;
       }

       giveBookByName(bookName) {
        for (let key in this.books) {
         if (this.books[key].name == bookName) 
         return this.books.splice(key, 1)[0];
        }

        return null;
     }   
}


class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if (typeof this.marks[subject] === "undefined") {
            this.marks[subject] = [];
        }

        if (grade < 1 || grade > 5 || isNaN(grade)) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this.marks[subject].length;
        }
        else 
            this.marks[subject].push(grade);
            return this.marks[subject].length;
    }

    getAverageBySubject(subject) {
        let subjectSum = 0;

        if (this.marks[subject].length == 0) {
            return 0;
        }

        for (let i = 0; i < this.marks[subject].length; i++){
            subjectSum += this.marks[subject][i];      
        }
        return subjectSum / this.marks[subject].length;
    }

    getTotalAverage() {

        let sum = 0;
        let length = 0;
        if (Object.keys(this.marks).length === 0) {
            return 0;
        } 
        else {
            for (let key in this.marks) {
                length += this.marks[key].length;
                for (let i = 0; i < this.marks[key].length; i++) {
                    sum += this.marks[key][i];
                 } 
            }
            return sum / length;
        }
    }
}