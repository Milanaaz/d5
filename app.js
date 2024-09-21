const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todolist = document.getElementById("todo_list");

const createTodo = () => {
    if (input.value.trim() === "") {
        input.value = "";
        return false;
    } else {
        const div = document.createElement("div");
        const text = document.createElement("h3");
        const divs = document.createElement("div");
        const edit = document.createElement("button");
        const deleteBtn = document.createElement("button");

        deleteBtn.setAttribute("class", "delete_button");
        edit.setAttribute("class", "edit_button");
        divs.setAttribute("class", "buttons_div");
        div.setAttribute("class", "block_text");

        edit.innerHTML = "edit";
        deleteBtn.innerHTML = "delete";
        text.innerHTML = input.value;

        deleteBtn.onclick = () => div.remove();
        edit.onclick = () => {
            const editedText = prompt(`Edit: ${text.innerText}`).trim();
            if (editedText) {
                text.innerHTML = editedText;
            }
        };

        divs.append(edit, deleteBtn);
        div.append(text, divs);
        todolist.append(div);
        input.value = "";
    }
};

createButton.onclick = () => createTodo();
input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        createTodo();
    }
});