import React from 'react'
// import Locky from "react-locky";

// import Calendar from '../components/calendar/calendar'
import evtCalStyles from './evtcalendar.module.scss'
// import Header from '../components/header'

import LockyWrap from '../components/calendar/lockywrappanel'
import CalNav from '../components/calendar/calnav'

const EvtCalendar = () => {
    // console.log(Insta)
    return (
            <main className={evtCalStyles.container}>
               
                <button onClick={() => alert("You clicked!")}>click me</button>
                <CalNav/>
                <LockyWrap className={evtCalStyles.div2}/>
            </main>
    )
}

export default EvtCalendar;