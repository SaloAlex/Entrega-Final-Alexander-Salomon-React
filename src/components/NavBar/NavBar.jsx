import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
                <img src="https://i.pinimg.com/originals/36/d4/62/36d46285c8bc86c5f0d9238275887f88.png" alt="logo" width="100" />

            <Link to="/"><h1>BOOK STORE</h1></Link>
            <ul className="list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category/Terror">Terror</Link>
                </li>
                <li>
                    <Link to="/category/Comedia Romantica">Comedia Romantica</Link>
                </li>
                <li>
                    <Link to="/category/Historia">Historia</Link>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}


export default NavBar;