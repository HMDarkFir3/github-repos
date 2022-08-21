import React, { FC } from "react";
import { Sun, Moon } from "phosphor-react-native";

import { useCustomTheme } from "../../hooks/useCustomTheme";

import {
  Container,
  ImageWrapper,
  Image,
  WelcomeWrapper,
  Welcome,
  Username,
  Button,
} from "./styles";

export const Header: FC = () => {
  const { theme, toggleTheme } = useCustomTheme();

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
      <Button activeOpacity={0.7} onPress={toggleTheme}>
        {theme.name === "dark" ? (
          <Sun color={theme.colors.title} size={48} weight="thin" />
        ) : (
          <Moon color={theme.colors.title} size={48} weight="thin" />
        )}
      </Button>
    </Container>
  );
};
