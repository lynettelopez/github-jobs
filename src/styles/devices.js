const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

const devices = {
  mobile: `only screen and (min-width: ${breakpoints.mobile})`,
  tablet: `only screen and (min-width: ${breakpoints.tablet})`,
  laptop: `only screen and (min-width: ${breakpoints.laptop})`,
  desktop: `only screen and (min-width: ${breakpoints.desktop})`,
};

export default devices;
