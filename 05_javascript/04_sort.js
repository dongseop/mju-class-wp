"use strict";

function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function bubbleSort(arr) {
  var i, j;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

var arr1 = [6, 3, 2, 7, 8, 3, 1, 0, 9, 5];
var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));
console.log(bubbleSort(arr3));