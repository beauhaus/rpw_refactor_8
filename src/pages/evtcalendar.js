import React, {useState} from 'react'
import moment from 'moment'
import { monthArrayMaker } from '../utils/utils'

import LockyWrap from '../components/calendar/lockywrappanel'
import CalNav from '../components/calendar/calnav'
import DaysGrid from '../components/calendar/daysgrid'


import evtCalStyles from './evtcalendar.module.scss'
// import Header from '../components/header'



const EvtCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))

    const [previewDate, setPreviewDate] = useState(moment().format('YYYY-MM-DD'))

    const incrementMonth = () => {
        let addMonth = moment(selectedDate).add(1, 'month').format("YYYY-MM-DD");
        return setSelectedDate(addMonth)
    }

    const decrementMonth = () => {
        let subtractMonth = moment(selectedDate).subtract(1, 'month').format("YYYY-MM-DD");
        return setSelectedDate(subtractMonth)
    }
    const selectDay = (dateString) => {
        console.log("selectDay Input:", dateString)
        return setPreviewDate(dateString)
    }

    /********************************************************/

    const daysArr = monthArrayMaker(selectedDate)
    
    return (
        <main className={evtCalStyles.container}>
            <CalNav 
            previewDate={previewDate}
            />
            <DaysGrid
            daysArr={daysArr}
            selectedDate={selectedDate}
            dayClick={selectDay} 
            />
            <button onClick={() => alert("You clicked!")}>click me</button>
            <LockyWrap className={evtCalStyles.div2} />
        </main>
    )
}

export default EvtCalendar;