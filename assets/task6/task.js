// 6.For this task you will be combining your knowledge of DOM access and events to build a todo app!
//     As a user, you should be able to:
// • Add a new todo (by submitting a form)
// • Mark a todo as completed (cross out the text of the todo)
// • Remove a todo
//Now using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list!
// As a super bonus, try to also save todos that you have marked as complete!

const submitBtn = document.querySelector("#sub-btn");

const taskList = document.querySelector("#task-list");
const taskName = document.querySelector("#task-name");

submitBtn.addEventListener("click", ()=>{

    const listItem = document.createElement("li");

    const div = document.createElement("div");
    div.className = "list-item";
    div.textContent = taskName.value;
    taskName.value = "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCompleted"

    const button = document.createElement('button');
    button.className = 'cross';
    button.textContent = 'x';

    checkboxEventHandler(checkbox);
    div.appendChild(checkbox);
    cancelEventHandler(button);
    div.appendChild(button);

    listItem.appendChild(div);

    taskList.appendChild(listItem);
})

const checkboxEventHandler = (checkbox)=>{
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Apply text decoration when the checkbox is checked
            this.parentElement.style.textDecoration = "line-through";
            this.parentElement.style.textDecorationThickness = "20%";
        } else {
            // Remove text decoration when the checkbox is unchecked
            this.parentElement.style.textDecoration = "none";
            this.parentElement.style.textDecorationThickness = "initial";
        }
    });
}

const cancelEventHandler = (cross)=>{
    cross.addEventListener('click', function() {
        const listItem = this.closest('li');
        if (listItem) {
            listItem.remove();
        }
    });
}