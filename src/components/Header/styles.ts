import styled from "styled-components/native";
import { Platform } from "react-native";

import { fonts } from "@themes/fonts";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${Platform.OS === "ios" ? "40px" : "60px"} 24px 24px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const ImageWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 92px;
  height: 92px;

  margin-right: 24px;

  border-radius: 50px;
  border: 3px solid ${({ theme }) => theme.colors.border};
`;

export const WelcomeWrapper = styled.View``;

export const Welcome = styled.Text`
  font-family: ${fonts.light};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Username = styled.Text`
  line-height: 24px;
  font-family: ${fonts.bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
`;
