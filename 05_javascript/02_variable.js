a = 100;
var b;

console.log("global1: a=" + a + ", b=" + b);

function func1() {
    var a = 300;
    b = 300;
    console.log("func1: a=" + a + ", b=" + b);
}
func1(300);

console.log("global2: a=" + a + ", b=" + b);

function func2() {
    var a = 200;
    var b = 500;
    console.log("func2: a=" + a + ", b=" + b);
}
func2();

console.log("global3: a=" + a + ", b=" + b);

function func3() {
    var a = 100;
    if (a == 100) {
        var a = 200;
        console.log("func3 (if): a=" + a + ", b=" + b);
    }
    console.log("func3: a=" + a + ", b=" + b);
}
func3();

function func4() {
    var a = 100;
    if (a == 100) {
        let a = 200;
        console.log("func4 (if): a=" + a + ", b=" + b);
    }
    console.log("func4: a=" + a + ", b=" + b);
}
func4();

console.log("global4: a=" + global.a + ", b=" + global.b);

const c = 1000;
console.log("global5: c=" + c);

c = 2000; // error!!!



