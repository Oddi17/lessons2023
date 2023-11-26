import './button.scss'

const ICONS = {
    'plus' : '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99935 4.16675V15.8334M4.16602 10.0001H15.8327" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>',
}

export const createButton= (icon,title,type) => {

    icon = icon !== null ? icon : ''
    title = title !== null ? title : ''

    const elem = document.createElement('div')
    elem.className = 'button ' + (type || '')
    elem.innerHTML = 
    `
    <span>${icon && ICONS[icon]}</span>
    <span>${title && title}</span>
    `



    return elem 


} 