import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// import fbIcon from '../images/fb-icon-white.png';
// import instaIcon from '../images/insta-icon-white.png';

import footerStyles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          street
          town
        }
      }
    }
      `)
    const { street, town } = data.site.siteMetadata;
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.address}>
                <p>{street}</p>
                <p>{town}</p>
            </div>
            <div className={footerStyles.iconContainer}>
                <a href="https://www.facebook.com/recessct/?ref=br_rs" target="_blank" rel="noopener noreferrer">
                    {/* <img src={fbIcon} alt="facebook-link-icon" /> */}
                </a>
                <a href="https://www.instagram.com/recess_playworks/" target="_blank" rel="noopener noreferrer">
                    {/* <img src={instaIcon} alt="insta-link-icon" /> */}
                </a>
            </div>
        </footer>
    )
}

export default Footer;