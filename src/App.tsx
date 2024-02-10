import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalTheme } from './styles/globalStyles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />
      <h1>Hello word</h1>
    </ThemeProvider>
  )
}
