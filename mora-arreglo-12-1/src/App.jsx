import React, { useState } from 'react'//si o si debe ir
import ContactSidebar from './Components/ContactSideBar/ContactSideBar'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import ContactContextProvider from './Contexts/ContactContext'
import ContactDetailContextProvider from './Contexts/ContactDetailContext'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    /* 
 Si isDarkMode es verdadero el contactItem.jsx debe tener un color de letra rojo 
 (Acordate que podes transferir informacion entre componentes por medio de las props)
 */

    <div>
      {/* Rutas de navegacion */}
      <Routes>
        {/* ContactContext config */}
        <Route element={<ContactContextProvider />}>

          <Route
            path="/" element={<HomeScreen />}></Route>
          <Route path='/contact/:contact_id'
            element={<ContactDetailContextProvider />}>
            <Route
              path='/contact/:contact_id'
              element={<ContactDetailScreen />}
            />
          </Route>
        </Route>
        <Route
          path='/contact'
          element={<ContactScreen />}
        />

      </Routes>

    </div>
  )
}

export default App
