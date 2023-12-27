import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "@components/Header";
import Menu from "@components/Menu";
import Footer from "@components/Footer";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <OutletWrapper>
        <Menu />
        <Outlet />
      </OutletWrapper>
      <Footer />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const OutletWrapper = styled.section`
  flex-grow: 1;
  display: flex;
`;
