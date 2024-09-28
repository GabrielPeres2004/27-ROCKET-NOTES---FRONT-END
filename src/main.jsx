import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { AuthProvider } from './hooks/auth'
import { Routes } from './Routes'

import theme from "./style/theme"
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/global'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>

    <GlobalStyles/>

    <AuthProvider>
      <Routes/>
    </AuthProvider>
    
    </ThemeProvider>
  </StrictMode>,
)
