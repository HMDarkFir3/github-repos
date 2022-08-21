import React, { FC } from "react";
import { useTheme } from "styled-components/native";
import { Sun } from "phosphor-react-native";

import {
  Container,
  ImageWrapper,
  Image,
  WelcomeWrapper,
  Welcome,
  Username,
} from "./styles";

export const Header: FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ImageWrapper>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/65872394?u=50cf496de7b0909bb0fc7291c673f7df1f60dbb6&v=4",
          }}
        />

        <WelcomeWrapper>
          <Welcome>Olá,</Welcome>
          <Username>HMDarkFir3</Username>
        </WelcomeWrapper>
      </ImageWrapper>

      <Sun color={colors.title} size={48} />
    </Container>
  );
};
