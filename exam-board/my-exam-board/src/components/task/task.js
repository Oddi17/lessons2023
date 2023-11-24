import './task.scss'    
import { createButton } from '../button/button'
export const createTask = (data) => {
  const elem = document.createElement('div')
  elem.className = 'task'
  elem.id = data.id
  const addTrashButton = createButton('trash','','delete')
  const addRewriteButton = createButton('pencil','','rewrite')
{/* <div class='checkbox'>
     </div>
     <div class='avatar'>
          <img src='./public/avatars/${data.id}.png'
     </div> */}
  elem.innerHTML = `
     <div class='cell'>
          
          <input type="checkbox"/>
          
          <img src='./avatars/${data.id}.png'>
          
          <div class='task-text'> 
               <div class='title'>${data.title}</div>
               <div class='url'>${data.url}</div>
          </div>
     </div>
     <div class='cell'>
          
          <div class='status done'>${data.status}</div> 
     </div>
     <div class='cell'>
          ${data.description}
     </div>
     <div class='cell'>
          ${data.date_start}
     </div>
     <div class='cell'>
          ${data.date_finish}
     </div>
     <div class='cell'>
                
     </div>
     `

     //НАДО КАК-ТО РЕШИТЬ СО СТАТУСОМ
     const cellforBut = elem.children 
     console.log(cellforBut[cellforBut.length-1])
     cellforBut[cellforBut.length-1].append(addTrashButton)
     cellforBut[cellforBut.length-1].append(addRewriteButton)

     return elem
}
