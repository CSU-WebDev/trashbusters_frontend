import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavigationBar from './components/Navbar'
import Main from './components/Main'

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Main />
    </div>
  )
}

export default App
