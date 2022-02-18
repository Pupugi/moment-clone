const todosForm = document.getElementById("todos__form");
const todosInput = todosForm.querySelector("#todos__input");
const todosUl = document.querySelector("#todos__ul");

let todos = [];
const TODOS_KEY = "todos"

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintPlan(newPlan) {
    const li = document.createElement("li");
    li.id = newPlan.id;
    const span = document.createElement("span");
    span.innerText = newPlan.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todosUl.appendChild(li);
}

function addPlan(event) {
    event.preventDefault();
    const newPlan = todosInput.value;
    todosInput.value = "";
    const newPlanObj = {
        text: newPlan,
        id: Date.now(),
    };
    todos.push(newPlanObj);
    paintPlan(newPlanObj);
    saveTodos();
}

todosForm.addEventListener("submit", addPlan);

const savedPlan = localStorage.getItem(TODOS_KEY);

if (savedPlan !== null) {
    const parsedPlan = JSON.parse(savedPlan);
    todos = parsedPlan;
    parsedPlan.forEach(paintPlan);
}