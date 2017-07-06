/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/
const solution = str => {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) >= 0) {
      continue
    } else {
      return false
    }
  }
  return true
}
console.log(solution("wyyga")); // false
console.log(solution("qwertyuioplkjhgfdsazxcvbnm")); // true
console.log(solution("ejuxggfsts")); // false
console.log(solution("qpwoeirutyalskdjfhgmznxbcv")); // true
console.log(solution("1232454654cdefghijklmnoppo")); // false

/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */
const openBrackets = arr => {
  let newArr;
  for (let i = 0; i < arr.length; i++) {
    if (newArr === undefined) {
      newArr = [];
    }
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(openBrackets(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

console.log(openBrackets([[1, 2], [3, [4]], 5, 10]));
console.log(openBrackets([1, [2, [{ a: "b" }]]]));

/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/




// NEXT FILE domik.js