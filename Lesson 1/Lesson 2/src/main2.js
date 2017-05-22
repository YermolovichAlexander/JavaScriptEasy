const string = 'some string';
const iAmString = "world";

const es6String = `hello world`;

const helloWorld = `hello  \n${iAmString}`;

//console.log(helloWorld);

//const cars = 'bmw' ;

var user = {
    name: 'sasha',
    cars: 'mazda ' + 'bmw ' + 'VW '
};


let myname = 'sASHA';
let sameService = 'YouTube';
//console.log('У '+ user.name + " есть " +user.cars);

//console.log(myString.toUpperCase());
//console.log(myname.toUpperCase());
//console.log(myname.toLowerCase());

//console.log(sameService.slice(3)); //обрезает "слайс" строку

const myName = 'sASHA';
let s = myName[0];
s = s.toUpperCase();
xxx = myName.slice(1);
console.log(s + xxx.toLowerCase());

//console.log(myName [0].toUpperCase());
//console.log(myName.slice(1).toLowerCase());
//console.log()
// console.log(myname[0]);



const hi = 'privet, kak, dela';
let qwerty = hi.includes('kak');

console.log(qwerty);

const PI = 3.14;
console.log(PI >= 3.14);


var xxx = '50';


console.log()
const year2017 = 2017;
console.log(year2017 % 2000);

console.log(!1 == false);


var myNumber = '150';
var myNumber2 = '300';

console.log(+myNumber + +myNumber2);

//console.log(Math.floor(3.5));
//console.log(Math.random()*10);

Math.max(...[50, 10, 20]); //деструктуризация масива 50 20 10 возвращает последовательно записанные значения
//console.log(Math.max());

console.log(typeof undefined);
console.log(typeof NaN);

var myArray = ['firstIndex', 'второй индекс', 'третий индекс', 'четвертый индекс']



// myString.lenght -- свойство.
// myString.toUpperCase() -- производитт оприделенные действия с строкой или чем либо (метод)