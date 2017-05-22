let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = ` ${howMuch} ${sentence} ${numbers[1]} ${numbers[0]} ${team}`;

console.log(task1);  
/*
 2. Составьте предложение из представленного массива 
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. 
  Он не был больше ни телом, к которому рано или поздно ..."
 */

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];
//console.log(array[4]+','+array[2]+','+array[6]+' '+ array[3]+ ' ' +array[7]+ '. ' 
//+array[0]+' '+ array[8]+ ' ' +array[1] +' '+ array[5]);
let homeSentence = ` ${array[4]}, ${array[2]}, ${array[6]} ${array[3]} ${array[7]}. 
${array[0]} ${array[8]} ${array[1]} ${array[5]}`
console.log(homeSentence);

/*
 3. Добавьте свойста 4 новых свойства в объект используя 
    квадратные скобки и точку.
 */

let myObj = {};
myObj['name'] = 'Alex';
myObj['last name']= 'Betman';
myObj.age = '99';
myObj.job = 'Hero';

console.log(myObj);

/*
 4. Используя метод .slice, добавьте недостающие символы в строку
 */

let sliceString = 'Ytube'; //

console.log('You'+ sliceString.slice(1, 2).toUpperCase()+sliceString.slice(2,5)); // YouTube

/*
 5. Преобразуйте строку x, 
    в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];
let x = frameworks[1] + Math.floor(frameworks[0]);
let x2 = `${frameworks[frameworks.length - 1]}`;
let string = `google released new version ${x} But real speed is ${x2}`;
console.log(string);