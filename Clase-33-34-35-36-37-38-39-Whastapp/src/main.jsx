import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ThemeContextProvider from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    /* Sin browser router no podemos utilizar el enrutador */
    <BrowserRouter>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </BrowserRouter>
)
