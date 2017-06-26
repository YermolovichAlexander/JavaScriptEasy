//ИНКАПСУЛЯЦИЯ - это отделение свойств одного обьекта от другого
//Инкапсуляция - это создание скрытых методов и свойств. ПРиват. публичн, и защищенные, статические

function Server () {

let secret_password = 'so secret';
this.showSecretPassword = function () {
    console.log(secret_password);

}
this._changeSecretPassword = function(newPassword) {
    secret_password = newPassword;
}
}

Server.prototype.public = function() {

};

var http = new Server ();

//ПОЛИМОРФИЗМ - это когда дочерний класс преоприделяет принцип действия роодительского метода
//ПОлиморфизм - это когда подкласс класса может вызвать ту же самую обопщенную унаследованную
//функцию в своем собственном контексте

// function Parent () {

// }
// Parent.prototype.sayHello = function () {
//     console.log('HEllo' + this.name);
// }

// function Child(name) {
//     this.name = name;

// }
// Child.prototype = Object.create(Parent.prototype)
// Child.prototype.sayHello = function() {
//     conole.log('привет полиморфизм')
// }

// var cat = new Child ('Хвостик')

//КЛАССЫ,________________________________________________________

// function Server () {

// let secret_password = 'so secret';
// this.showSecretPassword = function () {
//     console.log(secret_password);

// }
// this._changeSecretPassword = function(newPassword) {
//     secret_password = newPassword;
// }
// }

// Server.prototype.public = function() {

// };

// var http = new Server ();

// class Server {
//     constructor(database) {
//         this.database = database;
//     }

// listen(PORT, host ) {
//     console.log('Server running on https://${host}:${port}')
// }
// }


// class Client extends Server {
//     constructor(database, name) {
//         super(database);
//         this.name= name;
//     }
// }
// var http = new Server([{name: 'qwerty'}]);
////////////////////////////////////////////////////////////////
// class Parent {
//     sayHello() {
//        console.log('привет полиморфизм')
//     }
//     //полиморфизм
//     sayMeow() {
//        console.log('mayyyyyyyyyyyy')
//     }
// }
// // Parent.prototype.sayHello = function () {
// //     console.log('HEllo' + this.name);
// // }

// class Child extends Parent {
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }
//   var hello = new Parent ([{name: 'qwertyyyyyyyyyyyy'}]);
// // Child.prototype = Object.create(Parent.prototype)
// // Child.prototype.sayHello = function() {
// //     conole.log('привет полиморфизм')
// // }

// var cat = new Child ('Хвостик')



// function func() {
    
//     console.log( 'Привет первая' );
    
// }
// setTimeout(func, 3000);


// function funcTwo() {
//   console.log( 'Привет вторая функция' );
// }
// setTimeout(funcTwo, 2000);


// function funcThree() {
//   console.log( 'Привет третья функция ' );
// }
// setTimeout(funcThree, 1000);

// var timerId = setInterval(function() {
//   console.log(func());
// }, 3000);



// let someNumber = 0;
// setInterval(() => {
//     if(Math.random()* 10 < 5 ){
//         someNumber = 'NaN';
//     }else{
//         debugger;
//     someNumber = 100;
// }
// try {
//     console.log(someNumber.split(''))
// }
// catch(e) {
//     console.log(e);
//     console.log('все работает');
// }
// });


try{ 
 console.log('начало ');
 throw new Error('ошибка')

}catch (e) {
    console.log(e + ' в Error');

    console.log('продолжим работу');
}