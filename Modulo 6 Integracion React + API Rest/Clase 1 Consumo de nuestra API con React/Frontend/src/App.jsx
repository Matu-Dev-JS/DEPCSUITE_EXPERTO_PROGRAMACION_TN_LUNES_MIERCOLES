import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
      </Routes>
    </>
  )
}

export default App
