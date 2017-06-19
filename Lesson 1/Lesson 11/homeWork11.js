    /* Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *
    */
// let user = {
//   name: "Registered user"
// };
// let admin = {
//   name: "Admin",
//   email: {adminsEmail:"kabal929228@gmail.com"}
// };

// let guest = {
//   name: "Guest"
// };
// let base = {
//   pass: {password: "parol" },
//   registration: {
//     function: () => {
//       return "Registers the user";
//     }
//   }
// };

// user.__proto__ = admin.email;
// base.__proto__ = user;
// guest.__proto__ = base.registration; 
// admin.__proto__ = base.pass;



let user = {
  name: "Зарегеный пользователь"
};
let admin = {
  name: "Админ",
  email: {adminsEmail:"OkYesAnap@gmail.com"}
};

let guest = {
  name: "Гость"
};
let dataBase = {
  pass: { dataBasePass: "parol" },
  registration: {
    regFunc: () => {
      return "Регистрируем пользователя";
    }
  }
};

user.__proto__ = admin.email;//User knows admins email
dataBase.__proto__ = user;// Database have acсess to all users
guest.__proto__ = dataBase.registration; //Guest can register at DB
admin.__proto__ = dataBase.pass;//admin knows password from DB