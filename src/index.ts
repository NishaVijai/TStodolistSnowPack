import { v4 as uuidV4 } from 'uuid'

type Task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

const listUl = document.querySelector<HTMLUListElement>("#list")
// const newTaskForm = document.querySelector<HTMLFormElement>("#new-task-form")

// when using id - follow as below
const newTaskForm = document.getElementById("new-task-form") as HTMLFormElement | null
const newTaskTitleInput = document.querySelector<HTMLInputElement>("#new-task-title")

// define savedTasks as a Task array
const savedTasks: Task[] = loadSavedTasks()

savedTasks.forEach(addListItem)

newTaskForm?.addEventListener('submit', e => {
  // submit should not refresh the page, prevent the default
  e.preventDefault()

  // using ? is called - optional chaining
  if (newTaskTitleInput?.value == "" || newTaskTitleInput?.value == null) return

  const newTask: Task = {
    id: uuidV4(),
    title: newTaskTitleInput.value,
    completed: false,
    createdAt: new Date(),
  }

  savedTasks.push(newTask)
  saveTasksFunction() 

  addListItem(newTask)
  newTaskTitleInput.value = ""
})

function addListItem(task: Task) {  
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")

  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasksFunction()    
  })

  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  listUl?.append(item)
}

function saveTasksFunction() {
  localStorage.setItem("saved tasks", JSON.stringify(savedTasks))
}

function loadSavedTasks(): Task[] {
  const savedTasksJSON = localStorage.getItem("saved tasks")

  if (savedTasksJSON == null) return[]
  return JSON.parse(savedTasksJSON)
}