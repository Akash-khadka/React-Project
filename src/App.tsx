import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/charts'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import store from './Store/store'

function App() {

  return (

    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider>
        <AppRoutes/>
        </MantineProvider>
      </BrowserRouter>
    </Provider>
      
  )
}

export default App
