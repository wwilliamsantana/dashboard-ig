import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalTheme } from './styles/globalStyles'

import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />
      <Transactions />
    </ThemeProvider>
  )
}
