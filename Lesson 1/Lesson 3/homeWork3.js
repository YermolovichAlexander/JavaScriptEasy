
/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/

function arg1 (argumentAlex){
       let xxx =  'name';
       return (`Alex ${xxx}`)
};
console.log(arg1().toUpperCase());


/*
1. Напишите функцию которая принимает в 
качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/

let arr = ['one', 'two', 'three'];
function addToArray(arr) {
 // без естественных способов добавления
arr[arr.lenght] = 'four';
console.log(arr);
}
addToArray(arr);

/*
2. Напишите функцию которая получает 3 параметра 
и возвращает объект типа:    
*/

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

function simpleObjectGenerator(param1, param2, param3){
  let object = {};
    object.argument1 = param1;
    object.argument2 = param2;
    object.argument3 = param3;
    console.log(object);
  

    object.argument2 = userNames;
    return object;
}


var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/


///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента, 
     третий аргумент - это объект.
    
    Функция создает новый объект и добавляет ключ 
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте, 
    тогда добавляет данное свойство и возвращает новый объект
var myName = { name: 'Oleg' };
function addNameToUser(newKey, newValue, userName) {
}
*/
let myName = { name: 'Oleg'};

function addNameToUser( newKey, newValue, userName){
  let newName = {};
  newName [newKey]= newValue;
  newName.name = newName.name || userName.name;
  return newName;
}
console.log(addNameToUser('family', '%Lustenko%', myName));
/* {name:'Oleg', family:'%Lustenko%'} */

console.log(myName);
/* {name:'Oleg'} */

/////////////////////////////////

/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' 
   если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz(num) {
  if (num % 3 === 0 || num % 5 === 0) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if(num % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log("Buzz");
    }
} else {
    console.log(num);
    }
}

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'

/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента, 
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
*/
function args(arg1, arg2, arg3, arg4) {
  let arr = [];
  arr[0] = arg1;
  arr[1] = arg2;
  arr[2] = arg3;
  arg4(arr);
}
args(1, 2, 3, function(x){
  console.log(x);
});