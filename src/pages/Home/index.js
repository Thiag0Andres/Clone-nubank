import React from "react";

// Components
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Tabs from "../../components/Tabs";

// Icons
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Trasferência de R$ 20,00 recebida de Diego Schell Fernandes
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
};

export default Home;
