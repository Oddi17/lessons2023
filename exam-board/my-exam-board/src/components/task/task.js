import './task.scss'    
import { createButton } from '../button/button'
import { updateTaskList } from '../tasklist/tasklist'


const removeTask = (id) => {
     Store.tasks.forEach((element,i) => {
          if (element.id === id) {
               Store.tasks.splice(i,1)  
          }
     })
}



export const createTask = (data) => {
  const elem = document.createElement('div')
  elem.className = 'task'
  elem.id = data.id
  //const addTrashButton = createButton('trash','','delete')
  //const addRewriteButton = createButton('pencil','','rewrite')
{/* <div class='checkbox'>
     </div>
     <div class='avatar'>
          <img src='./public/avatars/${data.id}.png'
     </div> */}
  elem.innerHTML = `
     <div class='cell name' data-index='${data.id}'>
          <input type="checkbox"/>
          <img src='./avatars/${data.id}.png'>
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
     </div>
     `

     //НАДО КАК-ТО РЕШИТЬ СО СТАТУСОМ


     //const cellforBut = elem.children 
     //console.log(cellforBut[cellforBut.length-1])
     //cellforBut[cellforBut.length-1].append(addTrashButton)
     //cellforBut[cellforBut.length-1].append(addRewriteButton)



     elem.querySelector('.controls .remove').addEventListener(
          'click', () => {
               removeTask(data.id)
               updateTaskList()
          }
          
     )

     return elem
}
