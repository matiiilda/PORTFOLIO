import React, { useState } from 'react';
import pic1 from "../assets/art/chuchu1.png";
import pic2 from "../assets/art/cryptopfp1.png";
import pic3 from "../assets/art/LDK.png";
import pic4 from "../assets/art/mew1.png";

const MyWorkPage = () => {
  const [activeTab, setActiveTab] = useState('gallery1');

  const digitalArt = [
    { src: pic1, alt: 'Placeholder 1' },
    { src: pic2, alt: 'Placeholder 1' },
    { src: pic3, alt: 'Placeholder 1' },
    { src: pic4, alt: 'Placeholder 1' },
  ];
  
    const threeDArt = [
      { src: 'https://via.placeholder.com/150/0000FF', alt: 'Blue Placeholder' },
      { src: 'https://via.placeholder.com/150/FF0000', alt: 'Red Placeholder' },
      { src: 'https://via.placeholder.com/150/00FF00', alt: 'Green Placeholder' },
    ];
  
    const Gallery = ({ images }) => {
      return (
        <div>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden shadow-md ${index % 3 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
            >
              <img src={image.src} alt={image.alt || `Image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      );
    };
  
    const CustomButton = ({ onClick, isActive, children }) => {
      return (
        <button 
          onClick={onClick} 
          className={`px-4 py-2 border rounded-lg m-2 transition-colors ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          {children}
        </button>
      );
    };
  
    return (
      <div className="p-6">
        <h1>My Work</h1>
        <div>
          <CustomButton onClick={() => setActiveTab('digitalArt')} isActive={activeTab === 'digitalArt'}>
            Gallery 1
          </CustomButton>
          <CustomButton onClick={() => setActiveTab('threeDArt')} isActive={activeTab === 'threeDArt'}>
            Gallery 2
          </CustomButton>
        </div>
        {activeTab === 'gallery1' ? <Gallery images={digitalArt} /> : <Gallery images={threeDArt} />}
      </div>
    );
  };
  
  export default MyWorkPage;
  