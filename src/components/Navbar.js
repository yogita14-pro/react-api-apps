import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <ul className="nav-items">
                <li>
                    <NavLink to="/" >
                    All </NavLink>
                    <span className="vr"></span>
                </li>
                <li>
                <NavLink to="tshirt">
                    TShirt </NavLink>
                    <span className="vr"></span>
                </li>
                <li>
                <NavLink to="joggers">
                    Joggers </NavLink>
                    <span className="vr"></span>
                </li>
                <li>
                <NavLink to="shirts">
                    Shirts </NavLink>
                    <span className="vr"></span>
                </li>
                <li>
                    Pants
                    <span className="vr"></span>
                </li>
                <li>
                    Cargo
                    <span className="vr"></span>
                </li>
                <li>
                    Jacket
                    <span className="vr"></span>
                </li>
            </ul>
        </nav>
    )
}