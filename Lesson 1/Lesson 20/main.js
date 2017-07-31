const url2 = 'http://easycode-js.herokuapp.com/';
const url3 = 'https://google.com/';

const url= `https://jsonplaceholder.typicode.com/users/:id`;
const usersId =[1,2,3];

const button = document.querySelector('button');
const button2 = document.querySelector('.btn');
const button3 = document.querySelector('idUsers');
const app = document.querySelector('.app');
const form = document.forms;

const serverRequest = () => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
       //стримы
        if (xhr.readyState === 4 && xhr.DONE ===4) {
            // callback(xhr.responseText);
            app.innerHTML += '<hr/>' + xhr.responseText;
        };
        // button.addEventListener("click", ()=>{
    });

    xhr.open('GET', url + 'AE', true);
    xhr.send();
};

button.addEventListener('click', () => {
    serverRequest();
    
});
// -------------------------------------------------------------------
button2.addEventListener('click', () => {
    let xhrPost = new XMLHttpRequest();
    xhrPost.addEventListener('readystatechange', () => {
        if (xhrPost.readyState === 4) {
            console.log('response: ', JSON.parse(xhrPost.response));
            console.log('responseText: ', xhrPost.responseText);
         }
    });
    xhrPost.open('POST', 'http://easycode-js.herokuapp.com/AE/users', true);
    xhrPost.setRequestHeader('Content-Type', 'application/json');
    xhrPost.send(JSON.stringify({
        fullName: '_____Alex',
        email: 'alex@gmail.com'
    }));
});


myForm.addEventListener('submit', e => {
    e.preventDefault();
 const{name, email} = myForm.elements;

 if (!name.value) {
     alert('Заполните имя');
 }
    if(!email.value) {
     alert('Заполните email');
 }
});
// 0 - ЕЩЕ НЕ ОПРАВЛЕННО
// 1 - ОТКРЫТО
// 2 - ПОЛУЧЕНИЕ ЗАГОЛОВКИ 
// 3 - НАЧАЛО ПОЛУЧЕНИЕ ОТВЕТА
// 4 - ЗАВЕРШЕНИЕ ПОЛУЧЕНИЯ ОТВЕТА
// console.log(xhr.responseText)
// //xhr.onreadystatechange = () => {}

// //то что я хочу запросить
// xhr.open('GET', url + 'test', true);
// // отправка запроса
// xhr.send();

//POST Запрос - для добавления новых данных
// использ. ля отправки данных на сервер.JSON, XML, FormData, etc..//
// JSON => Content-Type:'application/json' - заголовок
// FormData => Content-Type: 'multipart/form-data' - значения в форме
//Content-Type:application/x-www-form-urlencoded-file, Binary data
//В зависимости от разного типа данных, необхадимо указывать различные заголовке при отправке


button3.addEventListener('click', () => {

    let getIdUsers = new XMLHttpRequest();
    getIdUsers.open('GET', url, true);
    getIdUsers.setRequestHeader('Content-Type', 'application.json');
    getIdUsers.send(JSON.stringify(usersId));

    getIdUsers.onreadystatechange = () => {
        if(getIdUsers.readyState === 3) {
            document.body.innerHTML += `<pre>${getIdUsers.responseText}</pre> <hr />`;
        }
    };
});