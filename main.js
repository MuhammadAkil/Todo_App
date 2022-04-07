const formDom = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");
const tasksDOM = document.querySelector(".tasks");

var tasks = [
    { name: "", id: Math.random() },
    { name: "", id: Math.random() }
]
const showTasks = () => {
    if (tasks.length < 1) {
        tasksDOM.innerHTML=`<h5 class="empty-list">No Task in the list <h5>`
    } else {
        const allTasks = tasks.map((task) => {
            const { name, id } = task;
            return `
 
        <div class="single-task">
            <h5>${name}</h5>
            <div class="task-links">
                <button type="button" class="delete-btn" data-id="${id}">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>

  `
        })
        console.log(allTasks.join(''));
        tasksDOM.innerHTML = allTasks.join('');
    }
}
showTasks();

formDom.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = taskInputDOM.value 
    console.log(name);

    const task = { name, id: Math.random() };
    tasks.unshift(task);
    showTasks();

    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = 'Success, Task Added';
    formAlertDOM.classList.add('text-success')
    console.log(formAlertDOM.classList);

    setTimeout(() => {
        formAlertDOM.style.display = 'none';
          formAlertDOM.classList.remove('text-success')
},600)
})

tasksDOM.addEventListener('click', (e) => {
    
    const event1 = e.target;
    console.log(event1);
    if (event1.parentElement.classList.contains('delete-btn')) {
        console.log(event1.parentElement.dataset.id);
        const id = Number(event1.parentElement.dataset.id)
        console.log(id)

        const reamingTasks = tasks.filter((task) => task.id !== id);
        console.log(reamingTasks)
        tasks = reamingTasks;
        console.log(tasks)
        showTasks();   
    }

})
 
