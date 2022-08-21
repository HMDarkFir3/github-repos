import React, {
  useState,
  useEffect,
  createContext,
  FC,
  ReactNode,
} from "react";
import { Appearance } from "react-native";
import { ThemeProvider, DefaultTheme } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLLECTION_THEME } from "../storages";

import { light } from "@themes/light";
import { dark } from "@themes/dark";

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeContext = createContext({} as ThemeContextData);

export const CustomThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const colorScheme = Appearance.getColorScheme();

  async function loadTheme() {
    const themeLocal = await AsyncStorage.getItem(COLLECTION_THEME);

    if (themeLocal === null) {
      setTheme(colorScheme === "light" ? light : dark);
    } else {
      setTheme(themeLocal === "light" ? light : dark);
    }
  }

  async function toggleTheme() {
    if (theme.name === "light") {
      await AsyncStorage.setItem(COLLECTION_THEME, dark.name);

      setTheme(dark);
    } else {
      await AsyncStorage.setItem(COLLECTION_THEME, light.name);

      setTheme(light);
    }
  }

  useEffect(() => {
    loadTheme();
  }, [theme]);

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
