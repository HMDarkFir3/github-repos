import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;
