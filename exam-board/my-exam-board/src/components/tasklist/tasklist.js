import { createTask } from '../task/task'
import './tasklist.scss'

export const createTasklist = () => {

    const elem = document.createElement('div')
    elem.className = 'tasklist'


    for (let item of Store.tasks) {
        elem.append(createTask(item))
    }
    if (Store.tasks.length === 0) elem.innerHTML='Задач нет'

    return elem 


} 