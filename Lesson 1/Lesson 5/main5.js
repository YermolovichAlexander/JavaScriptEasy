// function a0rB(a, b) {
//     return a > b ? a : b
// };
// console.log(a0rB(10, 5));


const obj = {name: 'qwerty', qwerty: [1, 2, 310, 20, 10]
}


// for (let key in obj){
    // console.log ('qwerty: ',  key);
    // console.log ('value: ',  qwerty [key]);
    // console.log(obj [key]);
    // var array = obj[key];
// };
 const arr = [1, 2, 75, 310, 20 ,75];

 const task1 = function (data, number) {
     if(Array.isArray(data)){
         for(let i = 0; data.lenght; i++){
             let elem = data[i];
             if(elem > number){
                 console.log(elem);
                 return;
             }
         }
     }else
         {
         //всегда обьект
for(let key in obj){
    let elemInsideObject = obj[key];
    if (Array.isArray(elemInsideObject)){
        for(let i = 0; elemInsideObject.lenght; i++){
             let elem = elemInsideObject[i];
             if(elem > number){
                 console.log(elem);
                 return;
                }
            }
        }
            console.log('privet'); 
            }
        }
    };

// task1( obj, 200);
// task1(arr, 55);


//  function object(arg, arg2) {
//     let array = arg[];
//     if( arg == {} ){
//     for (let key in arg){
//       if (arg[])
//             console.log(array[i]);
//         }
//     }
     
//  } return > ВЫБРАСЫВАЕТ ИЗ ВСЕХ ЦИКЛОВ
// VAR COLLECTION = [{AGE: 60, {AGE}}]

// РЕКУРСИя 
function sum (number) {
    if(number < 1){
        return number;
    }

    return sum(number - 1) + number;
    // итерациz1: 4+5 
    
}

// console.log(sum(5));

var qwe = [1, 2, 3];

// console.log(qwe.splice(1, 1, ));
// console.log(qwe.reverse());
// concat >>> склеивает и создает новый массив.!!!
// ДИстракция>>>>>>>> 

const js = 'JavaSCRIPT COOL language with awesome community';
function string (){
    //1. разделяем строку на слова
       let str = (js.split(' '));
            console.log(str);
            let arr = [];
            arr.push(str)
            
            console.log(arr);
}
string();

