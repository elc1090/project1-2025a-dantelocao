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
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: <CustomPrevArrow />, 
  nextArrow: <CustomNextArrow />
};

const OfertaDoDia = () => {
  return (
    <div>
      {/* Seção "Ofertas Do Dia" */}
      <div className="bg-white text-white p-2 mx-auto max-w-full text-center my-8">
        <div className="items-center">
          <h1 className="text-black text-4xl font-bold">Ofertas Do Dia</h1>
        </div>
      </div>

      {/* Carrosséis */}
      <div className="flex justify-center space-x-4 my-8">
        {carousels.map((carousel, index) => (
          <div key={index} className="w-105"> {/* Definindo largura fixa para os carrosséis */}
            <h2 className="text-center text-2xl font-bold mb-4">Oferta {index + 1}</h2>
            <Slider {...settings}>
              {carousel.map((item, i) => (
                <div key={i} className="p-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md" // Definindo altura fixa e preservando a proporção
                  />
                  <div className="text-center mt-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <p className="text-center text-md mt-2">Descrição do Carrossel {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfertaDoDia;
