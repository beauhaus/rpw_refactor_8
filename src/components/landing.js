import React from 'react';
import NavLink from './navlink';
// import rpwLogo from '../images/rpw-main-icon-300.jpg';
import landingStyles from './landing.module.scss';
import Calendar from './calendar/monthcalendar'
const Landing = () => (
    <main className={landingStyles.landingContainer}>
        <section className={landingStyles.landingContentContainer}>
            {/* <img src={rpwLogo} alt="recessplayworks logo" /> */}
            {/* <div className={landingStyles.textContainer}>
                <h1>PLACE</h1>
            </div> */}
                <Calendar/>
            <button className={landingStyles.joinBtn}>
                <NavLink to="/contact/" className="cta-join" textContent="Contact" />
            </button> 
        </section>
    </main>
)

export default Landing;

/* <div className={landingStyles.textContainer}>
<h2>It's time for Recess!</h2>
<p>Recess Playworks is going to be a unique place for modern families managing the work-life balance.</p>
<p>For the adults we will have a chic lounge, meeting rooms, a podcast room and phone rooms.</p>
<p>For the kids we will have classes including STEM, coding, chess, an all day art studio and a supervised free play zone.</p>
<p>Life gets busy and everyone needs a recess.</p>
<p>Come join our growing list of people who want to be the first to know all the details!</p>
</div> */