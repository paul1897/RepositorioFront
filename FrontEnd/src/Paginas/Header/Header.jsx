import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLock,
  faShoppingBag,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import { Link, NavLink, useNavigate } from "react-router-dom";

import {useRef} from "react";

const Header = () => {
    return (
        <header>
        <div className="logo">
  
            <img src="./logo.avif" alt="Logo" />
        </div>
        <nav className="nav-center">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/acerca-de">Acerca de</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    
            <li><a href="">Iniciar Sesion</a></li>

    
    </header>
    );
};

export default Header;
  