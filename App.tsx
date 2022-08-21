import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components/native";

import { Routes } from "@routes/index";

import { dark } from "@themes/dark";

export const App: FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Routes />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};
