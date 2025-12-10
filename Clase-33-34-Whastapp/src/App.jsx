import { Route, Routes } from "react-router"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen"

function App() {

  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomeScreen/>
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
