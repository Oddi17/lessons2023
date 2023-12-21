import { createTask } from '../task/task'
import './tasklist.scss'

export const createTasklist = () => {

    const elem = document.createElement('div')
    elem.className = 'tasklist'


    for (let item of Store.tasks) {
        elem.append(createTask(item))
    }
    if (Store.tasks.length === 0) elem.innerHTML='Задач нет'




    

    const taskListContainer = elem
    let taskContainer
    let y = 0
    let delta



    taskListContainer.addEventListener('mousedown',(e)=>{
        taskContainer = e.target.classList.contains('draggable') ? 
        e.target.parentElement.parentElement : null

        if (taskContainer === null) return

        //taskContainer.style.cssText = 'position:absolute'
        //taskContainer.style.top = '0'

        taskContainer.style.transform = 'translateY(0px)'
        y = e.offsetY



    }) 



    taskListContainer.addEventListener('mouseup',(e)=>{
        let id = taskContainer.children[0].dataset.index

        let direction = (delta > 0) ? 'down' : 'up'

        Store.tasks.forEach((item,i) => {
            if(item.id===id) {
                if (direction === 'down') {
                    if(i===Store.tasks[0].length) return

                    let next = Store.tasks [i+1]
                    Store.tasks[i+1] = Store.tasks[i]
                    Store.tasks[i]=next
                } else {
                    if(i===0) return
                    let prev =Store.tasks[i-1]
                    Store.tasks[i-1]=Store.tasks[i]
                    Store.tasks[i] = prev
                }
            }
            
        });

    })

    taskListContainer.addEventListener('mousemove',(e)=>{
        if (!taskContainer) return
        //console.log(e.offsetY)


        let offsetTop = taskContainer.offsetTop
        //taskContainer.style.top = e.offsetY + 'px'

        let delta = (e.offsetY-y) - offsetTop
        taskContainer.style.transform = 'translateY('+delta+'px)'

        
    })



    return elem 



} 

export const updateTaskList = () => {

    document.querySelector('.task-container').innerHTML = ''

    document.querySelector('.task-container')
    .append(createTasklist())
    
}

