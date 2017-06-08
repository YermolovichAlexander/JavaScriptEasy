'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * 
 * */

function solution1() {
var string = '';

return function (words) {
    if(arguments.length ==0) {
        return string;
        //console.log(string);
    }
    return (string += words + ' ');
    //console.log(words)
    };  
};

let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет
// вызываем много раз
 console.log( stringBuffer() );

 /*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */
let close = ["}", ")", "}"]; 
let open =  ["{", "(", "{"]; 

function validBraces(str) {
  console.log(str); 
  let brace = [];
  for (let i = 0; i < str.length; i++) {
    if (open.indexOf(str[i]) > -1) {
         brace.push(str[i]); 
    }
    if (close.indexOf(str[i]) > -1) {
      if (open.indexOf(brace[brace.length - 1]) - close.indexOf(str[i]) !==0) {
        return false;
      } else {
        brace.pop();
      }
    }
  }
  return (brace.length == 0 ? true : false)  
}


console.log(validBraces('(){}[]')); //=> returns true
console.log(validBraces('(}')); //=> returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); //=> returns true
console.log(validBraces('{([()(()){}])}')); //=> returns true
console.log(validBraces('{([()(){])}')); //=> returns false

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */



var seconds = 0;
function makeCallback(fn) {
  for (let i = 1; i <= 3; i++) {
      if(setTimeout==3){
         console.log('THE LAST LAST comment');
      }
    setTimeout(function() {
        if(seconds >= 3 && seconds == i){
      console.log(i);
    }
    }, i * 300);
  }
}

makeCallback(function() {  
  console.log('THE LAST LAST comment');
});


// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму 
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * 
 * Вычисления должны кешироваться, если в функцию попадает закешированное 
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */
// function fnc(n) {
//   let summ = 0;
//   for (let i = 0; i <= n; i++) {
//     summ += i;
//   }
//   return { [n]: summ };
// }

function sum(n) {
  let summ = 0;
  for (let i = 0; i <= n; i++) {
    summ += i;
  }
  if (sum[n] == undefined) {
    sum[n] = summ;
    console.log(`${sum[n]} Новое значение`);
  } else {
    console.log(`${sum[n]} Из кеша`);
  }
}


sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша