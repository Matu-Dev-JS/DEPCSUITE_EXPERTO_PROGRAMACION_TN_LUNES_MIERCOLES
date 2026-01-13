import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'//IMPORTANTISIMO PARA QUE FUNCIONE
import ThemeContextProvider from './Contexts/themeContexts.jsx'
createRoot(document.getElementById('root')).render(
    /* Importante para poder usar el router */
    <BrowserRouter>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
    </BrowserRouter>
)
