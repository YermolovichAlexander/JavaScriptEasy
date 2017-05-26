// console.log(2, 4, 6, 8, 10, 12);

// for (let i=0; i<1000; i++) {
//     if(i%2 ==0)
//     console.log(i);
// }


// const arr = [10, 20, 30 ,40];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// function param(arr){
//   for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     console.log(arr[i] * 2);
//     }
// }
// console.log(param([1, 2, 4, 5, 6]));



// const qwerty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterEven(arr){
//      let sumArr = [];
// for (let i=0; i < arr.length; i++) {
//     var elem = arr[i];
//      if(elem % 2 > 0){
//       sumArr.push(elem);
//              console.log(sumArr);
//         }
//     }
//     return sumArr;
// }
// filterEven(qwerty);


// var myArr = [10, 20,{age: 27}, 30, 41];
// let i=0;
// while(i < myArr.length){
//     console.log(myArr[i]);
//     if (myArr[i].age) { 
//         console.log('you are winners');
//         break;
//     }
//     i++;
// }

// let counter = 0;
// let randomValue = Math.random() * 10;
// while(randomValue < 9) {
//     randomValue = Math.random() * 10;
//     console.log(counter, 'react');
//     console.log(randomValue);
//     counter = counter++;
// }
// console.log(randomValue);
// do {
//     console.log('xxx');
// } while (randomValue<9);

var project = { 
    name: ' Landing page', 
    salary: '1200$',
    //ключ          значение 
    technology: ['CSS', 'HTML', 'jQuery'],
    // method: function () {
    // console.log(' Что делать?')
    // }
};
for (let key in project) { 
    console.log ('key: ',  key);
    console.log ('value: ',  project [key]);
    console.log(project [key]);

        var arr = project [key];
    if (Array.isArray(arr)){
        for (let i = 0; i < arr.lenght; i++){
            let itemInArray = elem[i];
            console.log('itemInArray:'  , itemInArray);
        }
    } 
}

