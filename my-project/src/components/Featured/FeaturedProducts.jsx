import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 0 20px;
`;

const ProductCard = styled(Card)`
  .ant-card-cover img {
    height: 280px;
    object-fit: contain;
    padding: 20px;
  }

  .ant-card-meta-title {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .price {
    color: #ff4d4f;
    font-size: 20px;
    font-weight: bold;
  }
`;

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: 'LinkBuds Open',
      image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/linkbuds_open/product/lbo_w3.jpg',
      price: '1499',
      description: '开放式真无线耳机'
    },
    {
      id: 2,
      title: 'WH-CH720N',
      image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/wh_ch720n/product/wh_ch720n_l_4.jpg',
      price: '899',
      description: '舒适高效头戴式降噪耳机'
    },
    {
      id: 3,
      title: 'INZONE H9',
      image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/inzone/h9/product/800x800_h9_7.jpg',
      price: '2299',
      description: '旗舰降噪无线电竞耳机'
    },  
  ];

  return (
    <div style={{ padding: '40px 0' }}>
      <SectionTitle>精选推荐</SectionTitle>
      <ProductsContainer>
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard
              hoverable
              cover={<img alt={product.title} src={product.image} />}
            >
              <Card.Meta
                title={product.title}
                description={product.description}
              />
              <div className="price">¥{product.price}</div>
            </ProductCard>
          </Link>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default FeaturedProducts;