import React from 'react'
import Calendar from '../components/calendar/calendar'
import evtCalStyles from './evtcalendar.module.scss'
import Header from '../components/header'

const EvtCalendar = () => {
    // console.log(Insta)
    return (
            <main className={evtCalStyles.container}>
                <Header/>

                <Calendar/>
                
            </main>
    )
}

export default EvtCalendar;