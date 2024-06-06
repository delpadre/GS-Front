import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarrosselPage.css'; // Importe o arquivo CSS para estilos personalizados

const CarrosselPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostra apenas um slide por vez
    slidesToScroll: 1, // Avança para o próximo slide de cada vez
    arrows: false, // Desabilita os controles de navegação padrão
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto relative"> {/* Centraliza o carrossel e permite posicionar as setas */}
      <Slider {...settings} className="slick-carousel">
        <div className="p-4">
          <div className="rounded-lg size">
            <img src="img/GS-titulo.jpeg" alt="" className="image" />
          </div>
        </div>
        <div className="p-4">
          <div className="rounded-lg size">
            <img src="img/Economia-GS.jpeg" alt="" className="image" />
          </div>
        </div>
        <div className="p-4">
          <div className="rounded-lg size">
            <img src="img/desafio.jpeg" alt="" className="image" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarrosselPage;
