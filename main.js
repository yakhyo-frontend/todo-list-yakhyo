// const elList = document.querySelector('.todos');
// const elForm = document.querySelector('.write-todo');
// const elMessage = document.querySelector('.message');

// let todos = [];

// elForm.addEventListener('submit', (e) => {
    
//     e.preventDefault();

//     const inputValue = elForm.querySelector('input').value.trim();

//     if (!inputValue) return alert("Maydonni toldirish shart!");

//     if (inputValue.length > 25) return alert("25 ta belgidan kam bo'lish kerak!");

//     elMessage.textContent = '';

//     const item = {
//         inputValue: inputValue,
//         date: '12, 12, 1212',
//         completed: false
//     };

//     todos.push(item);

//     showData(todos);

//     elForm.reset();
// });

// function showData(todos) {
//     elList.innerHTML = '';
//     todos.forEach(item => {

//         elList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>${item.inputValue}</span>
//         <i class="far fa-edit"></i>
//         <i class="far fa-trash-alt delete" onclick="deleteTodo(${todos.indexOf(item)})"></i></li>`;

//         console.log(item);
//     });
// }

// function deleteTodo(index) {
//     todos = todos.filter((item, i) => i !== index);
//     showData(todos);
// };


elForm = document.querySelector('.write-todo');
elList = document.querySelector('.todos');
elMessage = document.querySelector('.message');

let todos = [];

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = elForm.querySelector('input').value.trim();

    if (!inputValue) return alert('Maydonni toldirish shart');

    if (inputValue.length > 25) return alert('25-ta belgidan kam bolish kerak!');

    elMessage.textContent = '';
    
    const item = {
        inputValue: inputValue,
        date: '12, 12, 1212',
        completed: false
    }

    todos.push(item);

    showData(todos);

    elForm.reset();
});

function showData(todos) {
    elList.innerHTML = '';

    todos.forEach((item) => {
        elList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item.inputValue}</span>
        <i class="far fa-edit"></i>         <i class="far fa-trash-alt delete" onclick="deleteTodo(${todos.indexOf(item)})"></i></li>`;

        console.log(item);

    });
};

function deleteTodo(index) {
    todos = todos.filter((item, i) => i !== index);
    showData(todos);
}