import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#db8cd7", // unlock button // should be same as title text
  primaryBright: "#8fcfdd", // hover for unlock
  primaryDark: "#8fcfdd",
  secondary: "#0000ff", // homepage title colour f00c93
  success: "#ececec",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#080808",  // menu drop backg
  backgroundDisabled: "#DED9E0",
  contrast: "#0000ff", // ???
  invertedContrast: "#0000ff",
  input: "#0000ff", // ??????
  tertiary: "#2D2A31", // hover menu main colour
  text: "#db8cd7", // title text
  textDisabled: "#cb3731",
  textSubtle: "#bfe7ff",  // menu text
  borderColor: "#E9EAEB",
  card: "rgb(13, 12, 13, 1)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#514949",
  background: "#cabdad",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#5b5151",
  primaryDark: "#0098A1",
  tertiary: "#ded3d3",
  text: "#000001",
  textDisabled: "#666171",
  textSubtle: "#2e2c33",
  borderColor: "#524B63",
  card: "#7f715f",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
