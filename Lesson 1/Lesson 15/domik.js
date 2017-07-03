
class App {
  constructor() {
    this.listOfPeople = ["Name", "Last Name", "Email"];
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

    this.listOfPeople   .forEach(elem => {
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
let phoneBook = new App();
phoneBook.main();