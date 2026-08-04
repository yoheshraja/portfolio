import React from 'react'
import styles from '../styles/Hero.module.css'
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <section className={styles.profileContain}>
        <div className={styles.profileDetails}>
          <h2 className={styles.name}>I'm YOHESH RAJA R</h2>
          {/* <h3>MERN Stack Developer</h3> */}
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
            ]}
            speed={15}
            cursor={false}
            repeat={4}
          />
          <p className={styles.intro}>I'm a MERN Stack Developer with a B.Sc. degree and a passion for building modern, responsive, and user-friendly web applications.  I enjoy learning new technologies, solving real-world problems, and creating efficient web solutions.</p>
          <button><a to="../assets/images/R.Yohesh_Raja_resume.pdf" download>Download Resume</a></button>
          <button>Contact Me</button>
        </div>
        <div className={styles.Animation}>
          <div className={styles.profileImage}>
            <img src="/assets/images/pro5.webp" alt="Image not found" />
          </div>
        </div>
      </section>
    </>
  )
}
// what i build  content for internship ,i use the html,css,js to develop the games for chitfund website ,games :color match game and card match game with timer and attempts,built interactive UI for displaying games,and create the register login pages, and create the wallet for that games,and create RD,RF calculation  (make the professional sentence for 6 li tag
export default Hero
