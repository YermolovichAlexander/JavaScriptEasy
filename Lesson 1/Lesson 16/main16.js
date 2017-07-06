const app = {

  appName: 'Тест по программированию',

  questions: [

    {

      name: 'Вопрос 1',

      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],

      rightAnswers: [2]

    }, // приходят с сервера

    {

      name: 'Вопрос 2',

      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],

      rightAnswers: [1]

    }, // приходят с сервера

    {

      name: 'Вопрос 3',

      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],

      rightAnswers: [2]

    } // приходят с сервера

  ],



  createLi() {

    return this.new('li');

  },

  createQuestions(question) {

    const li = this.createLi();

    const h3 = this.new('h3');

    h3.textContent = question.name;

    const ul = this.new('ul');

    question.answers.forEach(answer => {

      const htmlAnswer = this.createAnswer(answer);

      ul.appendChild(htmlAnswer);

    });

    li.appendChild(h3);

    li.appendChild(ul);

    return li;

  },

  createAnswer(answer) {

    const liAnswer = this.createLi();

    const label = this.new('label');

    const input = this.new('input');



    input.setAttribute('type', 'checkbox');

    liAnswer.appendChild(input);

    liAnswer.appendChild(label);

    label.textContent = answer;

    return liAnswer;

  },

  render() {

    const body = document.body;
    const main = this.new('main');
    const h1 = this.new('h1');
    const ol = this.new('ol');
    const button = this.new('button');
    
    button.onclick = function() {
      const ul = document.querySelectorAll('ul');
      [...ul].forEach(elem => {
        elem.children[1].children[0].checked = true;

      })

      // Массивы + свойства объекта

    };

    button.textContent = 'Проверить';
   
    h1.textContent = this.appName;
    main.appendChild(h1);
    main.appendChild(ol);
    main.appendChild(button);
   

    this.questions.forEach(question => {
      const htmlQuestion = this.createQuestions(question);
      ol.appendChild(htmlQuestion);
    });
    body.appendChild(main);
  },
  new(tag) {
    return document.createElement(tag)
  }
};

app.render();

const button2 = document.createElement('button');
 button2.textContent = 'Generator';
   document.body.appendChild(button2);
   button2.onclick= () => {
      
      main.innerHTML += createList(JavaScriptOneLove);
      
   };
   const JavaScriptOneLove = ['Arrow', 'Замыкания','Классы'];



   const createList = (arr) => {

    let emptyString = '';
    emptyString += '<ul>';
    arr.forEach((elem) => {
        emptyString += `<ul>${elem}</li>`
    });
    emptyString +='</ul>';

    return emptyString;
    //   const ul = document.createElement('ul');
   };
  

//    const main = document.querySelector('.main');
//    document.body.innerHTML += createList(JavaScriptOneLove);

   button2.onclick= () => {
   const main = document.createElement('div');
       main.innerHTML += createList(JavaScriptOneLove);
        const {body} = document;
       console.log(main);
       body.insertAdjacentElement('afterend', main);

         main.insertAdjacentElement('beforebegin', '<h1>!! ! ! !  !</h1>');
         main.insertAdjacentElement('afterend', '<h1>salary: 10000$</h1>');
         
//        var ul = document.createElement('ul');
//          for(...) ul.appendChild(li);   // сначала вставить узлы
//          document.body.appendChild(ul); // затем в документ
   };   
      
    // const body = document.body;  тоже что и верху
    const solary = document.createElement('li');
    const like = document.createElement('li');
    like.innerText = 'я люблю ';
    solary.innerText = '99999999$ ';
  
    
    
    //    var pirate = {
    //        shkiper: {
    //        name: 'jack',
    //        email: 'Vorobey'
    //    }
    // };

    //    const sayHello = object => {
    //        const {name} = object.shkiper;
    //       console.log(name);
    //        console.log (name + ' ', + 'says Hello')
    //    };


   /*

   6 основных методов поиска элементов DOM:

   * getElementById            поиск по элементам
   * getElementByName          поиск по имени
   * getElementByTagName       поиск по тэгу   или "*"
   * getElementByClassName     поиск по классу
   * querySelector             CSS - селектор
   * querySelectorAll          CSS - селектор

   *     insertAdjacentHTML
   *     insertAdjacentElement('beforbegin', '<h1>PRIVET</h1>') принимает строку 
    -- <! -- beforebegin -->
    <p>
    <! -- afterbegin -->
    foo
    <! -- beforeend -->
    </p>
    <! -- afterend -->
    

   */