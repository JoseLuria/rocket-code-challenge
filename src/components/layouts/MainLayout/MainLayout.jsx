import { LayoutWrapper, LayoutContainer } from "./MainLayout.styled";
import Div100vh from "react-div-100vh";

export const MainLayout = ({ children }) => {
  return (
    <Div100vh>
      <LayoutWrapper>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutWrapper>
    </Div100vh>
  );
};
