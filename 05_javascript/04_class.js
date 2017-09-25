"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  print() {
    console.log(`width=${this.width}, height=${this.height}`);
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }

  static printName() {
    console.log("Square");
  }
}

var square = new Square(2);
square.print();
console.log(square.area);

square.sideLength = 10;
square.print();
console.log(square.area);

Square.printName();