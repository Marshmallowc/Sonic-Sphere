import React from 'react';
import { Card, Row, Col, Select, Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const ProductsContainer = styled.div`
  padding: 20px;
`;

const FilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const ProductCard = styled(Card)`
  .ant-card-cover img {
    height: 280px;
    object-fit: contain;
    padding: 20px;
  }

  .price {
    color: #ff4d4f;
    font-size: 20px;
    font-weight: bold;
    margin-top: 8px;
  }
`;

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'WH-1000XM5',
      image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/wh1000xm5/wh1000xm5_black_1.png',
      price: '2999',
      description: '新一代降噪旗舰',
      category: 'noise-cancelling'
    },
    // ... 更多产品数据
  ];

  return (
    <ProductsContainer>
      <FilterContainer>
        <Select
          defaultValue="all"
          style={{ width: 200 }}
          options={[
            { value: 'all', label: '全部产品' },
            { value: 'noise-cancelling', label: '降噪耳机' },
            { value: 'wireless', label: '真无线' },
            { value: 'sports', label: '运动耳机' }
          ]}
        />
        <Search
          placeholder="搜索产品"
          style={{ width: 300 }}
          allowClear
        />
      </FilterContainer>

      <ProductGrid>
        {products.map(product => (
          <ProductCard
            key={product.id}
            hoverable
            cover={<img alt={product.title} src={product.image} />}
          >
            <Card.Meta
              title={product.title}
              description={product.description}
            />
            <div className="price">¥{product.price}</div>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
};

export default Products;