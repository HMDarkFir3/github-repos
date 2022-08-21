import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";

import { Routes } from "@routes/index";

export const App: FC = () => {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
};
