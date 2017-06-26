const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
class Parser {
    constructor() {}

    getStrArr(oneElem, lastElem) {
        let arr = someWebpackModule.split(oneElem);
        let newArr = arr
            .map((elem, i) => {
                return elem + lastElem;
            })
            .join('');
    }
}
// new Parser().getStrArr('%%HOMEDIR%%', "'./JavaScript-Basic'");
// new Parser().getStrArr('%%APP_DIR%%', "'fixtures/src'");
// new Parser().getStrArr('%%APPNAME%%', "'app.js'");




/*
 * TASK - 2 
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */
class Http {
    constructor() {}

    createServer(func) {
        let ctx = {
             req: {
      PORT: 123456,
      url: 'yo-ho-ho'
     },
    res: {
     status: 8888,
      message: 'hello',
      header: {
        'content-type ': 'application/json'
        },
            },
        };
            this.func = () => {
            func.call(this, ctx, () => {});
        };
        return this;
    }
    listen(host, port) {
        console.log(`Server running on https://${host}:${port}`);
        this.func();
    }
}
new Http()
    .createServer(function(ctx, next) {
        console.log(ctx);
    })
    .listen(3000, 'localhost');
/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  let timer = 10;
  let serverResponse = i => {
    return setTimeout(function() {
      console.log('zzzz');
      console.log(i);
    }, (timer = timer / 2));
  };
  for (let i = 10; i >= 1; i--) {
    timer += timer * i;
    serverResponse(i);
  }
};

// @ SUPER

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 * 
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз), 
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor() {
    let timerID;
    this.query = function () {
      if (timerID) {
        clearTimeout(timerID)
      }
      timerID = setTimeout(function () {
        console.log('The web server is down');
      }, 5000)
    }
  }
}
DataBase.prototype.query
const dataBase = new DataBase();
dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

dataBase.query();
// 5
// 4
dataBase.query();
// 5
// 4
// 3
// 2
dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')