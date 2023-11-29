import './modal.scss'

export const modalController = () => {


}
//commit

export const createModal = (content, data, id) => {
    const elem = document.createElement('div')
    elem.className = 'modal'
    elem.innerHTML = `
        <div class='content'></div>
    `
    content && elem.children[0].append(content)

    return elem
}