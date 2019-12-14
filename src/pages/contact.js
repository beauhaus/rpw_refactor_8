import React from 'react'
import useSiteMetadata from '../hooks/use-sitemetadata';

import ContactForm from '../components/form';
import Gmap from '../components/googlemap'

import Layout from '../components/layout'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    const { street, town, title } = useSiteMetadata();
  return (
    <Layout>
      <main className={contactStyles.contactContainer}>
        <section className={contactStyles.contactContentContainer}>
        <Gmap/>
        <ContactForm/> 
           <div className={contactStyles.addressLogoContainer}>
            <div className={contactStyles.address}>
              <p>{title}</p>
              <p>{street}</p>
              <p>{town}</p>
            </div>
            {/* <img src={srcWebp} alt="recessplayworks logo dark" /> */}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage;
