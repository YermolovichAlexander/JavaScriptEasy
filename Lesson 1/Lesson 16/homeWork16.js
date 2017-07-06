/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 // solution([[]]) => []
 
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

// const solution = arr => arr[0].map((_, index) => arr.map(r => r[index]));
const solution = (arr) => {
  return arr[0].map((_, i) => {
    // i == 0
    return arr.map(value => {
      // i == 0
      // value == [1, 'a']
      // value == [2, 'b']
      // value == [3, 'c']
      return value[i]
    })
  })
}

const solution2 = (arr) => {
  const myArr = [];
  for (let i = 0; i < arr[0].length; i++) {
    const localArray = [];
    for (let j = 0; j < arr.length; j++) {
      const elem = arr[j];
      localArray.push(elem[i]);
    }
    myArr.push(localArray);
  }
  console.log(myArr);
  return myArr;
}
solution2([[1, 3, 5], [2, 4, 6]])
solution2([[1, 'a'], [2, 'b'], [3, 'c']])


/*
 Визуализируйте массив, если в коллекции есть свойство children, тогда создайте вложенный лист
 name - свойство h1
 children ul->li
 
 Используйте innerHTML
 
 */

const navigation = [
  { name: 'Главная' },
  {
    name: 'Каталог',
    children: [
      {
        name: 'Компьютеры',
        children: [
          { name: 'Ноутбуки' },
          { name: 'Планшеты' }
        ]
      }
    ]
  },
  { name: 'Профиль' }
];

const visualArray = (arr) => {
  let layout = '<ul>';
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    layout += `<li>${elem.name}`;
    
    let hasChildren = elem.children || [];
    
    for (let i = 0; i < hasChildren.length; i++) {
      let child = hasChildren[i];
      layout += `<ul><li>${child.name}`;
      layout += '</ul></li>'
      if ( !hasChildren.children ) {
        layout += '</li>'
        break;
      }
      hasChildren = hasChildren.children;
    }
    layout += '</li>'
  }
  console.log(layout);
  return layout + '</ul>'
  
};

document.body.innerHTML = visualArray(navigation);