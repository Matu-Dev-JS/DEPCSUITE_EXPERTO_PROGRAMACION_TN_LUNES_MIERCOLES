import { Route, Routes } from "react-router"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen"
import { useState } from "react"

function App() {
   const [isDarkMode, setIsDarkMode] = useState(true)

  /* 
  Si isDarkMode es verdadero el contactItem.jsx debe tener un color de letra rojo 
  (Acordate que podes transferir informacion entre componentes por medio de las props)
  */
  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomeScreen isDarkMode={isDarkMode}/>
          } 
        />
        <Route 
          path="/contact"
          element={
            <ContactScreen/>
          }
        />
        <Route 
          path="/contact/:contact_id"
          element={
            <ContactDetailScreen/>
          }
        />

      </Routes>
    </div>
  )
}

export default App
