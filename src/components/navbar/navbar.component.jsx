import React from 'react'
import './navbar.styles.scss'
function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">Flair</div>
            <nav className="nav">
                <div className="nav-links">Paintings</div>
                <div className="nav-links">Musicians</div>
                <div className="nav-links">Dancers</div>
                <div className="nav-links">Crafts</div>
                <div className="nav-links">Designers</div>
                <div className="nav-links">Wall-Art</div>
            </nav>
            <div className="auth">
                <div className="sign-up">Sign Up</div>
                <div className="sign-up">Sign In</div>
            </div>
        </div>
    )
}

export default Navbar
