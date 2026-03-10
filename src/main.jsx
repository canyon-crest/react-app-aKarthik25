import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/Nav.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name = "Java" description = "Common coding software and the #1 programming language." />
    <Card name = "Python" description = "Simpler coding software used for computer systems." />
    <Card name = "VS Code" description= "Software used for making this webapp using HTML, CSS, and jsx."/>
    <App />
    <Footer />
  </StrictMode>,
)
