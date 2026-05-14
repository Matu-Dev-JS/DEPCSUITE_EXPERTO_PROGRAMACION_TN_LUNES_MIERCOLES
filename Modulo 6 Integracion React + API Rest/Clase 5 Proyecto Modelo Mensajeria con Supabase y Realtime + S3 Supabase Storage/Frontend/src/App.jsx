import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import AuthContextProvider from './Context/AuthContext'
import AuthMiddleware from './Middlewares/AuthMiddleware'
import WorkspaceContextProvider from './Context/WorkspaceContext'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import CreateWorkspaceScreen from './Screens/CreateWorkspaceScreen/CreateWorkspaceScreen'
import ChannelScreen from './Screens/ChannelScreen/ChannelScreen'
import GuestMiddleware from './Middlewares/GuestMiddleware'

function App() {


  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<GuestMiddleware />}>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/login' element={<LoginScreen />} />
        </Route>
        <Route element={<AuthMiddleware />}>
          <Route path='/home' element={
            <WorkspaceContextProvider>
              <HomeScreen />
            </WorkspaceContextProvider>
          } />
          <Route path='/create-workspace' element={<CreateWorkspaceScreen />} />
          <Route path='/workspace/:workspace_id' element={<ChannelScreen />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  )
}

export default App
