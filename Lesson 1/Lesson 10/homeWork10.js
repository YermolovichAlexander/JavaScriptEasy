/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * 
 * Вернеться число 5, в переменной y, функция z  ничего не возвращает потому
 * что t только вызвалась но не возращалась
 *   
 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 5;
  t();
};
console.log(y);

z(x);

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $ = function(str) {
    let tag = str;
    let newTag = `<${str}></${str}>`;
    return newTag;
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery = {
    newTag: '',
    add(str) {
        console.log('>>>>>>>>>>>>>',this.createTag(str));
        return this;
    },
    createTag(str) {
        return this.newTag = this.newTag + `<${str}></${str}>`;
    }
};
let someVariable = ezjQuery//.add('body');
  someVariable.add('body') //<body></body>
  someVariable.add('div') //<body></body><div></div>
  someVariable.add('h1'); //<body></body><div></div><h1></h1>


/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */
/*
example
var helloList = ezjQuery.add('body')
  .add('body') // <body></body>
  .add('div') // <body><div></div></body>
  .add('ul') // <body><div><ul></ul></div></body>
  .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
 Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();
console.log(bodyDiv);
<body><div></div></body>
*/

let ezjQuery1 = {
  newTag: '',
  openTag: '',
  closeTag: '',
  add(str, value) {
    console.log(this.createTag(str, value));
    return this
  },
  createTag(str, value) {
    this.openTag = this.openTag + `<${str}>`;
    this.closeTag = `</${str}>` + this.closeTag;
    if (!value) {
      this.newTag = this.openTag + this.closeTag;
    } else {  
      this.newTag = this.openTag + value + this.closeTag;
    }
    return this.newTag
  },
  render() {
    let newString = this.newTag;
    this.newTag = '';
    this.openTag = '';
    this.closeTag = '';
    return newString
  }
};
var helloList = ezjQuery1.add('body').add('div').add('ul').add('li', 'Hello').render();
  document.write(helloList) //
console.log('HelloLIST>>>>>>>>', helloList); 

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
