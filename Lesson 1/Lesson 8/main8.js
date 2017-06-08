//ЗАМЫКАНИЯ СУЩЕСТВУЮТ ПОКА НА НЕГО ХРАНИТЬСЯ ССЫЛКА************

// let object = {};
// let object2 = new Object();
// const qwerty = {};
// qwerty.name = 'Oleg';
// console.log(qwerty);

// object.htmlTags = ['<div>', '<ul>', '<li>'];
// object['headersTags'] = ['<h1>', '<h2>', '<h3>'];
// object[true] = ['HTML тэги имеют формат <названиеТэга> </названиеТэга>'];
// object['one-two-three'] = [`<body><h1>Hello</h1></body>`];
// object[qwerty] = 'kto zdes ?';

// скопировать объект

var object = {
  name: 'your name',
  id: 50,
  friends: ['Lera', 'Vitya', 'Vladimir'],
  recepts: {
    pizza: {
      ingredients: ['cheeze', 'toast']
    }
  }
};

function cloneObject(someObj) {
  // создаем новый объект
  var obj = {};

  // пройтись при помощи цикла for-in
  for (let key in someObj) {
    obj[key] = someObj[key];
  }
  // по всем свойствам someObj
  // добавить такие же ключи из someObj в уже созданный объект
  // вернуть уже созданный объект
  return obj;
}
var clonedObject = cloneObject(object);
var es5ObjectClone = Object.assign({}, object, { friends: [...object.friends] });
// #Immutable
var es7ObjectClone = { ...object, friends: [...object.friends] }; // {name:'', id:''}

object.recepts.hachapuriWithCheeze = {
  ingredients: ['@', '@']
};
console.log(clonedObject);


// var doubleNumber = function (number){
//     console.log(number * 2);
// };
// doubleNumber(10);


// function test(fn){
//     fn(50);

// }
// test(function(number){
//     console.log(number);
// });


function randomArguments(){
    let  arr = [...arguments];
    return arr.reduce(function(sum, number){
    return sum + number;
    }, 0);
//     let sum = 0;
//         for(let i = 0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     console.log(sum);
 }
 randomArguments(1, 2, 3, 4, 5, 6, 7);

 var someObj = {
     sum: function(number1, number2){
         return number1 + number2;
     }
 };
// ------------------ОБЬЕКТЫ 


// Прис создании обьекта, обьект создает ссылку в оперативной памяти
// программы и данная ссылка присваивается в переменную

// --Обьект физически занимает ячейку

//Когда мы присваиваем новой переменной существуюий обьект 
//то пристваеваеться сущестующая ссылка 


//скопировать обьект
// var obj = {
//     name: 'your name',
//     id: 50, 
//     friends: ['lera', 'vitya', 'vasy'],
//     recepts: {
//         pizza: {
//             ingridients: ['cheeze', 'toast']
//         }
//     }
// };
// function cloneObject(someObj){
// var obj = {};
//     obj[key] = someObj[key];

// // object.recepts.hachapure = {
// //     ingridients: ['@', '@']

// };
//return obj;


//# Immutable


//var es7 = {...obj.friends: [...obj.friends: obj]}
// for(let key in someObj){
// }
// //return clonedObject;
// console.log(clonedObject);
// // console.log(object2)
// // console.log(object2.recepts.iceCreame = 'voda');
// }

function sum(a){
   return function(b){
        return a+b;
    };
};

console.log(sum(1)(2));
console.log(sum(5)(-2));






