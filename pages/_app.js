import '../styles/index.css'
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={getTheme()}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
