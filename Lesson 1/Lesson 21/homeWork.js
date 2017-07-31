/* TASK 0
 Сделайте валидацию кредитной карты, валидация происходит
 используя алгоритм Луна.
  Простое описание:
   1. Начиная с последнего правого числа, двигаясь влево,
   умножайте каждое второе число на 2, 
   если результат умножения больше 9
   (например 8 х 2 = 16),
   тогда сумируйте получившиеся число 
   (например 16: 1+6 = 7, 18: 1+8 = 9).
   2. Получите сумму всех чисел.
   3. Если сумма всех чисел кратно 10, тогда число является подходящим, 
      иначе нет.
P.S. -> проверьте на свой карте.
arguments ["4408041234567893"] => expected true
arguments ["1234567890123456"] => expected false
arguments ["4408042234567893"] => expected false
arguments ["38520000023237"] => expected true
arguments ["4222222222222"] => expected true
*/
let solution = (arg) => {
    let someArr = [];
    arg.split('').forEach((val) => someArr.unshift(+val));
    someArr = someArr.map((val, index) => {
        if (index % 2 == 1) {
            return (val * 2 > 9 ? ((val * 2) % 10) + 1 : val * 2);
        } else {
            return val;
        }
    }).reduce((sum, val) => sum += val, 0);
    return !(someArr % 10);
}

console.log(solution("4408041234567893"));
console.log(solution("1234567890123456"));
console.log(solution("4408042234567893"));
console.log(solution("38520000023237"));
console.log(solution("4222222222222"));

/*
PHONE BOOK сделать классно !
Mind-map:
https://drive.google.com/file/d/0B2Pgd2n8T30Yazcwdks4NkRabzg/view?usp=sharing
Приложение, чтобы открыть mindMap => mindmup.com
*/