import React from 'react'
import useSiteMetadata from '../hooks/use-sitemetadata';

import Helmet from 'react-helmet';
/*Here is where we set our SEO */
//TODO: warnings (see readme)

import Header from './header'
import Footer from './footer'

/***** !!!! CSS RESET !!!! *****/
import '../styles/index.scss';

import layoutStyles from './layout.module.scss';

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <div className={layoutStyles.container}>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name={title} description={description} />
            </Helmet>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;