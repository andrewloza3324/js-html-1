//let a = document.querySelectorAll(".b");
//console.log(a);

//for (let i = 0; i <= 5; i++) {
//a[i].textContent = i + 1;
//}

//let a = prompt();
//let b = document.querySelector(".he");
//b.textContent = a;

//let a = querySelector(".text");
//let b = querySelector(".text2");

//b.textContent = a;

//console.log(b.textContent);

let a = [];
let result = 0;
let k = 0;
let b = document.querySelector(".text");
let s = "";
let n = Number(prompt("enter number of numbers"));

for (let i = 0; i < n; i++) {
  let c = Number(prompt(`enter ${n} numbers`));
  a.push(c);
  k = c;
  result = k + result;
  if (s > "") {
    s = s + " +";
  }
  s = s + `${k}`;
}

b.textContent = `${s} = ${result}`;
//b.textContent = `${a[0]} + ${a[1]} + ${a[2]} + ${a[3]} + ${a[4]} = ${result}`;
