import { createCarousel } from "./_carousel.js"

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']

createCarousel('carousel_1', images, {
    loop: 0,
    indicators: 1,
    controls: 1,
  })