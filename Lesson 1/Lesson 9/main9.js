'use strict'

// function showThis() {
//     this.react = 'my super code1' 

// }
// showThis();
// es6 Object

// let myObject =  {
//     //очень долго писать
//     es5function: function() {
//         //невероятно медленно
//         // ie + fireFox 100 раз медленеее
//         // for (let i = 0...)
//         for(let key in myObject) {
//             console.log(key);
//         }
//     },
//     es6function() {
//         // //
//         //  for(let key in myObject) {
//         //     console.log(key);
//         // }
//         // отобразите все значения данного обьекта 
//         let arr = Object.keys(myObject);// получаем массив с ключами
//         arr.forEach(function(elem) {

//         console.log(myObject[elem]);
//         }); 

//     },
//     lenght: 10
// };
// let show = function () {
//     for(let key in myObject) {
//             console.log(key);
//         }
// };
// myObject.es6function();



// //ES6 

// let sum = function(a, b) {
//     return a + b;
// };

// let sumES6 = (a, b) => {
//     console.log('SUM ES6 >>')
//     return a * b;
// }


// напишите ф-цию которое принимает 1 число и возвразает умноженное на 2
// let eS6 = (a) => {
//     return a * 2;
// }
// console.log(eS6(5));

// let doubleES3 = function(a) {
//     return a;
// };


// let double = a => a*2;
// console.log(double(2))


// var someArray = [1000, 1500, 2000, 2500, 3500];

// var mySalary =  someArray.filter(val => val > 1500);
//     console.log(mySalary);


// //или так
// var sumArg = (...args) => 
// args.reduce((preValue, value) => (preValue += value));

// //{   //ИЛИ ТАК 
// //     return args.reduce((preValue, value) => {
// // return (preValue += value)
// //     }, 0);
// // }

// console.log(sumArg(10, 20 , 30))


// var recipeBok = {
//     cakes: ['торт', 'мороженное', 'пицца'],
//     showContext: function() {
//         console.log(this);
//     }
// };
// recipeBok.showContext();


// function helloFriends() {
// console.log(this.friends)
// }

// var telephoneBook = {
//     friends: ['торт', 'мороженное', 'пицца'],
//     showFriends: helloFriends
// };

// var telephoneBook2 = {
//     friends: ['яблоко', 'не яблоко', 'апельсин'],
//     showFriends:helloFriends
// };


// //DRY - don`t repeat your self
// telephoneBook.showFriends(); //['торт', 'мороженное', 'пицца']
// telephoneBook2.showFriends(); //['яблоко', 'не яблоко', 'апельсин']

/* 
               4 ПРАВИЛА КАК УСТАНАВЛИВАЕТЬСЯ this 

--  this внутри ф-ции устанавливаеться как глобальный обьект в non-strinc
моде, при use strict - this == undefined 

-- при вызове как метод обьекта устанавливает this как данный обьект
(this выбирает обьект до точки)

-- bind, call, apply - устанавливают контекст (this) принудительно 

-- new - устанавливает this как новый обьект 
 

У КАЖДОЙ ФУНКЦИИ ЕСТЬ МЕТОД  bind, call, apply
*/

// function user(name, surname) {
//     //var obj = {};
//     // не яявно создает обьект

//     this.name = name;
//     this.surname = surname;
    
    
//     //не явно возвращает this
//     //return obj;
// }
// var oleg = new user('Oled', 'Lustenko')
// var den = new user('Den', 'Abramov')

// console.log(oleg);
// console.log(den);



const user = {
    name: 'Jack',
    fruits: 'mango, kivi, banan',
    friends: [
        {
        name: 'Egor',
        fruits: 'apple'
    },
    { 
        name: 'Gendalf',
        fruits: 'lime'
    },
    {
        name: 'Frodo Beggins',
        fruits: 'Хлепцы это преелесть'
    },
    ],
    showFruits() {
        console.log(this.fruits);
    },
    showFriendsFruits() {
        this.friends.forEach(function(elem) {
            user.showFruits.call(elem);
        });
    },
};
console.log(user.showFruits());
console.log(user.showFriendsFruits());

//имя друга и каки друг любит фрукты

// использ так же существующий метод showFruits


