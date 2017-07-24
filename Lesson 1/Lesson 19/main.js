/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/

const solution = str => {
  str = str.replace(/::/g, "/").replace(/-/g, "_");
  str = str.replace(/[A-Z](?=[a-z])/g, function(x) {
    return "_" + x.toLowerCase();
  });

  str = str.replace(/[A-Z]{1,}/g, function(x) {
    return "_" + x.toLowerCase();
  });

  str = str.replace(/[^A-Za-z]{2,}/g, function(x) {
    return x[0];
  });

  if (str[0] === "_") str = str.slice(1);
  console.log(str);
};

solution("ActiveModel::Errors");
solution("HelloHowAreYou");
solution("MyNAMEIsBOND-JamesBond");
solution("MAINCompany::BEST-MAINUser");