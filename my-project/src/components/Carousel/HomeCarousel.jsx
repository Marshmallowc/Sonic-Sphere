import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    text-align: center;
    height: 400px;
    line-height: 400px;
    background: #fff;
    overflow: hidden;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  // 添加焦点样式
  &:focus-visible {
    outline: none;
  }

  .slick-slide:focus-visible {
    outline: none;
  }
`;

const CarouselItem = styled.div`
  position: relative;
  height: 400px;
  display: flex !important;  // 添加 flex 布局
  align-items: center;      // 垂直居中
  justify-content: center;  // 水平居中
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const CarouselContent = styled.div`
  position: absolute;
  left: 50px;
  bottom: 50px;
  color: white;
  text-align: left;
`;

const HomeCarousel = () => {
  const carouselData = [
    {
      image: '/images/headphone1.jpg',
      title: 'WH-1000XM5',
      description: '新一代降噪旗舰'
    },
    {
      image: '/images/headphone2.jpg',
      title: 'WF-1000XM4',
      description: '真无线降噪耳机'
    },
    {
      image: '/images/headphone3.jpg',
      title: 'WH-1000XM4',
      description: '新一代降噪旗舰'
    },
    // 可以添加更多轮播项
  ];

  return (
    <StyledCarousel
      autoplay
      accessibility={true}
      autoplaySpeed={3000}
      pauseOnHover={true}
    >
      {carouselData.map((item, index) => (
        <CarouselItem key={index} tabIndex={0}>
          <StyledImage src={item.image} alt={item.title} />
          <CarouselContent>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </CarouselContent>
        </CarouselItem>
      ))}
    </StyledCarousel>
  );
};

export default HomeCarousel;