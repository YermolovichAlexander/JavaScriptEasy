/*
* Приложение телефонный справочник

* Cоздайте функцию конструктор.
* У данной функции должны быть методы:
* Преобразование телефонного номера из формата 0931632467 в (093) 16-32-467
* Проверка, что телефонный номер содержит только числа
* Добавление пользователей в объект
* Удаление пользователя по имени, фамилии
* Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
* Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
* Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
* Фильтр по указанному свойству
*/


function GreatPhoneBook() {
  let users = []; 
  let id = 0;
  // 
  this.addChars = function(telNumb, chars, ...args) {
    //телефон,строка символов для добавления, массив мест
    let numArr = telNumb.split("");
    for (let i = 0; i < args.length; i++) {
      numArr.splice(args[i], 0, chars[i]);
    }
    return numArr.join("");
  };
  // проверка на номер
  this.numberOnly = function(telNumb) {
    if (isNaN(telNumb)) {
      return "Неправильный ввод!";
    } else {
      return true;
    }
  };
  /// добавляем нового пользователя
  this.addUser = function(telNumb, fName, lName, localId = id) {
    users[localId] = { id: localId, telNumb, fName, lName };
    if (localId == id) {
      id++;
    }
  };
  // удаление по имени и фамилии
  this.delUser = function(delStr) {
    users = users.filter(function(val) {
      return !(val.fName == delStr || val.sName == delStr);
    });
  };
  // поиск по имени и фамилии
  this.searchUser = function(delStr) {
    return users.filter(function(val) {
      return val.fName == delStr || val.sName == delStr;
    });
  };
  // изменяет контентт
  this.changeContent = function(userToChange, newTelNumber, newFName, newLName) {
    this.addUser(newTelNumber, newFName, newLName, userToChange);
  };
  // сортировка по столбцу
  this.sortByy = function(sortValue) {
    return users.sort(function(a, b) {
      return a[sortValue] < b[sortValue];
    });
  };
}

PhoneBook = new GreatPhoneBook();
console.log(PhoneBook.addChars("0931632461", "() --", 0, 4, 5, 8, 11)); //

console.log(PhoneBook.numberOnly("0931632467"));
console.log(PhoneBook.numberOnly("0931632467"));

for (let i = 0; i < 10; i++) {
  PhoneBook.addUser(`0931632467${i}`, `Alex${i}`, `Yemolovich${i}`);
}

console.log(PhoneBook);
PhoneBook.delUser("Alex");
PhoneBook.delUser("Yemolovich");
PhoneBook.changeContent(5, "123", "312", "123");
console.log(PhoneBook.sortByy("telNumb"));

