import "styled-components";

import { dark } from "@themes/dark";

declare module "styled-components" {
  type ThemeType = typeof dark;

  interface DefaultTheme extends ThemeType {}
}
