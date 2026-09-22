import React from 'react'
import styles from '../styles/Contact.module.css'
function Contact() {
  return (
    <>
    <h2 className='Heading'>Contact</h2>
    <section id='contact'>
      <div className={styles.centerCard}>
        <div className={styles.contactCard}>
      <h3>Email: <a href="mailto:ryoheshraja@gmail.com">ryoheshraja@gmail.com</a></h3>
      <h3>Phone:+917904043968</h3>
      <h3>Linkedin: <a href="https://www.linkedin.com/in/yoheshraja" target="_blank">https://www.linkedin.com/in/yoheshraja</a></h3>
      <h3>GitHub: <a href="https://github.com/yoheshraja" target="_blank">https://github.com/yoheshraja</a></h3>
      </div>
      </div>
      </section>
    </>
  )
}

export default Contact
