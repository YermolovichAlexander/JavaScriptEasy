const h1  = document.createElement('h1');

const ul = document.createElement ('ul')
document.body.appendChild(ul);


h1.textContent = ' HEllo easy code';


function create() {
    for(let i =0; i < 3; i++){
        const li = document.createElement('li')
        ul.appendChild(li);
        const arr = ['JavaScript',' React',' Node.js']
        li.textContent = arr[i];
    }

}
create();

//метод appendChild есть у каждого DOM элемента и appendChild принемает  "элемент"