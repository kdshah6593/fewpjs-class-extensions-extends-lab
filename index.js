// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, e) => total + e, 0);
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides === 3) {
            let [a,b,c] = this.sides;
            if (a + b > c && a + c > b && b + c > a) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let [a, b, c, d] = this.sides
            if (a === b && a === c && a === d) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    get area() {
        let side1 = this.sides[0];
        return side1 ** 2
    }
}