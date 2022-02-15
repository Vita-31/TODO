const dom = {
  formTodo: document.getElementById("form-todo"),
  todoList: document.getElementById("todo-list"), 
}

// const todos = [
//   {
//     title: 'Explore and Travel',
//     completed: false
//   },
//   {
//     title: 'A new way to explore the world ',
//     completed: false
//   },
//   {
//     title: 'Guides by Thousand Sunny',
//     completed: false
//   }
// ]

dom.formTodo.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = e.target.title.value;
  let newTodo = {
    title: inputValue,
    completed: false
  }
  // fetchData('./data/data.json', 'POST', newTodo)
  e.target.reset();
})

dom.todoList.addEventListener('click', (e) => {
  if(e.target.closest('.btn--cancel')) {
    // fetchData('./data/dat.json', 'DELETE')
  }
})

//вставити текст
function createTodo(todo) {
  return `
  <li class="todo__item todo-item">
      <p>${todo.title}</p>
      <button class="btn btn--cancel"">
          <img src="./img/cancel-icon.svg" class="img-cancel" alt="Delete" width="1" height="1">
      </button>
  </li>
  `
}

//розєднати туду
function renderTodoHTML(todos) {
  return todos.map(todo => createTodo(todo))
}

//вставити туду в список
function renderTodos(todos, todoList) {
  todoList.innerHTML = renderTodoHTML(todos)
}

async function fetchData(url, method = 'GET', data) {
  try {
    let response = await fetch(url, {
      method,
      body: data && JSON.stringify(data),
      headers: {
        "content-type": "application/json;charset=utf-8"
      }
    })
    if(response.ok) {
      let data = await response.json();
      renderTodos(data, dom.todoList)
    }
  } catch (error) {
    console.warn(error)
  }
}

fetchData('./data/data.json');

// async function fetchData(url) {
//   try {
//     let response = await fetch(url)
//     if(response.ok) {
//       let data = await response.json();
//       renderTodos(data, dom.todoList)
//     } else {
//       throw new Error
//     }
//   } catch (error) {
//     console.warn(error)
//   }
// }
// fetchData('./data/data.json')
// fetch('./data/data.json')
//   .then(response => response.json())
//   .then(data => {
//     renderTodos(data, dom.todoList)
//   })