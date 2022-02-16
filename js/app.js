const dom = {
  formTodo: document.getElementById('form-todo'),
  todoList: document.getElementById('todo-list'),
};

let todos = [
  {
    id: 1,
    title: 'Explore and Travel',
    completed: false,
  },
  {
    id: 2,
    title: 'A new way to explore the world ',
    completed: true,
  },
  {
    id: 3,
    title: 'Guides by Thousand Sunny',
    completed: false,
  },
];

renderTodos(todos, dom.todoList)

dom.formTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.title.value;
  const newTodo = {
    title: inputValue,
    completed: false,
    id: Date.now()
  }
  todos.push(newTodo)
  renderTodos(todos, dom.todoList)
  e.target.reset();
})

dom.todoList.addEventListener('click', (e) => {
  const btnCancel = e.target.closest('.cancel');
  const btnComplete = e.target.closest('.complete');
  const todoId = Number(e.target.closest('.todo-item').dataset.id);

  if(btnCancel) {
    todos = todos.filter((todo) => todo.id !== todoId)
  }
  if(btnComplete) {
    const todoIdx = todos.findIndex((todo) => todo.id === todoId);
    const todo = {...todos[todoIdx]};
    todo.completed = true
    todos.splice(todoIdx, 1, todo)
  }
  renderTodos(todos, dom.todoList)
})

function renderTodos(todos, todoList) {
  todoList.innerHTML = createTodo(todos)
}

function createTodo(todos) {
  return todos.map(todo => createTodoHTML(todo)).join('')
}

function createTodoHTML(todo) {
  return `
      <li class="todo__item todo-item" data-id="${todo.id}">
      <p class="${todo.completed ? 'todo-item--completed' : ''}">${todo.title}</p>
      <div class="todo-btn"> 
      ${ !todo.completed
         ? ` <button class="btn btn--icon complete">
                <img src="./img/copmlete.png" class="btn-img" alt="Delete" width="1" height="1">
              </button>`  : ''
        }
        <button class="btn btn--icon cancel">
            <img src="./img/cancel-icon.svg" class="btn-img" alt="Delete" width="1" height="1">
        </button>
      </div>
    </li>
  `
}