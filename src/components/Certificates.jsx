import React from 'react'
import certificates from '../Certificates'
import CertificatesCards from './CertificatesCards'
import styles from '../styles/Certificate.module.css'
function Certificates() {
  return (
    <>
    <h2 className='Heading'>Certificates & Achievements</h2>
      <section>
        
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
