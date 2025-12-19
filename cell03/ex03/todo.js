const ft_list = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderList() {
    ft_list.innerHTML = '';

    for (let i = todos.length - 1; i >= 0; i--) 
    {
        const div = document.createElement('div');
        div.textContent = todos[i];

        div.addEventListener('click', () => {
            if (confirm("Do you want to delete this task?")) 
            {
                todos.splice(i, 1);
                saveList();
                renderList();
            }
        });
        ft_list.appendChild(div);
    }
}
function saveList() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
newBtn.addEventListener('click', () => {
    const task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== '') {
        todos.push(task.trim()); 
        saveList();
        renderList();
    }
});
renderList();