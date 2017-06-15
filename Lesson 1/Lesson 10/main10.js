// JSON (Java Script Object Notation)
// Свойства JSON всегда обвораиваеться в двойные кавычки!!!................
//
var JSONProduct = {
    "name": "Iphone 8s",
    "vendors": ["citrus", "rozetka", "mobilluck"],
    "aplication": {
        "name": "appStore"
    },
    "price": 800,
    "solid":false,
    "tested": null
};

//ZADACHA

var JSONTest = {
    "string": "Здесь должна быть строка",
    "number": "09312323534",
    "test": ["one", "two", "three"]
};
var JN = JSONTest;
// console.log(JSON.stringify(JN));

//Функция конструктор

// Класс!
// function User(name) {
//    // let obj = {}
//    // obj.name = name;
//    // return obj;

//     this.name = name;
// //     return {qweeeeeeeeeeeeeeeeerrtttttttyyyy: ':DADA',
// //     name : name
// // };
// }
//  console.log(userOleg = new User ('Oleg'));
//  console.log(userPetr = new User ('Petr'));

//  function City(country, people) {
//      this.country = country;
//      this.people = people;

//  }
// let newcountry = new City('Madrid' , 'one');
// let newpeople = new City('Tokio' , 'two ');

// console.log(newcountry);
// console.log(newpeople);



function World (cash) {
    this.cash = cash;
    this.addCountry = function (country) {
        console.log(country);
        console.log('addCountry >>>>>>>>>>  ', country)
        country[country.name] = (...args) => {
            console.log('I AM CALLED METOD >>>>>>>>>>  ' +country.name , country)
            country.callback.call(this, args);
            //console.log(this);
           //return country.callback.call(cash);
        };
    };
}

function Country (name, callback) {
    this.name = name;
    this.currentCash = 0;
    this.callback = callback;
    }


let earth = new World(100);
let ukraine = new Country ('ua' , function(howMushMoney){
    console.log('>>>>>>>>>>>>>>>>>>>howMushMoney', howMushMoney);
    console.log('howMushMoney', howMushMoney);
    this.cash -= howMushMoney;


    //bankCash
});

let frontend = new Country ('/login', function(cash){
    console.log(this)
    //bankCash
});

earth.addCountry(ukraine);
ukraine.ua(20);
console.log(earth)
//frontend.login(40);
//WorldCash == 80;
//ukrainecash ==20;xxxxx
//