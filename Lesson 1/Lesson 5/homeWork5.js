'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
let array = [0, 1, null, 2, false, 1, 0 ];
 function moveZero (solution){
let search = 0;
let zero = [];
    for(let i = 0; i < solution.length; i++){
        if(solution[i] === search){ 
            solution.splice(i, 1);
            zero.push(search);
            i--;   
        }
    }
    return solution.concat(zero);
 }
 console.log(moveZero(array));
 
 //3. Напишите функцию которая меняет местами имя и фамилию

//  nameShuffler('john McClane');
//  nameShuffler('Arnold Schwarzenegger');
//  nameShuffler('James Bond');

function nameShuffler(name){
let array = name.split('');
//console.log(array);
let mass = [];

    for(let i = 0; i < array.length; i++){
        if (array[i] != ' '){
            mass.push(array.shift());
            i--;
           // console.log(mass);
        }
        else{
            array.shift(array.push(' '));
            break;
        }
    }
    return (array.concat(mass)).join('');
}
 console.log(nameShuffler('john McClane'))
 console.log(nameShuffler('Arnold Schwarzenegger'))
 console.log(nameShuffler('James Bond'))

/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */

function orderNumbers(param1, param2){
	return param1 - param2;
}
function minimalNumber(arr){
	let param1 = arr.sort(orderNumbers);
	return param1.shift() + param1.shift();
}
console.log(minimalNumber([-4,-10,25,10]));

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */
function Upper(arr){
	for (var i = 0; i < arr.length; i++){
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
	return arr;
}
console.log(Upper(['KARLY', 'DANIEL', 'KELSEY']));
console.log(Upper(['jo', 'nelson', 'jurie']));

//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8
  
 */
function oneStep(array){
	
	let first = 0;
	let index = 0;
	if (array[0] !== 0){
		array.unshift(0);
	}
	    for (let i = 0; i + 1 < array.length; i++){
		    if (first < (array[i + 1] - array[i])){
		    	first = (array[i + 1] - array[i]);
			    index = i;
		}
	}
	return array[index] + first/2;
}

function solution(array) {	
	console.log(array);
	console.log('Отсутствующее число: ' + oneStep(array));
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

function openBraces(arr, brackets) {
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            openBraces(arr[i], brackets);
        }
        else{
            brackets.push(arr[i]);
        }
    }
    return brackets;
}
console.log(openBraces([1,2],[3,[4]],5,10,[]));
console.log(openBraces([25,10,[10,[15]]],[]));