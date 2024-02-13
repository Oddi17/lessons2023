import {useState,useEffect } from "react"

export default function ImageSlider({images}) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
      <div
        style={{
          display: 'flex',
          transition: 'transform 1s ease', // Анимация сдвига
          transform: `translateX(-${currentImageIndex * 400}px)`, // Ширина изображения 400px
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '400px', height: '300px', flex: '0 0 auto' }}
          />
        ))}
      </div>
  );
}
