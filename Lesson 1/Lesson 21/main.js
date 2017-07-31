// class App { 
//     header() {
//         return
//         ` 
//         <th>
//             <td>fullName</td>
//             </th>
//             <th>
//                 <td>user name</td>
//                 </th>
//                 <th>
//                     <td> email</td>
//                     </th>
//                 `;
//     }

//     renderUsers() {
//         const someUsers = [
//             {name: 'Jack', phone: '123123'},
//             {name: 'Jack', phone: '123123'},
//             {name: 'Jack', phone: '123123'},
//         ];
//     }

// table() {
//     return
//     <table>
//         <thead>
//             ${this.header()}
//             </thead>
//             </table>
// }
//     render () {

//     }
// }


// -----------------------------------------------------



// const usersId =[1,2,3];
// const url = `https://jsonplaceholder.typicode.com/users/`;

// const serverRequest = (url, index) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.readystatechange = () => {
//        //стримы
//         if (xhr.readyState === 4) {
//             // callback(xhr.responseText);
//             counter++;
//             // console.log(counter);
//             const data = JSON.parse(xhr.responseText);
//             users.push({ userName: data.username, id: data.id });
//         }
//         if(counter === 3)  {
//             // console.log(users);
//            console.log(`index: #${index}`)
//         }
//     };
//     xhr.send();
// };

// usersId.forEach((userId, index) => {
//     serverRequest(url + userId, index);
// });
//пре
// const users = [];

// psevdo-code
// request(URL)
// .then(user1 => users.push(user1))
// .then(user2 => users.push(user2))
// .then(user3 => users.push(user3));
// request(usersId).map(usersFromServer => {})


// --------------------------PROMISE > реактивный подход для реализации асинхр чатей когда -
// - которую мы сможем взять, когда нам это потребуется.

// Промис может находиться в трех состояниях
// --pending        запрос на выполнение промиса отправлен, ответа еще нет
// --resolved       пришел ответ. обработали ответ как и планировали. удачно
// --rejected       пришел  ответ. обработали ответ как и панировали. ОШИБКА

// var promise = new Promise((resolve, reject)=> {

//     setTimeout(() => {
//         resolve('едем на бали');
//     }, 10000);
// }).then(data => {console.log(data)});

const usersId = [1, 2, 3];
const url = 'https://jsonplaceholder.typicode.com/users/';
const urlEasy = 'https://easycode-js.herokuapp.com/xxx/users/';



usersId.map(userId => {
    fetch(urlEasy).then(data => data.json()) //Promise
    .then(data => console.log(data)); //USer
});

const myUser = {
    fullName: 'Sasha',
    email: 'sasha@gmail.com'
};

fetch (urlEasy, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(myUser)
    }).catch(e => {
        console.log(e);
    });


// window.localStorage - тоже самое что и sessionStorage, но не очищает псле закрытия браузера
//  window.sessionStorage - Хранит отдельное пространство для кажого экземпляра (JSON сущность - сериализуемый
// обьект) который доступен на время сессии страницы ( так долго пока браузер открыт, включая перезагрузку страницы
//  или открытие страницы заново)








// const user1 = fetch(url +1).then(data => {
//      return data.json()
// }).then(user => {
//     console.log(user);
// });
// const user1 = fetch(url + 1).then(data => data.json());
// const user2 = fetch(url + 2).then(data => data.json());
// const user3 = fetch(url + 3).then(data => data.json());

// const users = Promise.all([user1, user2, user3])
//     .then(usersReady => {
//             console.log(usersReady);
//     });

//             users.map(userPromise => {
//                 userPromise.then(user => {
//                     console.log(user);
//                 })
//             });