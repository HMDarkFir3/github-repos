import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";

import { Header } from "@components/Header";

import { Container, Title } from "./styles";

export const Home: FC = () => {
  return (
    <Container>
      <StatusBar style="light" />
      <Header />
    </Container>
  );
};
