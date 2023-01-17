import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Routers'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { UserProvider } from './context/UserContext'
import { IssuesProvider } from './context/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <IssuesProvider>
            <Routers />
          </IssuesProvider>
        </UserProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}