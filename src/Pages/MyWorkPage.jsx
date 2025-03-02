import React, { useState } from "react";
import pic1 from "../assets/art/chuchu1-2.png";
import thu1 from "../assets/art/chuchu1-3.png";
import pic2 from "../assets/art/cryptopfp1 1.png";
import thu2 from "../assets/art/cryptopfp1 2.png";
import pic3 from "../assets/art/ldk1 1.png";
import thu3 from "../assets/art/ldk1 2.png";
import Button from "../Components/Button/Button";
import "./MyWorkPage.css";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.thumb} alt={`Img ${index}`} />
          <div dangerouslySetInnerHTML={{ __html: image.subHtml }} />
        </div>
      ))}
    </div>
  );
};

const MyWorkPage = () => {
  const [isActive, setActiveTab] = useState("all");

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
  ];

  const threeDArt = [
    {
      src: pic1,
      thumb: thu1,
      subHtml: "<h4>Chuchu Artwork</h4><p>Digital art by you</p>",
    },
  ];

  const allArt = [...digitalArt, ...threeDArt];

  return (
    <div className="my-work-page">
      <h1>My Work</h1>
      <div className="button-group">
        <Button
          className={isActive === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All
        </Button>
        <Button
          className={isActive === "digitalArt" ? "active" : ""}
          onClick={() => setActiveTab("digitalArt")}
        >
          Digital Art
        </Button>
        <Button
          className={isActive === "threeDArt" ? "active" : ""}
          onClick={() => setActiveTab("threeDArt")}
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
      />
    </div>
  );
};

export default MyWorkPage;
