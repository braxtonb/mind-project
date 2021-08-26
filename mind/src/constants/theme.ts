import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
export const THEME_OPTIONS = {
  palette: {
    primary: {
      main: '#63b3ed',
    },
    // secondary: {
    //   main: '#2E2E2E',
    // },
    // info: {
    //   main: '#423652',
    // },
    // warning: {
    //   main: '#939298',
    // },
    // logoDarkGray: {
    //   main: '#6d6e71',
    // },
  },
};
const theme = createMuiTheme(THEME_OPTIONS);

export default theme;
