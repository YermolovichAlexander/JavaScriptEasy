//>>>>>>>>>Полифилы  - проверяет если не реализованная какая либо
// фича он это проверяет

// let group = [{
//     students: 'Name',
//     techer: 'techerName'
// }]
// for (let i = 1; i < 30; i++){
//     group.push({students: 'Name'+ i, techer: 'techerName'});
// }
// group.map(function (val){
//     val.techer = 'teacherOleg';
// });
// // console.log(group);

// const someMagic = () => {
// group.__proto__ = someMagic;
//     console.log('Халява приди!')}
//     console.log(group);




// const mainTeacher = {teacherName: "DOctor House"};
// const createGroup = () => {
// let allStudents = [];

//     for(let  i = 0; i < 30; i++){
//         let student = {name: 'qwerty' + i}
//         student.__proto__ = mainTecher;
//         student.someMagic= function () {
//             console.log(this.name + 'calls ' , 'Халява приди!!!')
//         };
//         allStudents.push(student);

//     }
//     return allStudents;
// };
// var student = createGroup();
// console.log(createGroup)



// object1 = {name: 'qwerty'};


// object2 = () => 'twoObject';


// object3 = {lastName: 'qwerty2', last: 'qwerty3'};

// object1.__proto__ = object2, object3;
// object2.__proto__ = object3;
// console.log(object1);


// callback - функция обратного вызова
// а нужен он для того, чтобы в НУЖНЫЙ ДЛЯ НАС МОМЕНТ 
// эту функцию вызвать
//__proto__

// наследование -- это когда дочерний класс (экземпляр) 
// наследует методы и свойства родительского класса

// function User(name) {
//     this.name = name;
// }

// val oleg  = new User ('Oleg');

// User.prototype.reetings = function () {
//     console.log(this.name, 'Say' , ' Hello');
// }


// function newObject(myArray, cars, name) {
//     // если одно из свойств не передаеться мы его не создаем
//     if(Array.isArray(myArray)) {
//         this.myArray = myArray; 
//     }
//     if(cars){
//         this.cars = cars;
//     }
//     if(name){
//         this.name = name;
//     }

    
// }
// let obj1 = new newObject([1, 2, {}], {cars1: 'BMW', cars2: 'VW', cars3: 'opel'} )
// let obj2 = new newObject([5, 6, 7], {cars1: 'B', cars2: 'M', cars3: 'W'} );

// console.log(obj1, obj2);


//когда функциия возвращает обьект ЭТо называеться ПАТЕРН МОДУЛЬ
// function makeCounter() {
//   var count = 0;

//   this.addCount = function() {
//     console.log(count++);
//   };
// }
// var counter = makeCounter(); 

// console.log( counter() ); 
// console.log( counter() ); 
// console.log( counter() ); 
// console.log( counter() );


function BMW(name) {
  this.name = name;
  this.carsspeed = 0;
}
BMW.prototype.newcars = function (name) {
    this.carsspeed += carspeed;
    console.log(this.name + 'едет' + this.carsspeed);
};
console.log(BMW);
