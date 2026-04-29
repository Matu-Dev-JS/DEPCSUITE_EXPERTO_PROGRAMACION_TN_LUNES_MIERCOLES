import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { AuthContextProvider } from './Context/AuthContext'
import AuthMiddleware from './Middlewares/AuthMiddleware'



function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthContextProvider/>} >
          <Route path='/' element={<LoginScreen/>}/>
          <Route element={<AuthMiddleware/>}>
            <Route path='/home' element={<HomeScreen/>}/>
            <Route path='/contact' element={<HomeScreen/>}/>
          </Route>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
