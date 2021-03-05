import React from "react";

// Images
import logo from "../../../assets/icons/Nubank_Logo.png";

// Icons
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Top, Logo, Title } from "./styles";

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo}></Logo>
        <Title>Thiago</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
};

export default Header;
