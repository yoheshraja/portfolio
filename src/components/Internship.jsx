import React from 'react'
import styles from '../styles/Internship.module.css'
function Internship() {
    return (<>
                    <h2 className='Heading'>Internship</h2>
        <section>
            <p className={styles.companyTitle}>Company Name: Free Will Technologies</p>
            <p>Role: Frontend Developer</p>
            <p>Duration: may-June</p>   
            <h4>Stack:</h4>
            <ul className={styles.buildList}> 
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            <h4>what I build:</h4>
            <ul className={styles.buildList}>
                <li>Developed interactive web games, including Color Match and Card Match, using HTML, CSS, and JavaScript.</li>

                <li>Implemented game logic with timers, attempt tracking, scoring, and responsive user interactions.</li>

                <li>Designed responsive and user-friendly interfaces for game navigation and gameplay.</li>

                <li>Built user authentication modules with Registration and Login functionality.</li>

                <li>Developed a wallet system to manage user balances and game-related transactions.</li>

            </ul>
        </section></>
    )
}

export default Internship
