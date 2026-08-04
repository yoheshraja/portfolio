import React from 'react'
import styles from '../styles/Header.module.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <header>
                <nav>
                     <a href="/" className={styles.title}><h1>PORTFOLIO</h1></a>
                    <ul className={styles.unorderlist}>
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Skills">Skills</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Internship">Internship</Link>
                        <Link to="/Contact">Contact</Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
