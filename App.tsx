import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Home } from "@screens/Home";

export const App: FC = () => {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
