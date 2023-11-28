import './workspace.scss'
import { createButton } from '../button/button'
import {createTasklist} from '../tasklist/tasklist'
import {createModal} from '../modal/modal'
import { createAddTaskForm } from '../addtaskform/addtaskform'
import { gsap } from 'gsap'



export const createWorkspace = () => {

    const elem = document.createElement('div')
    elem.className = 'workspace'

    elem.innerHTML = `
        <header> 
            <div>Plans</div> 
            <div class='actions'></div>
        </header>
        <div class='filter-bar'></div>
        <div class='task-container'></div>
        `

    const addTaskButton = createButton('plus','Добавить задачу','primary') 

    addTaskButton.addEventListener('click', ()=>{
        const modalContainer = document.createElement('div')
        modalContainer.className = 'modals fade'

        const AddTaskForm = createAddTaskForm()

        const modal = createModal(AddTaskForm)

        modalContainer.append(modal)
        document.body.append(modalContainer)
        gsap.from(modal, {
            opacity:0,
            y: -100,
            duration: 0.3
        })

    })

    elem.querySelector('.actions').append(
        addTaskButton
    )
    
    const TaskList = createTasklist()
    elem.querySelector('.task-container').append(
        TaskList
    )


    return elem 


} 