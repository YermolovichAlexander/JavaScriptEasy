'use strict';

// Legolas Task !

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP'],
  goodDev: goodDev
};

let developer2 = {
  experience: [
    { technology: 'java' },
    { technology: 'c++' },
    { technology: 'aws' },
    { technology: 'docker' }
  ],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};

let developers = [developer1, developer2];

function goodDev(obj) {
  let tempObj={};
  let required = this.requires;
  let skills;

    if (this.skills){
     console.log('developer1'); 
      skills = this.skills;
        for (let i = 0; i < required.length; i++){
          for (let j = 0; j < skills.length; j++){
            if( required[i] === skills[j]){
              tempObj[required[i]] = 'success';
              break
            } else {
                tempObj[required[i]] = 'fail';
                continue
            }
        }
      }
    }
    if(this.experience){
      console.log('developer2');   
      skills = this.experience;
        for (let i = 0; i < required.length; i++){
          for (let j = 0; j < skills.length; j++){
            if( required[i] === skills[j].technology){
              tempObj[required[i]] = 'success';
              break
            } else {
                tempObj[required[i]] = 'fail';
                continue
            }
          }
        }
     }
      for(let key in tempObj){
        console.log ('required: '+ key + ' ... ' + tempObj[key]);
      }
};


developers.forEach(dev => dev.goodDev(developers));

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success


/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по 
 * переданному значению
 * 
 * При вызове функции используйте this
 *
 * */

let myObject = {
  database: [
    { age: 100, name: 'b' },
    { age: 15, name: 'c' },
    { age: 25, name: 'a' }
  ],

myFilter(arg) { 
  return this.database.sort((a, b) => a[arg] > b[arg]);
}
};
// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

console.log(myObject.myFilter('age'));
console.log(myObject.myFilter('name'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
 * 
*/

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
let arr1 = [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ];

let moveZeroToEnd = arr =>
  arr.filter(index => index !== 0).concat(arr.filter(index => index === 0));
console.log(moveZeroToEnd(arr1));

/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */
let minimalNumber = arr => {
  let sortedArr = arr.sort((a, b) => a < b);
  return sortedArr.pop() + sortedArr.pop();
};

let sorter = [10,20,30,1,31,11,10];
console.log(minimalNumber(sorter));


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */
let nameShuffler = name => name.split(' ').reverse().join(' ');

console.log(nameShuffler('john McClane'));
console.log(nameShuffler('Arnold Schwarzenegger'));
console.log(nameShuffler('James Bond'));

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

let capMe = arr =>
  arr.map(value => value[0].toUpperCase().concat(value.slice(1).toLowerCase()));

console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));
console.log(capMe(['jo', 'nelson', 'jurie']));


//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8
  
 */
let oneStep = arr => {
  if (arr[0] !== 0) {
       arr.unshift(0);
  }
  let first = 0;
  let valueZero = 0;
  let index = 0;
  arr.forEach((val, ind) => {
    if (first < val - valueZero) {
      first = val - valueZero;
      index = ind;
    }
    valueZero = val;
  }, 0);
  return arr[index] - first / 2;
};

function solution(arr) {
	console.log(arr);
	console.log('Пропущеное число: ' + oneStep(arr));
}

solution([1, 3, 5, 9]);
solution([0, 8, 16, 32]);
solution([4, 6, 8, 10]);
solution([0, 16, 24, 32]);

/*
 2. Напишите функция которая преобразовывает/открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 
 */

let openBraces = (arr, brackets = []) => {
  arr.forEach(value => {
    if (Array.isArray(value)) {
      openBraces(value, brackets);
    } else {
      brackets.push(value);
    }
  });
  return brackets;
};

console.log(openBraces([[1, 2], [3, [4]], 5, 10]));
console.log(openBraces([25, 10, [10, [15]]]));



////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов, 
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
  //  object[fn.length] = fn;
  //  object[name] = (...arg) => {object[arg.length]()}; 
  let method = object[name];

  object[name] = function () {
    if(fn.length == arguments.length)
  }
}

addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});

 junior.ok(); //'zero arguments'
 junior.ok(1); //'one arguments'
 junior.ok(1, 2); // 'two arguments'
 junior.ok(1, 2, 3); // 'three arguments'
 junior.ok(1);