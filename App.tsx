import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React, { FC } from "react";

import { CustomThemeProvider } from "./src/contexts/ThemeContext";

import { Routes } from "@routes/index";

import { dark } from "@themes/dark";

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
    <CustomThemeProvider>
      <Routes />
    </CustomThemeProvider>
  );
};
