document.addEventListener("DOMContentLoaded", () => {
  // your code here


  

  document.querySelector("form").addEventListener("submit", (e) => {
    let newTaskForm = document.getElementById("create-task-form")
    let newTaskDescription = document.getElementById("new-task-description")
    let newTaskPriority = document.getElementById("new-task-priority")
    e.preventDefault()
    newTask(newTaskDescription.value)
  })
  
});

function newTask(todo){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener("click", deleteTask)
  btn.textContent = "X"
  p.textContent = `${todo} `
  document.querySelector('#tasks').appendChild(p)
  p.appendChild(btn)
  console.log(p)
}

function deleteTask(e){
  e.target.parentNode.remove()
}

function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(e) {
  if(!e.target.matches('dropbtn')){
    var dropdowns = document.getElementsByClassName("dropdown-content")
    var i
    for(i = 0; i < dropdowns.length; i++){
      var openDropdown = dropdowns[i]
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show')
      }
    }
  }
}







