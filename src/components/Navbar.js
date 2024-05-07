import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">Logo</a>
            <div className="menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
