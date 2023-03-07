// import { useState } from 'react'
import './App.css'
import NavigationBar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'

function App() {
  axios.get('https://trashbusters-backend.onrender.com')
  .then(function (response) {
    console.log(response.data);
  })
  return (
    <div className="App">
      <NavigationBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
