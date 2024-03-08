import Footer from '@components/Layout/Footer';
import Header from '@components/Layout/Header';
import ScrollToTop from '@components/ScrollToTop';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Content = styled.div`
  flex: 1;
`;

const HomeLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Wrapper>
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};

export default HomeLayout;
