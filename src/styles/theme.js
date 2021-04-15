const colors = {
  violet: "#5964E0",
  lightViolet: "#939BF4",
  darkBlue: "#19202D",
  midgnight: "#121721",
  white: "#FFFFFF",
  lightGrey: "#F4F6F8",
  grey: "#9DAEC2",
  darkGrey: "#6E8098",
};

const lightTheme = {
  background: {
    button: colors.violet,
    component: colors.white,
    checkBox: colors.darkBlue,
    filter: colors.darkGrey,
    page: colors.lightGrey,
  },
  text: {
    button: colors.violet,
    checkBox: colors.darkBlue,
    input: colors.darkBlue,
    headings: colors.darkBlue,
  },
};

const darkTheme = {
  background: {
    button: colors.white,
    component: colors.darkBlue,
    checkBox: colors.white,
    filter: colors.white,
    page: colors.midnight,
  },
  text: {
    button: colors.white,
    checkBox: colors.white,
    input: colors.white,
    headings: colors.white,
  },
};

export { colors, lightTheme, darkTheme };