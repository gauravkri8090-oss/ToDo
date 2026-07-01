let todos = [];

function addTodo() {
    const input = document.getElementById("todoinput");
    if (input.value.trim() === "") return;

    todos.push({ title: input.value, completed: false });
    input.value = "";
    render();
}

function deleteTodo(idx) {
    todos.splice(idx, 1);
    render();
}

function toggleDone(idx) {
    todos[idx].completed = !todos[idx].completed;
    render();
}

function editTodo(idx) {
    const newTitle = prompt("Edit task:", todos[idx].title);
    if (newTitle !== null && newTitle.trim() !== "") {
        todos[idx].title = newTitle;
        render();
    }
}

function createtodocomponent(todo, idx) {
    const div = document.createElement("div");

    const left = document.createElement("div");
    left.className = "left";

    const right = document.createElement("div");
    right.className = "right";

    const h3 = document.createElement("h3");
    h3.innerHTML = (idx + 1) + ". " + todo.title;
    if (todo.completed) h3.classList.add("completed");

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "✔";
    doneBtn.className = "done-btn";
    doneBtn.onclick = () => toggleDone(idx);

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTodo(idx);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTodo(idx);

    left.appendChild(doneBtn);
    left.appendChild(h3);

    right.appendChild(editBtn);
    right.appendChild(deleteBtn);

    div.appendChild(left);
    div.appendChild(right);

    return div;
}

function render() {
    const list = document.getElementById("todolist");
    list.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        list.appendChild(createtodocomponent(todos[i], i));
    }
}
