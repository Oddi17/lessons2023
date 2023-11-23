import './task.scss'    

export const createTask = (data) => {
  const elem = document.createElement('div')
  elem.className = 'task'
  elem.innerHTML = `
   <div class='cell' data-index='${data.id}'>
    <div class='title'>${data.title}</div>
    <div class='url'>${data.url}</div>
   </div>
   <div class='cell'>
        ${data.status}
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
  `

  return elem
}
