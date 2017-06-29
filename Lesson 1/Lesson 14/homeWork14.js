
// TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
 
 function solution(arr) {
  let myArr = arr.sort((a, b) => a > b);
  for (let i = 0; i < myArr.length - 1;) {
    if (myArr[i] === myArr[i + 1]) {
      myArr.splice(i, 2);
      i = 0;
      continue
    } else {
      i++;
    }
  }
  console.log(myArr);
}

  solution([12, 23, 34, 12, 12, 23, 12, 45])// -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,])// -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9])// ->[6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42])// -> [8 16 23 42]
  solution([2, 2, 44, 44])// => []


const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* TASK - 1
Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
const myRegExp = (str, homeDir, appDir, appName) => {
  let newStr = str
  .replace(/%%HOMEDIR%%/g, homeDir)
  .replace(/%%APP_DIR%%/g, appDir)
  .replace(/%%APPNAME%%/g, appName);
  console.log(newStr);
}
myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app');
/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/


/* 
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>, 
  вызывая методы объекта нужно создать dom-элементы
*/

// app.render();