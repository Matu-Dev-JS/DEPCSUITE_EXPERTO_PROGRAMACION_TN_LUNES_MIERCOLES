import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'

export default function HomeScreen({isDarkMode}) {
  return (
    <div>
        <h1>Pantalla principal</h1>
        <ContactSidebar isDarkMode={isDarkMode}/>
    </div>
  )
}
