import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Navlink from './navlink';
import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
      const {title} = data.site.siteMetadata;
    return (
    <header className={headerStyles.header}>
      <label className={headerStyles.togglerLabel} htmlFor="toggler">
        <span></span>
      </label>
      <input className={headerStyles.toggler} id="toggler" type="checkbox" name="toggler" />
      <h1 id={headerStyles.logoTitle} className={headerStyles.title}>
        <Navlink to="/" textContent={title} />
      </h1>
    
      <nav className={headerStyles.topNav}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navListItem}>
            <Navlink activeClassName={headerStyles.activeNavItem} to="/" textContent="Home" />
          </li>
          <hr/>
          <li className={headerStyles.navListItem}>
            <Navlink activeClassName={headerStyles.activeNavItem} to="/photos" textContent="Photos" />
          </li>
          <hr/>
          <li className={headerStyles.navListItem}>
            <Navlink activeClassName={headerStyles.activeNavItem} to="/blog" textContent="Blog" />
          </li>
          <hr/>
          <li className={headerStyles.navListItem}>
            <Navlink activeClassName={headerStyles.activeNavItem} to="/contact" textContent="Contact" />
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header;