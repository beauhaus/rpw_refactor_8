import React, { useState } from 'react'
import moment from 'moment'
import { monthArrayMaker } from '../utils/utils'

import PreviewPanel from '../components/calendar/calprevpanel'
import CalNav from '../components/calendar/calnav'
import DaysGrid from '../components/calendar/daysgrid'
import evtCalStyles from './evtcalendar.module.scss'

import rpwOrbBlue from '../../images/rpw-calendar-orb.png'

// import Header from '../components/header'



const EvtCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))

    const [previewDate, setPreviewDate] = useState(moment().format('YYYY-MM-DD'))

    const incrementMonth = () => {
        let addMonth = moment(selectedDate).add(1, 'month').format("YYYY-MM-DD");
        // console.log("INC!")
        return setSelectedDate(addMonth)
    }

    const decrementMonth = () => {
        // console.log("Dec!!")
        let subtractMonth = moment(selectedDate).subtract(1, 'month').format("YYYY-MM-DD");
        return setSelectedDate(subtractMonth)
    }
    const selectDay = (dateString) => {
        // console.log("selectDay Input:", dateString)
        return setPreviewDate(dateString)
    }

    /********************************************************/

    const daysArr = monthArrayMaker(selectedDate)

    return (
        <main className={evtCalStyles.container}>

    <div className={evtCalStyles.calContainer}> 
    <img className={evtCalStyles.rpwIcon} src={rpwOrbBlue} alt="rpw-icon-blue" />

            <CalNav
                decMonth={decrementMonth}
                incMonth={incrementMonth}
                selectedDate={selectedDate}
                />
            <DaysGrid
                daysArr={daysArr}
                selectedDate={selectedDate}
                dayClick={selectDay}
                />
            <PreviewPanel previewDate={previewDate}/>
            </div>
        </main>
    )
}

export default EvtCalendar;