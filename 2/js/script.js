"use strict";
let s;
let val1;
let val2;
sub.onclick = function() {
  s = str.value;
  val1 = document.querySelector(".va").value;
  console.log(val1);
  val2 = document.querySelector(".va2").value;
  console.log(val1);
  if (s.indexOf(`${val1}`) > -1) {
    let m = s.replace(new RegExp(`${val1}`, "g"), `${val2}`);
    console.log(m);
    nov.innerHTML = `${m}`;
  } else alert("такой последовательности в строке нет");
};
