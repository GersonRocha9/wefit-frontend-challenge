import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes'
import { GlobalStyles } from './styles/globalStyles'
import { defaultTheme } from './styles/themes'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}
