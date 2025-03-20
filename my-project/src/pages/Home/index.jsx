import React from 'react';
import styled from 'styled-components';
import HomeCarousel from '../../components/Carousel/HomeCarousel';
import CategorySection from '../../components/Categories/CategorySection';
import FeaturedProducts from '../../components/Featured/FeaturedProducts';

const HomeContainer = styled.div`
  padding: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeCarousel />
      <CategorySection />
      <FeaturedProducts />
    </HomeContainer>
  );
};

export default Home;