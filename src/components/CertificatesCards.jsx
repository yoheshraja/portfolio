import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/CertificateCard.module.css'
function CertificatesCards({data}) {
  return (
    <div className={styles.certificatesCard}>
      <div className={styles.certificateImage}>
        <img src={data.image} alt="Image not found" />
      </div>
      <p className={styles.certiTitle}>{data.title}</p>
      <p>{data.type}</p>
      <p>{data.issued}</p>
      <p>{data.year}</p>
      <Link to={`/certificate/${data.id}`} className={styles.certificatePage}>view certificate</Link>
      
    </div>
  )
}

export default CertificatesCards
