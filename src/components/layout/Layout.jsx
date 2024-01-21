import Header from "../header/Header";
import { ElementMain } from "./Layout.style";
import { LayoutContainer } from "./Layout.style";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ElementMain>
        <LayoutContainer>{children}</LayoutContainer>
      </ElementMain>
    </>
  );
};

export default Layout;
