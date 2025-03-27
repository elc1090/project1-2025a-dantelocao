import React, { useState } from "react";

const images1 = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg"
  ];
  
  const images2 = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg"
  ];

  const images3 = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg"
  ];


const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[300px] mx-4">
      <img src={images[index]} alt="Oferta" className="w-full h-[350px] rounded-lg shadow-lg" />
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">
        ⬅
      </button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">
        ➡
      </button>
    </div>
  );
};

const OfertaDoDia = () => {
  return (
    <> 
      <h1 className='text-center mt-6 font-bold text-3xl'>Ofertas do dia</h1>
      <div className="bg-gray-100 p-4 mx-auto max-w-full shadow-lg text-center mt-6">
        <div className="flex justify-center items-center gap-6">
          <Carousel images={images1} />
          <Carousel images={images2} />
          <Carousel images={images3} />
        </div>
      </div>
    </>
  );
};

export default OfertaDoDia;
