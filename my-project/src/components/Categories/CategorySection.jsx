import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

const StyledCard = styled(Card)`
  transition: all 0.3s;
  cursor: pointer;
  object-fit: contain;
  width: 210px;
  height: 210px;
  margin: 0;  // 移除卡片的外边距
  text-align: center;

  .ant-card-meta-title {
    text-align: center;  // 确保标题居中

  }
  
  .ant-card-meta {
    text-align: center;  // Meta容器也居中
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const CategorySection = () => {
  const categories = [
    {
      title: '开放式耳机系列',
      image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/index_img/new/banner/kaifang_182x182_1.jpg',
      link: '/products?category=over-ear'
    },
    {
      title: '真无线系列',
      image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/index_img/new/banner/zhenwuxian_182x182.jpg',
      link: '/products?category=tws'
    },
    {
      title: '降噪系列',
      image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/index_img/new/banner/jiangzao_182x182.jpg',
      link: '/products?category=nc'
    },
    {
      title: '运动系列',
      image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/index_img/new/banner/yundong_182x182.jpg',
      link: '/products?category=sport'
    },
    {
        title: '入门蓝牙系列',
        image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/index_img/new/banner/rumenglanya_182x182.jpg',
        link: '/products?category=beginner'
    },
    {
        title: '入门蓝牙系列',
        image: 'https://www.sonystyle.com.cn/content/dam/sonystyle/products/headphone/index_img/new/banner/zhongdiyin_182x182.jpg',
        link: '/products?category=superbass'
    }
  ];

  const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;  // 改为居中对齐
    gap: 5px;  // 减小间距到最小
  `;
  
  // 在返回的JSX中替换Row和Col
  return (
    <div style={{ padding: '40px 0' }}>
      <SectionTitle>产品分类</SectionTitle>
      <CategoryContainer>
        {categories.map((category, index) => (
          <Link to={category.link} key={index}>
            <StyledCard
              cover={<img alt={category.title} src={category.image} />}
            >
              <Card.Meta title={category.title} />
            </StyledCard>
          </Link>
        ))}
      </CategoryContainer>
    </div>
  );
};

export default CategorySection;