import React from 'react'
import styles from '../styles/Projects.module.css'
import projects from '../Project'

function Projects() {
  return (
    <>
      <h2>Project</h2>
      <section>
        <div className={styles.projectcontain}>
          {projects.map((project) => (
            <div className={styles.projectcard} key={project.id}>
              <div className={styles.imageContainer}>
                <img src={project.image} alt="Image not found" />
              </div>
              <h3 className={styles.ProTitle}>{project.title}</h3>
              <p className={styles.ProDescription}>{project.description}</p>
              <p className={styles.TechStack}>{project.stack}</p>
              <div className={styles.BtnGroup}>
                <a className={styles.btn} href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className={styles.btn} href={project.url} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects