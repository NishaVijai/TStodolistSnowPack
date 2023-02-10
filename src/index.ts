// import { v4 as uuidV4 } from 'uuid'

// console.log(uuidV4());

const listUl = document.querySelector<HTMLUListElement>("#list")
// const newTaskForm = document.querySelector<HTMLFormElement>("#new-task-form")

// when using id - follow as below
const newTaskForm = document.getElementById("#new-task-form") as HTMLFormElement | null
const newTaskTitleInput = document.querySelector<HTMLInputElement>("#new-task-title")

