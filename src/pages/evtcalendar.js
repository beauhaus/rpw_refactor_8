import React from 'react'
// import Locky from "react-locky";

// import Calendar from '../components/calendar/calendar'
import evtCalStyles from './evtcalendar.module.scss'
// import Header from '../components/header'

import LockyWrap from '../components/calendar/lockywrappanel'


const EvtCalendar = () => {
    // console.log(Insta)
    return (
            <main className={evtCalStyles.container}>
                {/* <Header/> */}
                {/* <Calendar/> */}
                <button onClick={() => alert("You clicked!")}>click me</button>

                <LockyWrap className={evtCalStyles.div2}/>
            </main>
    )
}

export default EvtCalendar;