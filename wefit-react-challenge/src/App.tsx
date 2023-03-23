import { ThemeProvider } from 'styled-components'
import { MovieProvider } from './contexts'
import { AppRoutes } from './routes'
import { GlobalStyles } from './styles/globalStyles'
import { defaultTheme } from './styles/themes'

export const App = () => {
  return (
    <MovieProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </MovieProvider>
  )
}
