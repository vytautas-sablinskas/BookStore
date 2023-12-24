import React from 'react';
import { Link } from "react-router-dom";
import Paths from "../app_navigation/Paths";
import './Header.sass';
import logo from './logo.svg';
import { Cart24Regular, Navigation24Regular } from "@fluentui/react-icons";

function Header() : JSX.Element {
    return (
        <header className="app-header">
            <div className="logo-container">
                <Link to={Paths.Products}>
                    <img src={logo} className="logo" alt="logo" /> 
                </Link>
            </div>
            <div className="icons-container">
                <Link to={Paths.ShoppingCart} className="cart-icon">
                    <Cart24Regular />
                </Link>
                <span className="hamburger-icon">
                    <Navigation24Regular  />
                </span>
            </div>
        </header>
    );
}

export default Header;
