import logo from "../images/logo.png";
import menu from "../images/menu.png";
import "./navbar.css"

export default function Navbar() {
  return (
    <div className= "navbar">
      <img src={logo} alt="logo" />
      <img src={menu} alt="menu" />
    </div>
  );
}
