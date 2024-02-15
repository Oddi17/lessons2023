const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']

let createCarousel = (elemid, images, options) => {
  if (!options) {
    options = {
      loop: 1,
      indicators: 1,
      controls: 1,
    }
  }
  const $mainCountainer = document.getElementById(elemid)
  let currentImg = 0
  let translate = 0

  // создание carousel
  const $carouselContainer = document.createElement('div')
  $carouselContainer.className = 'carousel-container'
  for (let item of images) {
    let $imgContainer = document.createElement('div')
    $imgContainer.className = 'carousel-item'
    $imgContainer.innerHTML = '<img src="' + item + '" alt="">'
    $carouselContainer.append($imgContainer)
  }

  //создание контролов
  const $controlElements = document.createElement('div')
  $controlElements.className = 'carousel-controls'
  $controlElements.innerHTML = ` 
      <div class="controls prev"><</div>
      <div class="controls next">></div>
  `

  // создание индикаторов
  const $indicatorsContainer = document.createElement('div')
  $indicatorsContainer.className = 'carousel-indicators'
  $indicatorsContainer.innerHTML = `
      <div class="dot active"></div>
      <div class="dot"></div>
      <div class="dot"></div>
  `
  //создание индикаторов
  const $indicatorElement = document.createElement('div')
  $indicatorElement.className = 'carousel-indicators'

  images.forEach((elem, i) => {
    $indicatorElement.innerHTML += `
       <div class="dot ${currentImg === i ? 'active' : ''}"></div>
     `
  })

  //добавление в html файл
  $mainCountainer.append($carouselContainer)
  $mainCountainer.append($controlElements)
  $mainCountainer.append($indicatorsContainer)

  let itemWidth = $carouselContainer.offsetWidth
  let imgQuantity = $carouselContainer.children.length
  let updateIndicators = () => {
    let arrFromCollection = Array.from($indicatorsContainer.children)
    arrFromCollection.forEach((elem, index) => {

      elem.className = 'dot ' + (index === currentImg ? 'active' : '')
    })
  }

  let controlsClickHandler = (e) => {

    //Зацикливание
    if (e.target.classList.contains('prev')) {
      if (translate !== 0) {
        translate += itemWidth
      } else {
        if (options.loop) translate = (imgQuantity - 1) * itemWidth * -1
      }
    } else if (e.target.classList.contains('next')) {
      //перемотка
      if ((imgQuantity - 1) * itemWidth !== -translate) {
        translate -= itemWidth
      } else {
        if (options.loop) translate = 0
      }
    }

    currentImg = Math.abs(translate / itemWidth)

    updateIndicators()

    $carouselContainer.style.transform = 'translateX(' + translate + 'px)'
    //что делаем, когда получили клик
  }

  let arrFromControls = Array.from($controlElements.children)
  arrFromControls.forEach((element) => {
    //тут происходят итерации цикла. перебор controlElements
    element.addEventListener('click', controlsClickHandler)
  })
}

createCarousel('carousel_1', images, {
  loop: 1,
  indicators: 1,
  controls: 1,
})
