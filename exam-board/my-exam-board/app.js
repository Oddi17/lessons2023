import './style.css'
import {createWorkspace} from './src/components/workspace/workspace.js'
import { loadDataLS } from './src/controllers/localStorage'

window.Store = {
    //tasks: [],
    tasks: [
        // {
        //     id: '1',
        //     title: 'Поправить иконку на сайте',
        //     url: 'catalog.io',
        //     status: 'done',
        //     description: 'Подвинуть иконку на 2px вправо',
        //     date_start:'22.01.2022',
        //     date_finish:'25.01.2022'
        // },
        // {
        //     id: '2',
        //     title: 'Поправить иконку на сайте 2',
        //     url: 'catalog.io 2',
        //     status: 'new',
        //     description: 'Подвинуть иконку на 2px вправо 2',
        //     date_start:'30.01.2022',
        //     date_finish:'31.01.2022'
        // }
    ]
}

window.Store.tasks = loadDataLS()
//commit
const createApp = (container) => {
    const Panel = document.createElement('div')
    Panel.className = 'side'

    const Workspace = createWorkspace()
    
    container.append(
        Panel,
        Workspace

    )
}


createApp(document.querySelector('#app'))

  


