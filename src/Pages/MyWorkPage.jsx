import React from 'react'

const MyWorkPage = () => {
    const Gallery = ({ images }) => {
        return (
          <div className="gallery-container">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.alt || `Image ${index + 1}`} />
              </div>
            ))}
          </div>
        );
      };
  return (
  <>
      <div>MyWorkPage</div>
      <Gallery/>
  </>

  )
}

export default MyWorkPage