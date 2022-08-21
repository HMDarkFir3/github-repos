import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React, { FC } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { CustomThemeProvider } from "./src/contexts/ThemeContext";

import { Routes } from "@routes/index";

const GITHUB_TOKEN = "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";

const appoloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export const App: FC = () => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <ApolloProvider client={appoloClient}>
      <CustomThemeProvider>
        <Routes />
      </CustomThemeProvider>
    </ApolloProvider>
  );
};
