import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const carousels = [
  [
    { img: "/img/1.jpg", title: "PC Gamer", price: "R$ 99,90" },
    { img: "/img/2.jpg", title: "Kit Gamer", price: "R$ 149,90" },
    { img: "/img/3.jpg", title: "Geladeira", price: "R$ 199,90" },
    { img: "/img/4.jpg", title: "Controle Xbox", price: "R$ 79,90" }
  ]
];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-md cursor-pointer z-10"
      onClick={onClick}
      style={{ backgroundColor: 'rgba(156, 163, 175, 0.5)' }}
    >
      <FaChevronLeft className="text-white text-xl" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-md cursor-pointer z-10"
      onClick={onClick}
      style={{ backgroundColor: 'rgba(156, 163, 175, 0.5)' }}
    >
      <FaChevronRight className="text-white text-xl" />
    </div>
  );
};

// Configurações do Slick Carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />
};

const OfertaEletronicos = () => {
  return (
    <div className="flex justify-between items-center bg-green-500 text-white p-6 mx-auto max-w-7xl mt-20">
      {/* Texto e Botão à Esquerda */}
      <div className="w-1/2">
        <h2 className="text-2xl mt-4 font-bold">Oferta 1a compra!</h2>
        <p className="mt-4 text-lg">Aproveite descontos exclusivos por tempo limitado!</p>
        <button className="mt-6 bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
          Ver Oferta
        </button>
      </div>

      {/* Carrossel à Direita */}
      <div className="w-1/2">
        <Slider {...settings}>
          {carousels[0].map((item, index) => (
            <div key={index} className="p-4">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-48 object-cover rounded-lg"  // Ajuste a altura aqui
              />
              <h3 className="text-center mt-2">{item.title}</h3>
              <p className="text-center text-black">{item.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OfertaEletronicos;
