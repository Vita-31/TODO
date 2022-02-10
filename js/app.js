const dom = {
  formTodo: document.getElementById('form-todo'),
  todoList: document.getElementById('todo-list'),
}

const todos = [
  {
    title: 'Explore and Travel',
    completed: false
  },
  {
    title: 'A new way to explore the world ',
    completed: false
  },
  {
    title: 'Guides by Thousand Sunny',
    completed: false
  }
]

dom.formTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.title.value;
  const newTodo = {
    title: inputValue,
    completed: false
  };
  console.log(newTodo)
  e.target.reset();
})

function createTodo(todo) {
  return `
      <li class="todo__item todo-item">
          <p>${todo.title}</p>
          <button class="btn btn--cancel">
              <img src="./img/cancel-icon.svg" class="img-cancel" alt="Delete" width="1" height="1">
          </button>
      </li>
  `
} 

function createTodosHTML(todos) {
  return todos.map(todo => createTodo(todo)).join('')
}

function renderTodos(todos, todoList) {
  todoList.innerHTml = createTodosHTML(todos)
}

renderTodos(todos, dom.todoList)