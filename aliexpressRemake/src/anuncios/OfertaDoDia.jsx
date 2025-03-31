import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const carousels = [
  {
    title: "Combo de ofertas",
    description: "Ofertas imperdíveis para gadgets e tecnologia.",
    items: [
      { img: "/img/1.jpg", title: "PC Gamer", price: "R$ 99,90" },
      { img: "/img/2.jpg", title: "Kit Gamer", price: "R$ 149,90" },
      { img: "/img/3.jpg", title: "Geladeira", price: "R$ 199,90" },
      { img: "/img/4.jpg", title: "Controle Xbox", price: "R$ 79,90" }
    ]
  },
  {
    title: "SuperOfertas",
    description: "Descontos especiais em SuperOfertas.",
    items: [
      { img: "/img/5.jpg", title: "Apple Watch", price: "R$ 129,90" },
      { img: "/img/6.jpg", title: "Controles PS4", price: "R$ 189,90" },
      { img: "/img/7.jpg", title: "Drone", price: "R$ 219,90" },
      { img: "/img/8.jpg", title: "Headset", price: "R$ 89,90" }
    ]
  },
  {
    title: "BigSave",
    description: "Economize seu dinheiro com o BigSave.",
    items: [
      { img: "/img/9.jpg", title: "Placa-mãe", price: "R$ 109,90" },
      { img: "/img/10.jpg", title: "Lava-louças", price: "R$ 159,90" },
      { img: "/img/11.jpg", title: "Geladeira Tech", price: "R$ 239,90" },
      { img: "/img/12.jpg", title: "Geladeira", price: "R$ 99,90" }
    ]
  }
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
      <div className="flex justify-center space-x-8 my-14">
        {carousels.map((carousel, index) => (
          <div key={index} className="w-105">
            <h2 className="text-center text-2xl font-bold mb-4">{carousel.title}</h2>
            <Slider {...settings}>
              {carousel.items.map((item, i) => (
                <div key={i} className="p-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="text-center mt-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <p className="text-center text-md mt-8">{carousel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfertaDoDia;
