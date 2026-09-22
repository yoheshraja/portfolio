import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import { NavLink } from 'react-router-dom'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    // this function decides the class name for each link
    const linkClass = ({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink

    return (
        <div>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <a href="/" className={styles.title}><h1>PORTFOLIO</h1></a>

                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={menuOpen ? styles.barOpen1 : styles.bar}></span>
                        <span className={menuOpen ? styles.barOpen2 : styles.bar}></span>
                        <span className={menuOpen ? styles.barOpen3 : styles.bar}></span>
                    </button>

                    <ul className={`${styles.unorderlist} ${menuOpen ? styles.showMenu : ''}`}>
                        <li><NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/About" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink></li>
                        <li><NavLink to="/Skills" className={linkClass} onClick={() => setMenuOpen(false)}>Skills</NavLink></li>
                        <li><NavLink to="/Projects" className={linkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
                        <li><NavLink to="/Internship" className={linkClass} onClick={() => setMenuOpen(false)}>Internship</NavLink></li>
                        <li><NavLink to="/Education" className={linkClass} onClick={() => setMenuOpen(false)}>Education</NavLink></li>
                        <li><NavLink to="/Certificates" className={linkClass} onClick={() => setMenuOpen(false)}>Certificate</NavLink></li>
                        <li><NavLink to="/Contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                    </ul>
                </nav>

                <div
                    className={`${styles.overlay} ${menuOpen ? styles.showOverlay : ''}`}
                    onClick={() => setMenuOpen(false)}
                ></div>
            </header>
        </div>
    )
}

export default Header