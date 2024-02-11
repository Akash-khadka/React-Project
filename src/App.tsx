import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { MantineProvider } from '@mantine/core'

function App() {

  return (

      <BrowserRouter>
        <MantineProvider>
        <AppRoutes/>
        </MantineProvider>
      </BrowserRouter>
  )
}

export default App
