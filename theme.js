import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { orange } from '@material-ui/core/colors';

const getTheme = () => {

  const theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: "#8d6e63",
          light: "#be9c91",
          dark: "#5f4339",
        },
        secondary: {
          main: "#ffd740",
          light: "#ffff74",
          dark: "#c8a600",
        },
        common: {
          black: "#000",
          white: "#fff"
        },
        background: {
          paper: "#8d6e63",
          box: orange[200],
          default: "#8d6e63",
        },
        infoBoard: {
          main: "#001489",
          light: "#be9c91",
          dark: "#5f4339",
        },
      },
      typography: {
        fontSize: 12,
      },
    });
    return theme;
}


export default getTheme;