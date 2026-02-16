const form = document.querySelector('form');
const task = document.querySelector('#task');
const alltask = document.querySelector('#alltask');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = task.value.trim();
    if (text === "") return;

    const parent = document.createElement('div');
    parent.style.marginTop = "20px";

    const taskNo = document.createElement('span');
    taskNo.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    const doneBtn = document.createElement('button');
    doneBtn.textContent = "Done";

    parent.append(taskNo, deleteBtn, doneBtn);
    alltask.append(parent);

    deleteBtn.addEventListener('click', () => {
        parent.remove();
    });

    doneBtn.addEventListener('click', () => {
        taskNo.style.textDecoration = 'line-through';
        taskNo.style.color = 'grey';
    });

    form.reset();
});

