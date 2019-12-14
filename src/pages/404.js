import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import fourohfourDog from '../../images/doglist/404-dog3.gif';
import fourOhFourStyles from './fourohfour.module.scss'
 
const NotFound= () => (
  <Layout>
    <main className={fourOhFourStyles.fourOhFourContainer}>
      <section className={fourOhFourStyles.fourOhFourContentContainer}>
        <h1>404</h1>
        <h2>NOT FOUND</h2>
        <img src={fourohfourDog} alt="dog" />
        <p>Well, this is awkward...</p>
        <p>You've arrived at a place that doesn't exist.</p>
        <p>If you think there is an issue, please don't hesitate to contact us and we'll get back to you!</p>
        <button className={fourOhFourStyles.fourOhFourBtn}>
          <Link to="/contact/">Contact</Link>
        </button>
        <button className={fourOhFourStyles.fourOhFourBtn}>
          <Link to="/">HOME</Link>
        </button>
      </section>
    </main>
  </Layout>
)

export default NotFound;