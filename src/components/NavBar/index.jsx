import React from "react";

export const NavBar =() => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Fix And Buy</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#"> Fundas</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#"> Parlantes</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#"> Accesorios</a>
                        <li>
                        <a className="nav__link" href="#"> Carrito</a>
                    </li>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;