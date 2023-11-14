const $controlElements = document.querySelectorAll('.controls')
const $carouselContainer = document.querySelector('.carousel-container')
let itemWidth = -1 * $carouselContainer.parentElement.offsetWidth

let controlsClickHandler = (e) => {
  //   console.dir(e.target.classList.contains('prev'))
  let translate = 0
  if (e.target.classList.contains('prev')) {
    translate -= itemWidth
    // if (translate < 0) {

    // }
  } else if (e.target.classList.contains('next')) {
    // $carouselContainer.style.transform = 'translateX(' + translate + 'px)'
    translate += itemWidth
    // if (translate > translate * 2) {
    //   translate += itemWidth
    // }
  }
  $carouselContainer.style.transform = 'translateX(' + translate + 'px)'
  //что делаем когда получили клик
}

$controlElements.forEach((element) => {
  //тут происходят итерации цикла, перебор controlElemets
  element.addEventListener('click', controlsClickHandler)
})
