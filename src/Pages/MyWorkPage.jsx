import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import pic7 from "../assets/art/chuchu1-2.png";
import thu7 from "../assets/art/chuchu1-3.png";
import pic2 from "../assets/art/cryptopfp1 1.png";
import thu2 from "../assets/art/cryptopfp1 2.png";
import pic5 from "../assets/art/ldk1 1.png";
import thu5 from "../assets/art/ldk1 2.png";
import pic4 from "../assets/art/Inwoo3 1.png";
import thu4 from "../assets/art/Inwoo3 2.png";
import pic1 from "../assets/art/LEEEEZ23 1.png";
import thu1 from "../assets/art/LEEEEZ23 2.png";
import pic8 from "../assets/art/ren 1.png";
import thu8 from "../assets/art/ren 2.png";
import pic3 from "../assets/art/MTA2 1.png";
import thu3 from "../assets/art/MTA2 2.png";
import pic6 from "../assets/art/tear 1.png";
import thu6 from "../assets/art/tear 2.png";
import pic9 from "../assets/art/angel 1.png";
import thu9 from "../assets/art/angel 2.png";
import pic10 from "../assets/art/sushi2 1.png";
import thu10 from "../assets/art/sushi2 3.png";
import pic11 from "../assets/art/kitty1 1.png";
import thu11 from "../assets/art/kitty1 2.png";
import pic12 from "../assets/art/kitty2 1.png";
import thu12 from "../assets/art/kitty2 2.png";
import gif from "../assets/art/angel.gif";
import Button from "../Components/Button/Button";
import "./MyWorkPage.css";

const Gallery = ({ images, resetSelectedImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const handleClick = (image) => {
    if (selectedImage && selectedImage.src === image.src) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  useEffect(() => {
    if (resetSelectedImage) {
      setSelectedImage(null);
    }
  }, [resetSelectedImage]);

  return (
    <div className="gallery" ref={galleryRef}>
      {selectedImage ? (
        <div className="selected-image">
          <img
            src={selectedImage.src}
            alt="Selected"
            onClick={() => {
              setSelectedImage(null);
            }}
          />
          <div
            className="selected-image-text"
            dangerouslySetInnerHTML={{ __html: selectedImage.subHtml }}
          />
        </div>
      ) : (
        images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleClick(image)}
          >
            <img src={image.thumb} alt={`Img ${index}`} />
          </div>
        ))
      )}
    </div>
  );
};

const MyWorkPage = () => {
  const [isActive, setActiveTab] = useState("digitalArt");
  const [resetSelectedImage, setResetSelectedImage] = useState(false);

  const digitalArt = [
    {
      src: pic1,
      thumb: thu1,
      subHtml: "<h4>Chuchu Artwork</h4><p>Digital art by you</p>",
    },
    {
      src: pic2,
      thumb: thu2,
      subHtml: "<h4>Crypto PFP</h4><p>Crypto-themed digital portrait</p>",
    },
    {
      src: pic3,
      thumb: thu3,
      subHtml: "<h4>LDK Piece</h4><p>LDK art example</p>",
    },
    {
      src: pic4,
      thumb: thu4,
      subHtml: "<h4>Inwoo Art</h4><p>Artwork of Inwoo</p>",
    },
    {
      src: pic5,
      thumb: thu5,
      subHtml: "<h4>LDK Piece</h4><p>LDK art example</p>",
    },
    {
      src: pic6,
      thumb: thu6,
      subHtml: "<h4>LDK Piece</h4><p>LDK art example</p>",
    },
    {
      src: pic7,
      thumb: thu7,
      subHtml: "<h4>LDK Piece</h4><p>LDK art example</p>",
    },
    {
      src: pic8,
      thumb: thu8,
      subHtml: "<h4>LDK Piece</h4><p>LDK art example</p>",
    },
  ];

  const threeDArt = [
    {
      src: pic9,
      thumb: thu9,
      subHtml: "<h4>Chuchu Artwork</h4><p>Digital art by you</p>",
    },
    {
      src: pic10,
      thumb: thu10,
      subHtml: "<h4>Crypto PFP</h4><p>Crypto-themed digital portrait</p>",
    },
    {
      src: pic11,
      thumb: thu11,
      subHtml: "<h4>LDK Piece</h4><p>LDK art example</p>",
    },
    {
      src: pic12,
      thumb: thu12,
      subHtml: "<h4>Inwoo Art</h4><p>Artwork of Inwoo</p>",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setResetSelectedImage(true);
    setTimeout(() => setResetSelectedImage(false), 0);
  };

  return (
    <div className="my-work-page">
      <h1>My Work</h1>
      <div className="button-group">
        <Button
          className={`tab-button ${
            isActive === "digitalArt" ? "active" : "notactive"
          }`}
          onClick={() => handleTabChange("digitalArt")}
        >
          Digital Art
        </Button>
        <Button
          className={`tab-button ${
            isActive === "threeDArt" ? "active" : "notactive"
          }`}
          onClick={() => handleTabChange("threeDArt")}
        >
          3D Art
        </Button>
      </div>
      <Gallery
        images={
          isActive === "all"
            ? allArt
            : isActive === "digitalArt"
            ? digitalArt
            : threeDArt
        }
        resetSelectedImage={resetSelectedImage}
      />
    </div>
  );
};

export default MyWorkPage;
