/*
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфеыми если все их символы s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от 
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/

function solution(arr) {
  function transformArray(arr) {
    let checkString = '';
    arr.forEach((element, index) => {
      arr.slice(index + 1).forEach(elem => {
        if (elem) {
          element === elem ? checkString += 'a' : checkString += 'b';
        }
      });
    });
    return checkString;
  }
  let arr1 = arr[0].split('');
  let arr2 = arr[1].split('');
  let newStr1 = transformArray(arr1);
  let newStr2 = transformArray(arr2);
  return newStr1 === newStr2 ? true : false

}

console.log(solution(["egg", "add"]));
console.log(solution(["foo", "bar"]));
console.log(solution(["paper", "title"]));
console.log(solution(["ca", "ab"]));
console.log(solution(["aa", "bb"]));
console.log(solution(["aedor", "eiruw"]));

const url = `https://easycode-js.herokuapp.com/`;
const myForm = document.forms[0];

myForm.addEventListener("submit", e => {
  e.preventDefault();
  let { name, email } = myForm.elements;
  let xhr = new XMLHttpRequest();

  if (!name.value) {
    return alert("ADD NAME");
  }

  if (!email.value) {
    return alert("ADD EMAIL");
  }

  let newUser = JSON.stringify({
    fullName: name.value,
    email: email.value,
    phone: "0931632467"
  });

  xhr.open("POST", url + "insu/users", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(newUser);
});
/*
TASK 1
Изучите API http://easycode-js.herokuapp.com/
Зарегистрируйте 10 пользователей с разными именами и email 
И ТЕЛЕФОНАМИ! адресами.
fullName - должно содержать имя и фамилию 'John Smith'
Используйте XMLHttpRequest => POST
*/
const button = document.querySelector(".users");

const users = [
  {
    fullName: "Alexander Yermolovich",
    phone: "0931632467",
    email: "kabal929228@gmail.com"
  },
  { fullName: "Dima Chernomordenko", phone: "0977279062", email: "dima@gmail.com" },
  { fullName: "Vasy Petrov", phone: "0675554688", email: "vasy@gmail.com" },
  {
    fullName: "Tasy Shevchenko",
    phone: "0661257848",
    email: "tasy@gmail.com"
  },
  {
    fullName: "Kristina Kozyb",
    phone: "0661924669",
    email: "kristina@gmail.com"
  },
  { fullName: "Dmitriy Mihaylov", phone: "0939593446", email: "dmitriy@gmail.com" },
  {
    fullName: "Tatyana Podlesnay",
    phone: "0997894561",
    email: "tatyana@gmail.com"
  },
  { fullName: "Alina Semenova", phone: "0974561238", email: "alina@gmail.com" },
  { fullName: "Vika Velichko", phone: "0503033359", email: "vika@gmail.com" },
  {
    fullName: "Andrey Petrov",
    phone: "0739517532",
    email: "andrey@gmail.com"
  }
];

button.addEventListener("click", e => {
  users.forEach(e => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url + " sashayermolovich/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(e));
  });
});
//
//
/*
TASK 2
phone-app. Первая страница.
Загружайте пользователей с сервера при загрузке странице.
*/

/*
// contentEditable
Сделайте, чтобы на странице add-user.html пользователь
добавлялся на сервер.
*/
// Для PhoneBook сделайте отдельный репозиторий

// Рекомендую - вам необходимо сделать 1 метод(или отдельный класс) который будет отправлять запросы
// доступ к этому методу должен быть в каждом вашем классе
// url - должен быть константа, т.к url у вас изменяться не будет.