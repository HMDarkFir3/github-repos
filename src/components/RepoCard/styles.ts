import styled from "styled-components/native";

import { fonts } from "@themes/fonts";

export const Container = styled.View`
  width: 100%;

  padding: 24px;

  background-color: ${({ theme }) => theme.colors.header};
  border-radius: 12px;
`;

export const Title = styled.Text`
  font-family: ${fonts.bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Description = styled.Text`
  font-family: ${fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
`;

export const CreateAt = styled.Text`
  margin-top: 24px;

  font-family: ${fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RepoCardSeparator = styled.View`
  margin-bottom: 24px;
`;
