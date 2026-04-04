const elTodo = document.querySelector(".write-todo");
const elInput = document.querySelector(".form-control");
const elMessage = document.querySelector(".message");
const elList = document.querySelector(".list-group");
const elItem = document.querySelector(".list-item");

elTodo.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = elInput.value.trim();

    if (!inputValue)
    return alert("Maydonni toldirish shart!");

    elMessage.textContent = "";

    if(inputValue.length > 20) {
    elList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue.slice(0, 20)}...</span>
    <i class="far fa-edit"></i>
    <i class="far fa-trash-alt delete"></i></li>`;
    } else {
    elList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="far fa-edit"></i>
    <i class="far fa-trash-alt delete"></i></li>`;
    }
});