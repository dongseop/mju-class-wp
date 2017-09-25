"use strict";

var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["Apple", "Orange", "Cheese cake"];

var arr3 = arr1.map(function(i) {
  return i * 3;
});
var arr4 = arr1.map(i => {
  return i * 3;
});
var arr5 = arr1.map(i => i * 3);

[arr1, arr2, arr3, arr4, arr5].forEach( e => {console.log(e);});

console.log(arr2.map(e => e.length));

console.log(arr1.reduce(function(i, sum) {
  return sum + i;
}, 0));

console.log(arr1.reduce((i, c) => c + i, 0));

console.log(arr1.filter(e => e % 2 == 1).map(e => e * 2).join("-"));

class A {
  constructor() {
    this.a = 10;
  }
  print() {
    setTimeout(function() {
      console.log("this.a = " + this.a);
    }, 2000);
  }
}

class B {
  constructor() {
    this.a = 10;
  }
  print() {
    setTimeout(() => {
      console.log("this.a = " + this.a);
    }, 2000);
  }
}

let a = new A;
a.print();
let b = new B;
b.print();

console.log("Wait for asynchronous functions...");
