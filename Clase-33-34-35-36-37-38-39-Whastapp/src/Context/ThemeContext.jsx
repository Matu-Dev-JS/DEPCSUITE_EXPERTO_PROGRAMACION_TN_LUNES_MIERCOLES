import { createContext, useState } from "react";

/* Crear el contexto */
export const ThemeContext = createContext()

function ThemeContextProvider ({children}){
    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <ThemeContext.Provider
            value={
                {
                    isDarkMode: isDarkMode
                }
            }
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider