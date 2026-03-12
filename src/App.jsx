import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


function App() {
  const [page, setPage] = useState("home");

  return (
  <>
    <Nav setPage = {setPage} />
    {page == "home" && <Home/>}
    {page == "about" && <About/>}
    {page == "contact" && <Contact/>}
  </>

  
  )
  
}

export default App
