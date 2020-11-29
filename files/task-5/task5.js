// task 1

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
console.log(propsCount(mentor));

// task 2

function showProps(obj) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
}

let student = {
  firstName: "Oleh",
  lastName: "Lytvyn",
  age: 29,
  married: false,
  location: "lviv",
};

showProps(student);

// task 3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(middleName) {
    this.middleName = middleName;
    console.log(this.name + " " + this.surname + " " + this.middleName);
  }
  showCourse() {
    let today = new Date();
    let time = parseInt(today.getFullYear());
    let courseNum = time - this.year;
    console.log("Current course: " + courseNum);
  }
}

let student1 = new Student("Petro", "Petrenko", 2016);
student1.showFullName("Petrovych");
student1.showCourse();

// task 4

class Worker {
  #experiance = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    let salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  showSalaryWithExpirience() {
    let salaryWithExp = this.dayRate * this.workingDays * this.#experiance;
    console.log(`${this.fullName} salary: ${salaryWithExp}`);
    return salaryWithExp;
  }
  get setExp() {
    return this.#experiance;
  }
  set setExp(value) {
    this.#experiance = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New expirience: " + worker1.setExp);
worker1.showSalaryWithExpirience();
worker1.setExp = 1.5;
console.log("New expirience: " + worker1.setExp);
let salary1 = worker1.showSalaryWithExpirience();
console.log("***");

let worker2 = new Worker("Tom Tomphson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New expirience: " + worker2.setExp);
worker2.showSalaryWithExpirience();
worker2.setExp = 1.5;
console.log("New expirience: " + worker2.setExp);
let salary2 = worker2.showSalaryWithExpirience();
console.log("***");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New expirience: " + worker3.setExp);
worker3.showSalaryWithExpirience();
worker3.setExp = 1.5;
console.log("New expirience: " + worker3.setExp);
let salary3 = worker3.showSalaryWithExpirience();
console.log("***");

// Sorted salary:
let sumSalary = new Array();
sumSalary.push(salary1);
sumSalary.push(salary2);
sumSalary.push(salary3);
sumSalary.sort(function (a, b) {
  return a - b;
});

console.log("Sorted salary: ");
console.log(worker1.fullName + ": " + sumSalary[0]);
console.log(worker2.fullName + ": " + sumSalary[1]);
console.log(worker3.fullName + ": " + sumSalary[2]);

// task 5

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Triangle extends GeometricFigure {
  constructor(baseOfTriangle, height) {
    super();
    this.baseOfTriangle = baseOfTriangle;
    this.height = height;
  }

  getArea() {
    let area = (this.baseOfTriangle * this.height) / 2;
    return area;
  }
}
class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side * this.side;
  }
}
class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
function handleFigures(figures) {
  let arr = new Array();
  figures.forEach((element) => {
    console.log(
      "Geometric figure: " +
        element.toString() +
        " - area: " +
        element.getArea()
    );
    arr.push(element.getArea());
  });
  let sum = arr.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
}

let figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);
