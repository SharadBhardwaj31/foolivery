import "./style.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>

<header>
        <nav>
            <div className="logo">
                <img src={logo} />

            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
     </header>
     </>
    );
};

export default Navbar;