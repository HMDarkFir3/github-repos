import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useQuery } from "@apollo/client";

import { UserDTO } from "../../dtos/UserDTO";
import { RepositoriesDTO, RepositoriesVars } from "../../dtos/RepositoriesDTO";
import { GET_USER } from "../../queries/User";
import { GET_REPOSITORIES } from "../../queries/Repositories";

import { useCustomTheme } from "../../hooks/useCustomTheme";

import { Header } from "@components/Header";
import { RepoCard, RepoCardSeparator } from "@components/RepoCard";

import { Container, LoadingContainer } from "./styles";

export const Home: FC = () => {
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery<UserDTO>(GET_USER);
  const {
    loading: repositoriesLoading,
    error: repositoriesError,
    data: repositoriesData,
  } = useQuery<RepositoriesDTO, RepositoriesVars>(GET_REPOSITORIES, {
    variables: { first: 8 },
  });
  const { theme } = useCustomTheme();

  if (userLoading || repositoriesLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator color={theme.colors.title} size="large" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <StatusBar style="light" />
      <Header data={userData} />

      <FlatList
        contentContainerStyle={{ padding: 24 }}
        data={repositoriesData.viewer.repositories.edges}
        keyExtractor={(item) => item.node.id}
        renderItem={({ item }) => <RepoCard data={item} />}
        ItemSeparatorComponent={() => <RepoCardSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
