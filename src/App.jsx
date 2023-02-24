// import { useState } from 'react'
import './App.css'
import NavigationBar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'

function App() {
  axios.get('https://se4r56t7yg.onrender.com/api/getAll')
  .then(function (response) {
    // handle success
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
