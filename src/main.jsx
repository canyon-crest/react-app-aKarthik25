import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/Nav.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />

  </StrictMode>,
)
