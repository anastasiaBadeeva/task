"use strict";
// var array = [];
// var max=+Infinity;
// var min=-Infinity;
// var n = randomInteger(3,5);
// var str = "";
// var str5="";

// for (var i = 0; i < n; i++) {
//   //array => [[]]

//   array.push([]);
//   for (var j = 0; j < n; j++) {
//     array[i].push(randomInteger(1,9));

//   }
//   str+=array[i].join(" ") + "\n";
// }
// for (var i = 0; i < array.length-1; i++) {
//   for (var j = i+1; j < array[i].length; j++) {
//  if (i>=j) {

//  }
//   }
//   str5+=array[i].join(" ") + "\n";
// }
// console.log(str5);
// for (var i = 0; i < array.length; i++) {
//   for (var j = 0; j < array[i].length; j++) {
//     if (min<array[i][j]) {
//       min=array[i][j];

//     }
//     if (max>array[i][j]) {
//         max=array[i][j];

//     }
//   }
// }
// console.log(max,min);
// n=null;
// var strSum = "";
// var sumdia=0;
// for (var i = 0; i < array.length; i++) {
//   sumdia+=array[i][i];
// }
// console.log(sumdia);
// var sumdia2=0;
// for (var i = 0,j=array.length-1; i < array.length; i++) {
//   sumdia2+=array[i][j];
//   j--;
// }
// console.log(sumdia2);

// for (var i = 0; i < array.length; i++) {
//   var sum=0;

//   for (var j = 0; j < array[i].length; j++) {
//     sum+=array[j][i];
//     if (array[i][j]%2==0) {
//        array[i][j]=" $";
//     }
//     else {
//      array[i][j]= " *" ;
//     }
//   }
//   strSum+="Сумма элементов в строке" +(i+1) +"=" +sum + "\n";
// }

// console.log(str);

// var temp = array[0];
// array[0]=array[array.length-1];
// array[array.length-1]=temp;
// str = "";

// for (var i = 0; i < array.length; i++) {
//   str+=array[i].join(" ") + "\n";
// }
// console.log(str);

// str="";
// for (var i = 0; i < array.length; i++) {
//   let temp = array[i][0];
//   array[i][0]=array[i][array.length-1];
//   array[i][array.length-1]=temp;
//   str+=array[i].join(" ") + "\n";
// }

// console.log(str);

// // for (var i = 0; i < array.length; i++) {
// //   str+=array[i].join(" ") + "\n";
// // }

// function randomInteger(min, max) {
//   var rand = min + Math.random() * (max + 1 - min);
//   rand = Math.floor(rand);
//   return rand;
// }
sub.onclick = function() {
  let value1 = arr.value;
  if (isNaN(value1)) {
    console.log(arr.value);
    let arrNew = value1.split(" ");
    console.log(arrNew);
    let largest = Math.min(...arrNew);
    console.log(largest);
    changeArr(arrNew);
    sum(arrNew);
  } else alert("fail");
};
// function min(arr) {
//   let min = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i]<min) min =arr[i];
//   }

//   return console.log(min);;

// }
function changeArr(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = +array[i];
  }
  return console.log(array);
}
function sum(array) {
  let plus = 0;
  let indexStart = 0;
  let indexEnd = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      indexStart = i;
      break;
    }
  }

  for (let i = array.length - 1; i >= indexStart; i--) {
    if (array[i] < 0) {
      indexEnd = i;
      break;
    }
  }

  for (let i = indexStart + 1; i < indexEnd; i++) plus += array[i];
  summa.innerHTML = `${plus}`;
  return console.log(plus);
}

// let count = 0;
// let start = -1;
// let end = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     start = i + 1;
//     break;
//   }
//   for (let j = arr.length + 1; j > 0; j--) {
//     if (arr[j] < 0) {
//       end = j - 1;
//       break;
//     }
//   }
//   if (start > 0 && end > 0) {
//   }

//   for (; start <= end; start++) {
//     count += arr[start];
//   }
// }

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > 0) {
//         sum += arr[i];
//       } else {
//         break;
//       }
//     }
//     break;
//   }
// }
// return console.log(sum);
// let sum = 0;
// let flag = 1;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = +arr[i];
//   console.log(arr);

//   if (arr[i] < 0) flag++;
//   if (flag == 2) break;
//   if (arr[i] >= 0 && flag == 1) sum += arr[i];
// }

// console.log(sum);
