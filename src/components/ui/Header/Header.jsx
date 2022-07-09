import { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderText,
  HeaderIcon,
  HeaderProgress,
} from "./Header.styled";

export const Header = () => {
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <HeaderContainer>
      <HeaderTitle>Titulo del formulario</HeaderTitle>
      <HeaderIcon src="/assets/clipboard-icon.svg" alt="Clipboard Icon" />
      <HeaderText>
        <span>
          <img src="/assets/clock-icon.svg" alt="Clock Icon" />
        </span>{" "}
        En menos de 5 minutos
      </HeaderText>
      <HeaderProgress value={timer} max={300} />
    </HeaderContainer>
  );
};
