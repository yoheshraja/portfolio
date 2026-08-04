import React from 'react'
import certificates from '../Certificates'
import CertificatesCards from './CertificatesCards'
import styles from '../styles/Certificate.module.css'
function Certificates() {
  return (
    <>
      <section>
        <h1>Certificates & Achievements</h1>
        <div className={styles.certificateContainer}>
          {certificates.map((certificate) => (
            <CertificatesCards key={certificate.id} data={certificate} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Certificates
