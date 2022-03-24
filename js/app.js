const dom = {
  formTodo: document.getElementById('form-todo'),
  todoList: document.getElementById('todo-list'),
};

let todos = [];

getTodos()

dom.formTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.title.value;
  const newTodo = {
    title: inputValue,
    completed: false
  }
  postTodo(newTodo)
  e.target.reset();
})

dom.todoList.addEventListener('click', (e) => {
  e.preventDefault()
  const btnCancel = e.target.closest('.cancel');
  const btnComplete = e.target.closest('.complete');
  const todoId = Number(e.target.closest('.todo-item').dataset.id);

  if(btnCancel) {
    deleteTodo(todoId)
  }
  if(btnComplete) {
    updateTodo(todoId, {completed: true})
  }
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

async function getTodos() {
  try {
    const response = await axios.get('https://app-json3.herokuapp.com/todos');
    todos = response.data;
    renderTodos(todos, dom.todoList)
  } catch (error) {
    console.warn(error)
  }
}

async function postTodo(newTodo) {
  try {
    const response = await axios.post('https://app-json3.herokuapp.com/todos', newTodo);
    todos.push(response.data)
    renderTodos(todos, dom.todoList)
  } catch (error) {
    console.warn(error)
  }
}

async function deleteTodo(id) {
  try {
    await axios.delete(`https://app-json3.herokuapp.com/todos/${id}`);
    todos = todos.filter((todo) => todo.id !== id)
    renderTodos(todos, dom.todoList)
  } catch (error) {
    console.warn(error)
  }
}

async function updateTodo(id, updateData) {
  try {
    const response = await axios.patch(`https://app-json3.herokuapp.com/todos/${id}`, updateData);
    const todoIdx = todos.findIndex((todo) => todo.id === id);
    todos.splice(todoIdx, 1, response.data);
    renderTodos(todos, dom.todoList);
  } catch (error) {
    console.warn(error)
  }
}