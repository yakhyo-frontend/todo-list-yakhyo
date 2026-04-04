const elList = document.querySelector('.todos');
const elForm = document.querySelector('.write-todo');
const elMessage = document.querySelector('.message');

let todos = [];

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = elForm.querySelector('input').value.trim();

    if (!inputValue) return alert("Maydonni toldirish shart!");



    const item = {
        inputValue: inputValue,
        completed: false
    };

    todos.push(item);

    console.log(todos);
    
    showData(todos);
});

function showData(todos) {
    todos.forEach(item => {

        elList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item.inputValue}</span>
        <i class="far fa-edit"></i>
        <i class="far fa-trash-alt delete"></i></li>`;

        console.log(item);
    });
}