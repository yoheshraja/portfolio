import React from 'react'
import styles from '../styles/Education.module.css'
function Education() {
  return (
    <>
    <section>
    <h1>Education</h1>
    <div className={styles.eduContainer}>
       <div className={styles.educard}>
      <p className={styles.eduTitle}>Bachelor of Science (B.Sc)</p>
      <p className={styles.institution}>St.Joseph's College (Autonomous)</p>
      <p className={styles.board}>Affiliated to Bharathidasan University</p>
      <p className={styles.duration}>2023-2026</p>
     </div>
     <div className={styles.educard}>
      <p className={styles.eduTitle}>Higher Secondary Certificate</p>
      <p className={styles.institution}>National College Higher Secondary School</p>
      <p className={styles.board}>State Board</p>
      <p className={styles.duration}>2022-2023</p>
     </div>
     <div className={styles.educard}>
      <p className={styles.eduTitle}>Secondary School Leaving Certificate</p>
      <p className={styles.institution}>Bishop Heber Higher Secondary School</p>
      <p className={styles.board}>State Board</p>
      <p className={styles.duration}>2020-2021</p>
     </div>
    </div>
    </section>
    </>
  )
}

export default Education
