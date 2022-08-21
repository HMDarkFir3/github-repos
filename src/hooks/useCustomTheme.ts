import { useContext } from "react";

import { CustomThemeContext } from "../contexts/ThemeContext";

export const useCustomTheme = () => {
  const content = useContext(CustomThemeContext);

  return content;
};
