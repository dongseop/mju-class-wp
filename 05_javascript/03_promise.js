"use strict";

function asyncTask1(cb) {
  console.log("task1 start");
  setTimeout(function() {
    cb("task1");
  }, 2000);
}

function asyncTask2(cb) {
  console.log("task2 start");
  setTimeout(function() {
    cb("task2");
  }, 1000);
}

asyncTask2(function(ret) {
  console.log(ret + " done");
  asyncTask1(function(ret2) {
    console.log(ret2 + "done");
    // 추가적인 callback이 더 생긴다면???
  });
});

function promiseTask1() {
  console.log("task1 start");
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('task1');
    }, 2000);
  });
}

function promiseTask2() {
  console.log("task2 start");
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('task2');
    }, 1000);
  });
}

promiseTask2()
.then(function(ret) {
  console.log(ret + " done");
}).then(function() {
  return promiseTask1();
})
.then(function(ret) {
  console.log(ret + " done");
});
