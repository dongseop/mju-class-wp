var a = [1, 3, 5, 7, 9];

console.log("\n\n[1]");
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

console.log("\n\n[2]");
for (let i = 0, len = a.length; i < len; i++) {
    console.log(a[i]);
}

console.log("\n\n[3]");
for (let i in a) {
  console.log(i);
}

console.log("\n\n[4]");
for (let i of a) {
  console.log(i);
}

