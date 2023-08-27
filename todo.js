
//Second input Todo
//let newTodo = ['cooking', 'mopping'];
const todoListArray = [{ name: 'cooking', dueDate: '2023-10-10' },
{ name: 'washing', dueDate: '2023-09-03' }]

renderMakeTodo()
function renderMakeTodo() {
  let todoHTML = ''
  // for (let i = 0; i < todoListArray.length; i++){
  //   const todoResultObject = todoListArray[i];
    // const name = todoResultObject.name;
    // const dueDate = todoResultObject.dueDate;
     //The use of destructuring
    //const { name, dueDate } = todoResultObject
    //changing p to div because we want to us grid of 3 columns
    // const html = `
    // <p>
    // ${name} ${dueDate}
    // <button onclick="
    // todoListArray.splice(${i}, 1)
    // renderMakeTodo()
    // ">Delete</button>
    // </p>`
  //   const html = `
  //   <div>${name} </div>
  //   <div>${dueDate}</div>
  //   <button onclick="
  //   todoListArray.splice(${i}, 1)
  //   renderMakeTodo()
  //   " class="delete-btn">Delete</button>
  //   `
  //   todoHTML += html;
  // }
    // document.querySelector('.js-div-content').innerHTML = todoHTML;
  todoListArray.forEach((todoResultObject,index) => {
    const { name, dueDate } = todoResultObject
    const html = `
    <div>${name} </div>
    <div>${dueDate}</div>
    <button class="delete-btn js-delete-todo-btn">Delete</button>
    `
    todoHTML += html
  })
  document.querySelector('.js-div-content').innerHTML = todoHTML;
  console.log(todoHTML)
  document.querySelectorAll('.js-delete-todo-btn')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoListArray.splice(index, 1)
        renderMakeTodo()
      })
    })
}

document.querySelector('.js-add-todo').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const jsInput = document.querySelector('.js-todo-input');
  const name = jsInput.value;
  const date = document.querySelector('.js-due-date');
  const dueDate = date.value;

  todoListArray.push({
    //short hand properties of object, if the name and: variable name are the same
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  })
  console.log(todoListArray)
  jsInput.value = ''
  renderMakeTodo()
}






  
  



