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
dom.formTodo.addEventListener('submit', (e) => {
  const inputValue = e.target.title.value;
  const newTodo = {
    title: inputValue,
    completed: false,
    id: Date.now()
  }
  e.target.reset();
})

renderTodos(todos, dom.todoList)

function renderTodos(todos, todoList) {
  todoList.innerHTML = createTodo(todos)
}

function createTodo(todos) {
  return todos.map(todo => createTodoHTML(todo))
}

function createTodoHTML(todo) {
  return `
      <li class="todo__item todo-item">
      <p class="${todo.completed ? 'todo-item--completed' : ''}">${todo.title}</p>
      <div class="todo-btn"> 
      ${ !todo.completed
         ? ` <button class="btn btn--icon">
                <img src="./img/copmlete.png" class="btn-img" alt="Delete" width="1" height="1">
              </button>`  : ''
        }
        <button class="btn btn--icon">
            <img src="./img/cancel-icon.svg" class="btn-img" alt="Delete" width="1" height="1">
        </button>
      </div>
    </li>
  `
}

// renderTodos(todos, dom.todoList);

// dom.formTodo.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const inputValue = e.target.title.value.trim();
//   const newTodo = {
//     title: inputValue,
//     completed: false,
//     id: Date.now(),
//   };
//   todos.push(newTodo);
//   renderTodos(todos, dom.todoList);
//   // fetchData('./data/data.json', 'POST', newTodo)
//   e.target.reset();
// });

// dom.todoList.addEventListener('click', (e) => {
//   const deleteBtn = e.target.closest('.btn--cancel');
//   const completeBtn = e.target.closest('.btn--complete');
//   if (deleteBtn || completeBtn) {
//     const todoItem = e.target.closest('.todo-item');
//     const todoId = Number(todoItem.dataset.id);
//     if (deleteBtn) {
//       console.log('DELETE!!!', todoId);
//       // const todoIdx = todos.findIndex(todo => todo.id === todoId)
//       // todos.splice(todoIdx, 1)
//       //or
//       todos = todos.filter((todo) => todo.id !== todoId);
//     }
//     if (completeBtn) {
//       console.log('EDIT!!!', todoId);
//       const todo = todos.find((todo) => todo.id === todoId);
//       todo.completed = true;

//       // const todoIdx = todos.findIndex(todo => todo.id === todoId)
//       // const todo = {...todos[todoIdx]}
//       // todo.completed = true
//       // todos.splice(todoIdx, 1, todo)
//     }
//     renderTodos(todos, dom.todoList);
//   }
// });

// //вставити текст
// function createTodo(todo) {
//   return `
  // <li class="todo__item todo-item" data-id="${todo.id}">
  //     <p class="${todo.completed ? 'todo-item--completed' : ''}">${todo.title}</p>
  //     ${
  //       !todo.completed
  //         ? `<button class="btn btn--complete">
  //               Complete
  //           </button>`
  //         : ''
  //     }
  //     <button class="btn btn--cancel">
  //         <img src="./img/cancel-icon.svg" class="img-cancel" alt="Delete" width="1" height="1">
  //     </button>
  // </li>
//   `;
// }

// //розєднати туду
// function renderTodoHTML(todos) {
//   return todos.map((todo) => createTodo(todo)).join('');
// }

// //вставити туду в список
// function renderTodos(todos, todoList) {
//   todoList.innerHTML = renderTodoHTML(todos);
// }

// async function fetchData(url, method = 'GET', data) {
//   try {
//     let response = await fetch(url, {
//       method,
//       body: data && JSON.stringify(data),
//       headers: {
//         'content-type': 'application/json;charset=utf-8',
//       },
//     });
//     if (response.ok) {
//       let data = await response.json();
//       renderTodos(data, dom.todoList);
//     }
//   } catch (error) {
//     console.warn(error);
//   }
// }

// fetchData('./data/data.json');

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
