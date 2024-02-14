const initTooltip = () => {
  const toolMouseOverHandler = (e) => {
    let $eleme = e.currentTarget
    if ($eleme.children.length !== 0 || $eleme.className === 'box') return
    // || $eleme.className === 'box'
    // if ($eleme.className === 'box' || $eleme.children[0].className==='box') return
    let box = document.createElement('div')
    box.className = 'box'
    let tooltipTex = $eleme.innerText
    box.innerHTML =
      '<span>Нажмите на кнопку для перехода в ' + tooltipTex + '</span>'
      box.style.opacity = '1'
    $eleme.append(box)
  }

  const toolMouseOutHandler = (e) => {
    let $eleme = e.currentTarget
    $eleme.querySelector('.box').remove()
  }

  const $plashtooltip = document.querySelectorAll('.tooltip')
  $plashtooltip.forEach((element, i) => {
    element.addEventListener('mouseover', toolMouseOverHandler)
    element.addEventListener('mouseout', toolMouseOutHandler)
  })
}

initTooltip()

//задержка появления плашки
