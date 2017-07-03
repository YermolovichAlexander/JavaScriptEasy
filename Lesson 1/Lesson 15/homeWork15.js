// /*
// TASK 0
// Проверьте что строка содержит все символы от "a" до "z"
//   solution("wyyga") // false
//   solution("qwertyuioplkjhgfdsazxcvbnm") // true
//   solution("ejuxggfsts") // false
//   solution("qpwoeirutyalskdjfhgmznxbcv") // true
//   solution("0123456789abcdefghijklmnop") // false
// */
// const solution = str => {
//   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//   for (let i = 0; i < alphabet.length; i++) {
//     if (str.indexOf(alphabet[i]) >= 0) {
//       continue
//     } else {
//       return false
//     }
//   }
//   return true
// }
// console.log(solution("wyyga")); // false
// console.log(solution("qwertyuioplkjhgfdsazxcvbnm")); // true
// console.log(solution("ejuxggfsts")); // false
// console.log(solution("qpwoeirutyalskdjfhgmznxbcv")); // true
// console.log(solution("1232454654cdefghijklmnoppo")); // false

// /*
//  2. Напишите функция которая преобразовывает открывает скобки всех 
//  вложенных внутри массивов
//  Необходимо реализовать рекурсивный фызов функции.
//  Функция должна открывать любое количество внутренних массивов и объектов
//  example:
//  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
//  [25,10,[10,[15]]] => [25,10,10,15]
//  [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
//  */
// const openBrackets = arr => {
//   let newArr;
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr === undefined) {
//       newArr = [];
//     }
//     if (Array.isArray(arr[i])) {
//       newArr = newArr.concat(openBrackets(arr[i]));
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr
// }

// console.log(openBrackets([[1, 2], [3, [4]], 5, 10]));
// console.log(openBrackets([1, [2, [{ a: "b" }]]]));

// /*
// Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
// Второй макет.
// https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
// Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
// */

class Html {
  constructor() {
    this.tableHeadings = ["Name", "Last Name", "Email"];
    this.contacts = [
      { name: "Иван", lastName: "Петров", email: "IvanPetrov@gmail.ec.ua"},
      { name: "Сергей", lastName: "Сергеев", email: "Sergey@@gmail.ec.ua" },
      { name: "Александр", lastName: "Александров", email: "AlexSmirnov@ec.ua" },
      { name: "Сергей", lastName: "ВОлков", email: "VolkovSergey@ec.ua" },
      { name: "Мария", lastName: "Шарапова", email: "MariyaSharapova@ec.ua" },
      { name: "Александр", lastName: "Винник", email: "AlexVinnik@ec.ua" },
      { name: "Дарий", lastName: "Смирнов", email: "DariySmirnov@ec.ua" },
      { name: "Елена", lastName: "Лещенко", email: "ElenaLeshenko@ec.ua" },
      { name: "Ольга", lastName: "Новикова", email: "OlgaNovikova@ec.ua" },
      { name: "Влад", lastName: "Яма", email: "grygoriy@gmail.com" }
    ];
  }

  newTag(obj) {
    let newT = document.createElement(obj.tag);
    if (obj.tagClass) newT.className = obj.tagClass;
    if (obj.text) newT.textContent = obj.text;
    return newT;
  }

  table() {
    const table = this.newTag({tag:'table', tagClass: 'table table-hover contacts'});
    const thead = this.newTag({tag:"thead"});
    const tr = this.newTag({tag:'tr'});
    const tbody = this.newTag({tag:'tbody'});

    this.tableHeadings.forEach(elem => {
      const th = this.newTag({tag:'th', text:elem});
      tr.appendChild(th);
    });

    this.contacts.forEach(elem => {
      const tr = this.newTag({tag: 'tr'});
      tbody.appendChild(tr);

      for(let key in elem) {
        const td = this.newTag({tag: 'td', text: elem[key]})
        tr.appendChild(td)
      }
    })

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr);
    return table
  }

  main() {
    const main = this.newTag({tag:"main"});
    const div = this.newTag({tag:"div", tagClass:'Container'});

    main.appendChild(div);
    div.appendChild(this.table());
    document.body.appendChild(main);
  }

}
let phoneBook = new Html();
phoneBook.main();