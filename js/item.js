const add = document.querySelector('#add');
const substract = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');

add.addEventListener('click', ()=> quantity.value = Number(quantity.value) + 1);
substract.addEventListener('click', ()=> {
    if (quantity.value > 0){
        quantity.value = Number(quantity.value) - 1
    }
    });
