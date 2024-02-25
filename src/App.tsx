import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import styled from "styled-components";

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

const App = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Header />
      <Wrapper>
        <Content> */}
          <Outlet />
        {/* </Content>
      </Wrapper> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
