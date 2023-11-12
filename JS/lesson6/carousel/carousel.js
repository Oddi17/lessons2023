// const $controlElements = document.querySelectorAll('.controls')
// const $carouselContainer = document.querySelector('.carousel-container')
// const $indicatorsContainer = document.querySelector('.carousel-indicators')
// let itemWidth = $carouselContainer.offsetWidth
// let translate = 0
// let loop = 1
// let imgQuantity = $carouselContainer.children.length
// let currentImg = 0

let updateIndicators = () => {
  let arrFromCollection = Array.from($indicatorsContainer.children)
  arrFromCollection.forEach((elem, index) => {
    // elem.className = 'dot'
    // if (index === currentImg) {
    //   elem.className = 'dot active'
    // }
    elem.className = 'dot ' + (index === currentImg ? 'active' : '')
  })
}

let controlsClickHandler = (e) => {
  console.dir(e.target.classList.contains('prev'))

  //Зацикливание

  if (e.target.classList.contains('prev')) {
    if (translate !== 0) {
      translate += itemWidth
    } else {
      if (loop) translate = (imgQuantity - 1) * itemWidth * -1
    }
  } else if (e.target.classList.contains('next')) {
    //перемотка
    if ((imgQuantity - 1) * itemWidth !== -translate) {
      translate -= itemWidth
    } else {
      if (loop) translate = 0
    }
  }

  currentImg = Math.abs(translate / itemWidth)

  console.log('index' + currentImg)
  updateIndicators()

  $carouselContainer.style.transform = 'translateX(' + translate + 'px)'
  //что делаем, когда получили клик
}

// $controlElements.forEach((element) => {
//   //тут происходят итерации цикла. перебор controlElements
//   element.addEventListener('click', controlsClickHandler)
// })

let createCarousel = (elemid, counter, images) => {
  // carousel

  const $mainCountainer = document.getElementById(elemid)

  let template = `
    <div class="carousel-container">
        <div class="carousel-item">
            <img src="img1.jpg" alt="">
        </div>
        <div class="carousel-item">
            <img src="img2.jpg" alt="">
        </div>
        <div class="carousel-item">
            <img src="img3.jpg" alt="">
        </div>
    </div>
    <div class="carousel-controls"> 
        <div class="controls prev"><</div>
        <div class="controls next">></div>
    </div>
    <div class="carousel-indicators">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div> 
    `

    $mainCountainer.innerHTML = template

    // $mainCountainer.append(template)


}

createCarousel('carousel_1')
