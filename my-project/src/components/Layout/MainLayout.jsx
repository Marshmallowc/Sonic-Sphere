import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Navbar from '../Navigation/Navbar';

const { Header, Content, Footer } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0 50px;
  height: 64px;
  line-height: 64px;
`;

const StyledContent = styled(Content)`
  padding: 50px;
  min-height: 280px;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const MainLayout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <Navbar />
      </StyledHeader>
      <StyledContent>
        {children}
      </StyledContent>
      <StyledFooter>
        Sony Headphone ©{new Date().getFullYear()}
      </StyledFooter>
    </StyledLayout>
  );
};

export default MainLayout;