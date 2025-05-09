import "./style.css";
import logo from "../../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} />
          </div>
          <div className={`menu ${!toggleMenu ? "" : "showMenu"}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="menuIcon">
            {toggleMenu ? (
              <X
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
            ) : (
              <Menu
                onClick={() => {
                  setToggleMenu(true);
                }}
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
