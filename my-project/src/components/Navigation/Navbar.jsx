import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
`;

const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  background: #fff;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

const StyledMenu = styled(Menu)`
  min-width: 400px;
  background: #fff;
  border-bottom: none;
`;

const Navbar = () => {
  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to="/">首页</Link>,
    },
    {
      key: 'products',
      icon: <ShoppingOutlined />,
      label: <Link to="/products">产品</Link>,
    },
    {
      key: 'user',
      icon: <UserOutlined />,
      label: <Link to="/login">登录</Link>,
    },
  ];

  return (
    <NavContainer>
      <Logo to="/">SONY</Logo>
      <MenuContainer>
        <StyledMenu mode="horizontal" items={menuItems} />
      </MenuContainer>
    </NavContainer>
  );
};

export default Navbar;