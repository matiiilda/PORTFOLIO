import React, { useState } from "react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { LightGallery as ILightGallery } from "lightgallery/lightgallery";
import pic1 from "../assets/art/chuchu1.png";
import pic2 from "../assets/art/cryptopfp1.png";
import pic3 from "../assets/art/LDK.png";
import pic4 from "../assets/art/mew1.png";
import style from "./MyWorkPage.css";

const MyWorkPage = () => {
  const [activeTab, setActiveTab] = useState("digitalArt");

  const digitalArt = [
    { src: pic1, alt: "Placeholder 1" },
    { src: pic2, alt: "Placeholder 1" },
    { src: pic3, alt: "Placeholder 1" },
    { src: pic4, alt: "Placeholder 1" },
  ];

  const threeDArt = [
    { src: "https://via.placeholder.com/150/0000FF", alt: "Blue Placeholder" },
    { src: "https://via.placeholder.com/150/FF0000", alt: "Red Placeholder" },
    { src: "https://via.placeholder.com/150/00FF00", alt: "Green Placeholder" },
  ];

  const dynamicEl = [
    {
      src: pic1,
      responsive: "...",
      thumb: "...",
      subHtml: `...`,
    },
    {
      src: "...",
      responsive: "...",
      subHtml: `...`,
    },
    <a
      data-lg-size="1600-1067"
      className="gallery-item"
      data-src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
      data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@tobbes_rd' >Tobias Rademacher </a></h4><p> Location - <a href='https://unsplash.com/s/photos/puezgruppe%2C-wolkenstein-in-gr%C3%B6den%2C-s%C3%BCdtirol%2C-italien'>Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien</a>layers of blue.</p>"
    >
      <img
        alt="layers of blue."
        className="img-responsive"
        src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
      />
    </a>,
    // Add more placeholder images as needed
  ];

  const CustomButton = ({ onClick, isActive, children }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 border rounded-lg m-2 transition-colors ${
          isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="p-6">
      <h1>My Work</h1>
      <div>
        <CustomButton
          onClick={() => setActiveTab("digitalArt")}
          isActive={activeTab === "digitalArt"}
        >
          Gallery 1
        </CustomButton>
        <CustomButton
          onClick={() => setActiveTab("threeDArt")}
          isActive={activeTab === "threeDArt"}
        >
          Gallery 2
        </CustomButton>
      </div>
      {activeTab === "gallery1" ? (
        <Gallery images={digitalArt} />
      ) : (
        <Gallery images={threeDArt} />
      )}
    </div>
  );
};

export default MyWorkPage;
