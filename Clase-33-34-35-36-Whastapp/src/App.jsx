import { Route, Routes } from "react-router"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen"
import { useState } from "react"
import ContactContextProvider from "./Context/ContactContext"

function App() {


	/* 
	Si isDarkMode es verdadero el contactItem.jsx debe tener un color de letra rojo 
	(Acordate que podes transferir informacion entre componentes por medio de las props)
	*/
	return (
		<div>
			<Routes>
				{/* ContactContext config */}
				<Route element={<ContactContextProvider/>}>

					<Route
						path="/"
						element={
							<HomeScreen />
						}
					/>
					<Route
						path="/contact/:contact_id"
						element={
							<ContactDetailScreen />
						}
					/>
				</Route>
				<Route
					path="/contact"
					element={
						<ContactScreen />
					}
				/>

			</Routes>
		</div>
	)
}

export default App
