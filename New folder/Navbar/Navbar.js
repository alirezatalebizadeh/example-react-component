import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div className="nav-background">
            <div className='nav-container'>

                <header className='nav-header'>
                    <h1>
                        <a className='nav-logo' href="#">LogoName</a>
                    </h1>
                </header>

                <nav>
                    <ul className='nav-ul'>
                        <li><a className='nav-link' href="#">Home</a></li>
                        <li><a className='nav-link' href="#">News</a></li>
                        <li><a className='nav-link' href="#">Contact</a></li>
                        <li><a className='nav-link' href="#">About</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
