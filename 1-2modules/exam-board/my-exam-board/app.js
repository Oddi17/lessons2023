import './style.css'
import {createWorkspace} from './src/components/workspace/workspace.js'
import { loadDataLS } from './src/controllers/localStorage'

window.Store = {
    tasks: [
    ],
    cnt: 1

}

window.Store.tasks = loadDataLS()

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

  


