import React from "react";
import { View, Text, ScrollView } from "react-native";

// Components
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Text></Text>
      <Tabs />
    </Container>
  );
};

export default Home;
