

// function Car(wheels, color, doors, type) {
    
//     this.color = color;
//     this.doors = doors;
//     this.wheels = wheels;
//     this.type = type;  
//    // this.drive = function () {
//         //console.log('car is drive')
//     //}
// }

// //прототипное наследование
// // .__proto__ -- для обьектов
// // .prototype --для функций -конструкторов (класс)
//   Car.prototype.drive = function () {
//       // машина поехала
//       this.run == true;
//     console.log(this.type, ' car is driving');
// }
//   Car.prototype.stop = function () {
//       if(!this.run){
//         console.log(' машина остановилась');
//       }else {
//           console.log(this.type +' is stooped')
//       }
//       this.run == undefined;
//     }

// var bmw = new Car(4, 'red', 2, 'bmw');
// var lexus = new Car(4, 'black', 6, 'lexus');

// bmw.drive();
// bmw.stop();
// lexus.drive();
// lexus.stop();

// //НАследование -- это когда дочерний класс(экземпляр) наследует методы или свойства
// // родительского класса
// var cat =  {
//    legs: 4,
//    callKitty(food, food2) {
//        console.log(this.name, 'кис кис кис держи', food)
//        console.log(food2);
//    }
// }
//    var myCat = {
//     name: 'Hermiona'
//    }
// var anotherCat = {
//     name: 'Беляш'
// }
// myCat.__proto__ = cat;
// myCat.callKitty('рыбу', 'корм ')
// // cat.callKitty.call(anotherCat, 'Вискас', 'хозяина')
// cat.callKitty.apply(anotherCat, ['Вискас', 'хозяина']);

// var feedBelyash = cat.callKitty.bind(anotherCat);
// feedBelyash('индейку', 'asdasdasdad');


// function bind(contextFN, object) {
//     return (...args) => {
//         contextFN.apply(object, args)
//     }
// }
// var feedBelyash = bind(cat.callKitty, anotherCat);
// feedBelyash('привет', 'рыба','корм');

//apply, call - принимаем первым аргументом обьект, который
//мы хотим установить в качестве контекста вызова функции

//bind - привязывает оприделенный обьект к функции

//call - принимает аргументы в взываемую функцию через запятую

//apply - принимает аргументы в виде массива

//ЭТИ МЕТОДЫ СРАЗУ ЖЕ ВЫЗЫВАЮТ ФУНКЦИЮ



function Creature (type) {
    this.type  = type; 
    
 }
Creature.prototype.doMagic = function () {
    if(this.type == 'Mage'){
    this.magic();
    }else{
        console.log(' вы чеовек')
    }
}
Human.prototype = Object.create(Creature.prototype);
function Human (type, ears) {
    // расширение свойств - наследование ^^
    Creature.call(this, type);
    this.ears = ears;
}

function Mage(magic) {
     Creature.call(this, type);
    this.magic = magic; 
}

Mage.prototype = Object.create(Creature.prototype);
Mage.prototype.magic = function (){
    console.log(' I`m magic ')
}
var Jack = new Human('Воробей', 2);
var Gendalf = new Human('Mage ' , 50);
var John = new Human('Коннор ' , 150);
Gendalf.doMagic();
