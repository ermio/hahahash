import { ThemeProvider } from 'theme-ui'
import theme from '@carbonplan/theme'
import '../components/globals.css'
import '../components/fonts.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
