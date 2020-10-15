function parseCount(input) {
  const parsed = Number.parseInt(input);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    } 
    return parsed
}

function validateCount(input) {
    try {
        return parseCount(input);
    }catch(e){
        return new Error("Невалидное значение");
    }
}

class Triangle {
    constructor (a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
try {
    return new Triangle(a, b, c);
} catch(e) {
    return {
        getArea: () => "Ошибка! Треугольник не существует",
        getPerimeter: () => "Ошибка! Треугольник не существует"
    }
}
}