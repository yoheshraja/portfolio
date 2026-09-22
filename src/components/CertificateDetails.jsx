import React from 'react'
import certificates from '../Certificates';
import { Link, useParams } from 'react-router-dom'
import styles from '../styles/CertificateDetails.module.css'

function CertificateDetails() {
    const { id } = useParams();
    const certificate = certificates.find(i => i.id == Number(id))

    if (!certificate) {
        return <h2>Certificate Not Found</h2>
    }

    return (
        <>
            <section className={styles.Details}>
                <h1>Title: {certificate.title}</h1>
                <div className={styles.Image}>
                    <img src={certificate.image} alt="Image Not Found" />
                </div>
                <h3>Type: {certificate.type}</h3>
                <p>Issued By: {certificate.issued}</p>
                <p>Year: {certificate.year}</p>
                <p>{certificate.description}</p>
                <Link to="/certificates" className={styles.backLink}>Back To Home</Link>
            </section>
        </>
    )
}

export default CertificateDetails