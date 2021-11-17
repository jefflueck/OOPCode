// const add = (x, y) => x + y;
// const multi = (x, y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;

// Creating our own math object and adding in functions we set above in variables.
// const myMath = {};
// myMath.add = add;
// myMath.multi = multi;

// Creating an object myMath and adding our functions using the variable names.
// const myMath = { add, multi, square, power };

// Adding them inline to our new myMath object.
// const myMath = {
//   add: function (x, y) {
//     return x + y;
//   },
//   multi: function (x, y) {
//     return x * y;
//   },
// };

// This yet another way we have learned on how we can add functions to objects.
// const myMap = {
//   add(x, y) {
//     return x + y;
//   },
//   square(x) {
//     return x * x;
//   },
// };

// function getHypotenuse(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }

// function getArea(a, b) {
//   return (a * b) / 2;
// }

// let side1 = 4;
// let side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1, side2);

// We can start to make this more streamlined by using the this to reference the values in the object and pass them in dynamically to the method call.
// let triangle = {
//   a: 3,
//   b: 4,
//   printThis: function () {
//     console.log(this);
//   },
//   getArea: function () {
//     // Here we are using this to set a and b to the set values above without passing them in as parameters.
//     return (this.a + this.b) / 2;
//   },
//   getHypotenuse: function () {
//     // Here we are using this to set a and b to the set values above without passing them in as parameters.
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   },
// };

// writing the object literal above as a constructor function instead.
// function Triangle(a, b) {
//   this.a = a;
//   this.b = b;
//   this.getArea = function () {
//     return (this.a + this.b) / 2;
//   };
//   this.getHypotenuse = function () {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   };
// }

// // To call this as a constructor function we use the new keyword and store it to a variable.
// const t1 = new Triangle(3, 4);
// const t2 = new Triangle(5, 6);

// Triangle.prototype.getArea = function () {
//   return (this.a + this.b) / 2;
// };
// Triangle.prototype.getHypotenuse = function () {
//   return Math.sqrt(this.a ** 2 + this.b ** 2);
// };

// // Illustrating that we can over wright an prototype built in method method.
// // ! Something we should never do. Only showing for the sake of seeing that every built in object has built in methods. This is only accepted for a polyfill.
// Array.prototype.push = function (val) {
//   console.log(`So you want to add ${val}`);
//   console.log(`Sorry don't feel like it!`);
// };

// // Classes
// class Triangle {
//   greet() {
//     console.log('Hello from triangle.');
//   }
//   display() {
//     // The this is going to refer to the instance of the triangle class not the triangle itself. Important to know how it is happening.
//     console.log(`Triangle with the sides of ${this.a} and ${this.b}`);
//   }
// }

// // This will return undefined because we never set an a or b value.
// const firstTri = new Triangle();
// const secondTri = new Triangle();

// const firstTri = new Triangle();
// // ! We are manually adding these values into our new triangle objects we are creating. When we call the new Triangle() we are creating a new instance of the object based on the class structure with the name firstTri.
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// // ! Same here as above but giving new values to as well as creating a new object instance of Triangle.
// secondTri.a = 9;
// secondTri.b = 12;

// // Adding in constructors
// // Adding properties to a constructor for when the object is created.
// class Triangle {
//   constructor(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   greet() {
//     console.log('Hello from triangle.');
//   }
//   display() {
//     console.log(
//       `Triangle with the sides of ${this.a} and ${this.b} and ${this.c}`
//     );
//   }
// }

// Checking data using a constructor before the object is created.
// class Triangle {
//   constructor(a, b, c) {
//     for (let side of [a, b, c]) {
//       if (!Number.isFinite(side) || side <= 0) {
//         throw new Error('Sides must be positive numbers!');
//       }
//     }
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   greet() {
//     console.log('Hello from triangle.');
//   }
//   display() {
//     console.log(
//       `Triangle with the sides of ${this.a} and ${this.b} and ${this.c}`
//     );
//   }
// }

// confused on some of the functionality we have in this class.
class Triangle {
  constructor(a, b, c) {
    for (let side of [a, b, c]) {
      if (!Number.isFinite(side) || side <= 0) {
        throw new Error('Sides must be positive numbers!');
      }
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  greet() {
    console.log('Hello from triangle.');
  }
  display() {
    console.log(
      `Triangle with the sides of ${this.a} and ${this.b} and ${this.c}`
    );
  }
  getArea() {
    // Using destructuring in line 180
    // I do not understand why we have to do this here in this function.
    // I also do not understand how we are destructuring this to get the same behavior in line 175 with the parameters a,b,c
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  isBig() {
    return this.getArea() > 50;
  }
}
