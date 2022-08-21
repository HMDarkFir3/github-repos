import styled from "styled-components/native";
import { Platform } from "react-native";

import { fonts } from "@themes/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${fonts.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.title};
`;
