import { GlobalStyles, defaultTheme } from './styles'

import { ThemeProvider } from 'styled-components'
import { MovieProvider } from './contexts'
import { AppRoutes } from './routes'

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
