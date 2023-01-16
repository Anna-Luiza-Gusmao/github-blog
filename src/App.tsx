import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Routers'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
          <Routers />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}