// import React from 'react';

import {  NavLink } from "react-router";
// import './Root/root'
import '../Root/Root.css'
const Header = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-center space-x-4">
    
            <NavLink  to="/">Home</NavLink>
            <NavLink  to="/mobiles">Mobiles</NavLink>
            <NavLink  to="/laptops">Laptops</NavLink>
            <NavLink  to="/about">About</NavLink>
            <NavLink  to="/users">Users</NavLink>

    </nav>
    );
};

export default Header;