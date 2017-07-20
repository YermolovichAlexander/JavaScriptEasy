/*
_________________РАЗМЕРЫ ЭЛЕМЕНТА________________

element.clientTop ~css border
element.clientLeft ~css border
element.clientWidht ~css widht + border - (scroll-bar)
clientHeight ~ css height + padding


offsetHeight ~ css height+border+padding
offsetWidth ~ height+border+padding
offsetTop ~ положение сверху относительно offsetParent элемента
offsetLeft ~ положение слева относительно offsetParent элемента

_________________SCROLL ______________

element.scrollTop -позиция скролла относительна блока элемента (px)
element.scrollLeft -позиция скролла относительна горизонтального элемента (px)
element.scrollIntoView() -скролл к элементу

window.pageYOffset - скролл Y относительно окна window 
window.pageXOffset - скролл X относительно окна window 

_______________Document_____________

document.documentElement.clientHeight - высота страницы
document.documentElement.clientWidht - ширина страницы
*/

// let tr = document.getElementsByTagName('tr');
// for(let i = 0; i.tr.lenght; i++){
//     let td = tr[i];


// DOM Events Level 2

// element.addEventListener('eventName':string, function(){}, true/false)
//
//


let query = selector => document.querySelector(selector);

const block1 = query('.block1');
const block2 = query('.block2');
const block3 = query('.block3');

block1.addEventListener('click', () => {
    alert('BLOCK 1');
}, true);
block2.addEventListener('click', (event) => {
    event.stopPropogation();
    event.stopImmediatePropogation();
    alert('BLOCK 2')
});
block3.addEventListener('click', (event) => {
    // event.stopPropogation();
    alert('BLOCK 3  ')
}, true);

// event.stopPropogation - остановить вспытие
// event.stopImmediatePropogation - убрать все последующие привязанные события
// event.preventDefault  - убрать действиу по умоланию при нажатии