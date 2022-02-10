const dom = {
  addForm: document.getElementById('addForm'),
  todoList: document.getElementById('todoList'),
};
let todos = [
  {
    title: 'title 1',
    completed: false,
  },
  {
    title: 'title 2',
    completed: false,
  },
];

dom.addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const newTodo = {
    title,
    completed: false,
  };
  console.log(newTodo);
  e.target.reset();
});

function createTodo(todo) {
    return `<li class="todo">
    <p>${todo.title}</p>
    <button class="todo-btn" data-action="del">Delete</button>
</li>`
}

function createTodosHTML(todos) {
  return todos.map((todo) => createTodo(todo)).join('');
}

function renderTodos(todos, todoList) {
  todoList.innerHTML = createTodosHTML(todos);
}
renderTodos(todos, dom.todoList);

// const x = 100
// const y = 200
// const w = 10
// const h = 3

// function buildFoundation(){}
// function buildWalls(){}
// function buildRoof(){}

// function buildHouse(x,y,w,h) {
//     const foundation = buildFoundation(x,y,w,h)
//     const walls = buildWalls(x,y,w,h)
//     const roof = buildRoof(x,y,w,h)
//     return foundation + walls + roof
// }

// buildHouse(x,y,w,h)



boilWater()