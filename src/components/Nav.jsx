import './Nav.css'
import Home from '../pages/Home.jsx'

function Nav ({ setPage }) {
    return (
        <header>
            <ul> 
                <li onClick = {() => setPage("home")}>Home</li>
                <li onClick = {() => setPage("about")}>About</li>
                <li onClick = {() => setPage("contact")}>Contact</li>
                </ul>

        </header>
    )
}
export default Nav 