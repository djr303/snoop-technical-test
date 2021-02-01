import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  hotCoral: "#ff4f00",
  hotCoralMid: "#ff9e00",
  hotCoralLight: "#ffcab2",
  midnightBlue: "#231a4f",
  midnightBlueMid: "#736d8d",
  midnightBlueLight: "#ceccd8",
  capser: "#e4f1f5",
  casperMid: "#d6e5e9",
  casperLight: "#f4f9fb",
  white: "#ffffff",
  aquaMid: "#00e5f2",
  aqua: "#00dbeb",
  blueViolet: "#644cff",
  blueVioletMid: "#c898ff",
  blueVioletLight: "#d2cbff",
  red: "#e10505",
  green: "#1a8410",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "LabGrotesqueO-Regular",
      "Arial",
      "Helvetica",
      "sans-serif",
    ].join(","),
    button: {
      textTransform: "none",
      fontFamily: [
        "LabGrotesqueO-Bold",
        "Arial",
        "Helvetica",
        "sans-serif",
      ].join(","),
    },
  },
  palette: {
    primary: {
      main: colors.hotCoral,
      dark: colors.hotCoral,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.blueViolet,
    }
  },
  shape: {
    borderRadius: 30,
  },
});

export default theme;
