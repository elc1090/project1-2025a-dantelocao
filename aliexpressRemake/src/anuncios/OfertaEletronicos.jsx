import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const carousels = [
  [
    { img: "/img/1.jpg", title: "Produto 1", price: "R$ 99,90" },
    { img: "/img/2.jpg", title: "Produto 2", price: "R$ 149,90" },
    { img: "/img/3.jpg", title: "Produto 3", price: "R$ 199,90" },
    { img: "/img/4.jpg", title: "Produto 4", price: "R$ 79,90" }
  ],
  [
    { img: "/img/5.jpg", title: "Produto 5", price: "R$ 129,90" },
    { img: "/img/6.jpg", title: "Produto 6", price: "R$ 189,90" },
    { img: "/img/7.jpg", title: "Produto 7", price: "R$ 219,90" },
    { img: "/img/8.jpg", title: "Produto 8", price: "R$ 89,90" }
  ],
  [
    { img: "/img/9.jpg", title: "Produto 9", price: "R$ 109,90" },
    { img: "/img/10.jpg", title: "Produto 10", price: "R$ 159,90" },
    { img: "/img/11.jpg", title: "Produto 11", price: "R$ 239,90" },
    { img: "/img/12.jpg", title: "Produto 12", price: "R$ 99,90" }
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
  slidesToShow: 3, // Exibe 3 imagens por vez
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />
};

const OfertaEletronicos = () => {
  return (
    <div className="flex justify-between items-center bg-green-600 text-white p-6 mx-auto max-w-7xl mt-20">
      {/* Texto e Botão à Esquerda */}
      <div className="w-1/2">
        <h2 className="text-2xl mt-4 font-bold">Oferta 1a compra!</h2>
        <p className="mt-4 text-lg">Aproveite descontos exclusivos por tempo limitado!</p>
        <button className="mt-6 bg-white text-red-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
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
                className="w-full h-48 object-cover rounded-md"  // Ajuste a altura aqui
              />
              <h3 className="text-center mt-2">{item.title}</h3>
              <p className="text-center text-red-600">{item.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OfertaEletronicos;
