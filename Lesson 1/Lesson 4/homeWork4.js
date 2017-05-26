/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
let someArr = [];
if( a<b && a !==b){
  for(let i = a + 1; i < b; i++){
    someArr.push(i);
  }
  return someArr;
  }
}

console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14
console.log(numbersBetween(10, 15)); // 11, 12, 13, 14

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100 
 */
function fizzBuzz(number) {
    for (number = 0; number < 100; number++) {
       if(number % 3 === 0 || number % 5 === 0) {
         if(number % 3 === 0 && number % 5 === 0) {
         console.log("FizzBuzz");
    }else if(number % 3 === 0) {
         console.log("Fizz");
    }else {
         console.log("Buzz");
    }
    }else {
         console.log(number);
    }
  }
}


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

value ([1, null, undefined, 'str', {}, [], function() {}]);
function value (array) {
  let i;
 let mass = [];
for( i = 0; i < array.length; i++) {
   if(Array.isArray(array[i])) {
      mass.push(array[i]);
    } else if (array[i] === null) {
    mass.push('null');
  }
  else {
    mass.push(typeof array[i]);
  }
}
 console.log(mass);
 return mass;
}

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, 
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив 
  содержащий все объекты содержащие свойство unknownAge:true


let array = Array.from({ length: 35 }).map(
  (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
);

console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
console.log(array.length); // 35

function solution(arr) {}

let arr = ['privet', 12, {}, [1, 2]];

function returnArr(argument) {}
returnArr(arr);
returnArr(arr2);
 */