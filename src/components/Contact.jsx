import React from 'react'
import styles from '../styles/Contact.module.css'
function Contact() {
  return (
    <>
    <section>
    <h1 className={styles.contactTitle}>Contact</h1>
      <div className={styles.contactCard}>
      <h3>Email:ryoheshraja@gmail.com</h3>
      <h3>Phone:+917904043968</h3>
      <h3>Linkedin: <a href="https://www.linkedin.com/in/yoheshraja">https://www.linkedin.com/in/yoheshraja</a></h3>
      <h3>GitHub: <a href="https://github.com/yoheshraja">https://github.com/yoheshraja</a></h3>
      </div>
      </section>
    </>
  )
}

export default Contact
