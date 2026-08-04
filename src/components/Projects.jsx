import React from 'react'
import styles from '../styles/Projects.module.css'

function Projects() {
  return (
    <>
      <h2>Project</h2>
      <section>
        <div className={styles.projectcontain}>
        <div className={styles.projectcard}>
          <div className={styles.imageContainer}><img src="../assets/images/Grocery_Expiry_tracker.png" alt="Image not found  " /></div>
          <p className={styles.ProTitle}>Grocery Expiry Tracker</p>
          <p className={styles.ProDescription}>Built a Grocery Expiry Tracker using React, Node.js, Express.js, and MongoDB with automated email reminders before product expiry.</p>
          <p className={styles.TechStack}>React,Node.js,Express,MongoDB</p>
          <div className={styles.BtnGroup}>
            <button><a href="https://github.com/yoheshraja/grocery-tracker2" target='_blank'>GitHub</a></button>
            <button><a href="https://freshtrack-frontend.onrender.com/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
        <div className={styles.projectcard}>
          <div className={styles.imageContainer}><img src="../assets/images/techskribbl.png" alt="Image not found  " /></div>
          <p className={styles.ProTitle}>Tech Skribble</p>
          <p className={styles.ProDescription}>Team project: Built a real-time drawing-based technical quiz game using HTML, CSS, JavaScript, Node.js, and Socket.IO.</p>
          <p className={styles.TechStack}>React,Node.js,Express,Socket.Io</p>
          <div className={styles.BtnGroup}>
            <button><a href="#" target='_blank'>GitHub</a></button>
            <button><a href="https://technicalskribble-io.onrender.com/" target='_blank'>Live Demo</a></button>
          </div>
        </div>
</div>
      </section>
    </>
  )
}

export default Projects
