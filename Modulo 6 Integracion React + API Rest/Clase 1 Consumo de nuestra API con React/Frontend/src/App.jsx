import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
      </Routes>
    </>
  )
}

export default App
