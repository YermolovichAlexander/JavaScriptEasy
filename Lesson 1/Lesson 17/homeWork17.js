/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2] 
 * лидеры 17, 5 и 2.
 * */
let solution = (arr, finalArr = []) => {
    let value = Math.max(...arr);
    let newArr = [];
    finalArr.push(value);
    finalArr.concat(value);
    arr.forEach((element, i) => {
        if (element == value) {
            newArr = arr.slice(i + 1);
        }
    });
    if (newArr.length !== 0) {
        solution(newArr, finalArr);
    }
    console.log(finalArr);
};
solution([16, 17, 4, 3, 5, 2]); // === [17, 5, 2]
solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]); // [67, 45, 35, 8]
solution([12, 10, 12, 8, 7, 6]); // [12, 8, 7, 6]
solution([1, 2, 3, 4, 5, 4]); // [5, 4]

/* Task 1
 Сделайте карусель.
* При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
*
*
* Сделайте слайдер - бесконечным, после третьего изображения снова первое.
* Добавьте внизу цифры с текущим активным изображением.
*/
class Slider {
    constructor() {
        this.slides = document.querySelectorAll('li');
        this.currentSlide = 0;
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
    }

    goToSlide(n) {
        this.slides[this.currentSlide].className = 'slide';
        this.currentSlide = (n + this.slides.length) % this.slides.length;
        this.slides[this.currentSlide].className = 'slide showing';
    }
    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }
    previousSlide() {
        this.goToSlide(this.currentSlide - 1);
    }
    render() {
        this.right.onclick = () => {
            // console.log(this);
            this.nextSlide();
        }
        this.left.onclick = () => {
            this.previousSlide();
        }
    }
}
let slider = new Slider();
slider.render();
/*
 * TASK 2
 * Сделайте класс, который будет иметь метод topStyle
 * метод topStyle принимает объект с CSS стилями и добавляет в <head>
 *   новый элемент с данными стилями
 *
 *
 * */
class TheCssStyle {
    constructor() {}
    topStyle(tag, obj) {
        let newTag = document.createElement(`${tag}`);
        let head = document.querySelector('head');
        head.insertAdjacentElement('afterbegin', newTag);
        let styleName;
        let styleValue;
        for (let key in obj) {
            styleName = key;
            styleValue = obj[key];
        }
        let styleA = `${styleName}`;
        newTag.style[styleName] = styleValue;
    }
}
let theCssStyle = new TheCssStyle();
theCssStyle.topStyle('fetch', {
    backgroundColor: 'blue'
})


/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в 
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */

let pattern = (str) => {
    let newStr = str.split(/-/);
    let left = RegExp.leftContext;
    let rightPart = RegExp["$'"];
    let re = /[\S]{1}/;
    let sym = rightPart.slice(1);
    let results = rightPart.match(re);
    let upper = results[0].toUpperCase();
    let resulTo = rightPart.replace(re, upper);
    let finalStr = left.concat(resulTo);

    return finalStr;
}
console.log(pattern('margin-left'));
console.log(pattern('background-color'));
console.log(pattern('flex-basis'));