import React, { FC } from "react";
import { Sun, Moon } from "phosphor-react-native";

import { UserDTO } from "../../dtos/UserDTO";

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

interface Props {
  data: UserDTO;
}

export const Header: FC<Props> = (props) => {
  const { avatarUrl, login } = props.data.viewer;

  const { theme, toggleTheme } = useCustomTheme();

  return (
    <Container>
      <ImageWrapper>
        <Image
          source={{
            uri: avatarUrl,
          }}
        />

        <WelcomeWrapper>
          <Welcome>Olá,</Welcome>
          <Username>{login}</Username>
        </WelcomeWrapper>
      </ImageWrapper>
      <Button activeOpacity={0.7} onPress={toggleTheme}>
        {theme.name === "dark" ? (
          <Sun color={theme.colors.title} size={48} weight="thin" />
        ) : (
          <Moon color={theme.colors.title} size={48} weight="fill" />
        )}
      </Button>
    </Container>
  );
};
