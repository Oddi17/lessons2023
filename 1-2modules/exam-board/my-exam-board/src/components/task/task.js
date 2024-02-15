import './task.scss'
import { createButton } from '../button/button'
import { updateTaskList } from '../tasklist/tasklist'
import { saveDataLS } from '../../controllers/localStorage'
import { createAddTaskForm } from '../addtaskform/addtaskform'
import { createModal } from '../modal/modal'
import {gsap} from 'gsap'
import '/avatars/1.png'
import '/avatars/2.png'
import '/avatars/3.png'
import '/avatars/4.png'
import '/avatars/5.png'
import '/avatars/6.png'


const removeTask = (id) => {
  Store.tasks.forEach((element, i) => {
    if (element.id === id) {
      Store.tasks.splice(i, 1)
      saveDataLS()
    }
  })
}
//commit
const editTask = (id) => {
  Store.tasks.forEach((element, i) => {
    if (element.id === id) {
     let data = element
      //добавим модалку
      const modalContainer = document.createElement('div')
      modalContainer.className = 'modals fade'

      const AddTaskForm = createAddTaskForm(data)

      const modal = createModal(AddTaskForm)

      modalContainer.append(modal)
      document.body.append(modalContainer)
      gsap.from(modal, {
        opacity: 0,
        y: -100,
        duration: 0.3,
      })
    }
  })
}

export const createTask = (data) => {
  const elem = document.createElement('div')
  elem.className = 'task'
  elem.id = data.id
  elem.innerHTML = `
     <div class='cell name' data-index='${data.id}'>
          <input type="checkbox" class='draggable'>
          <img src='./avatars/${data.count}.png'>
          <div class='task-text'> 
               <div class='title'>${data.title}</div>
               <div class='url'>${data.url}</div>
          </div>
     </div>
     <div class='cell status'>
     <div class='task_status done'>${data.status}</div>
     </div>
     <div class='cell description'>${data.description}</div>
     <div class='cell date_start'>${data.date_start}</div>
     <div class='cell date_finish'>${data.date_finish}</div>
     <div class='cell controls'>
          <div class = 'button remove'>
               <img src='./trash_icon.svg'>
          </div> 
          <div class = 'button edit'>
               <img src='./pencil_icon.svg'>
          </div> 
     </div>
     `

  //НАДО КАК-ТО РЕШИТЬ СО СТАТУСОМ

  elem.querySelector('.controls .remove').addEventListener('click', () => {
    removeTask(data.id)
    updateTaskList()
  })

  elem.querySelector('.controls .edit').addEventListener('click', () => {
    editTask(data.id)
  })

  return elem
}
