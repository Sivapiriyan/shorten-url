import React from 'react'
import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ShortenURL } from './pages'

import { SnackbarProvider } from 'notistack'

function App() {
    return (
        <SnackbarProvider>
            <div className="App">
                <ShortenURL />
            </div>
        </SnackbarProvider>
    )
}

export default App
