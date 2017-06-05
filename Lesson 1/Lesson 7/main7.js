// var arr = [3,2,1, 10, 111, 100, 32, 2];
// console.log(arr);
// arr.sort(); //сортирует массив---------------------------
// console.log(arr);


//*************sort возвращает ==1 или ==-1 */

// arr.sort(function(elem1 , elem2){

//     return elem1 - elem2;
// console.log(' elem1 = ', elem1);
//console.log(' elem2 = ', elem2);
// });

//*********************.reduce()
// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sum(arr1){ 

// arr1.reduce(function(prevElem, value, index, arr) {
//  console.log('iteration:', index +1);
//  console.log('Предведущее значение:', prevElem );
// console.log('значение:', value );
//  prevElem += value;
//  return prevElem;
// }, 0);

// let sum = 0;
//     arr1.forEach(function(elem){
//     sum += elem; //sum = sum + elem тоже самое
// });
//     return sum;
// }
//  console.log(sum(arr1));

// var string = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function ret(string){
//    return string.reduce(function(prevElem, value, index, arr){
//     return (value === 0) ? prevElem += value : prevElem += '-' + value
//    // return prevElem + '-' + value ;
//     },'');
// }
//  console.log(ret(string));

 // ЗАМЫКАНИЕ  -это область действи которая создаеться при обьявлении ф-йи и позволет ей получать доступ 
 // и манипулировать внешними по отношению к ней прееменнымии
 // замыкание -- это возможность хранить состояние функции.

// let outerValue = 'ninja';

// let later;
// let name ='Sasha';

// function helloUser(name) {
//    // return[ '1', 2, 3, 4, 5]
//     return function(){
//         console.log('privet', name)
//     };
// }

// const number15 = helloUser(name)();
// //console.log(user)

// let elem = 5;
// let elem2 = 10;

// function add(elem) {
//    // return[ '1', 2, 3, 4, 5]
//     return function(elem2){
//         console.log(elem + elem2)
//     };
// }
// const sum = add(5)(10);
// //console.log(number15);

let add = 1;

function counter(){
    return function (b){
        a+b;
    }
 //  возвращать обьект
// у обьекта должен быть метод add
// показывать в консоле цифру на 1 больше предыдущей  
}
const plusOne = counter();// {add: function() {}}


plusOne.add();
//1
plusOne.add();

plusOne.add();
//3


