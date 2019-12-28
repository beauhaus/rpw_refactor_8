import React, { useState } from 'react'
import moment from 'moment'
import CalNav from './calnav'
import { monthArrayMaker } from '../../utils/utils'
// import LockyWrapPanel from './lockywrappanel'


import calendarStyles from './calendar.module.scss';
import DaysGrid from './daysgrid';

const MonthCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))

    // const [selectedPreviewDisplayDay, setSelectedPreviewDisplayDay] = useState(moment().format('YYYY-MM-DD'))
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

        <div className={calendarStyles.container}>
            <CalNav
                decMonth={decrementMonth}
                incMonth={incrementMonth}
                selectedDate={selectedDate}
            />
            {/* <Panel previewDate={previewDate} /> */}

            {/* <LockyWrapPanel/> */}
            <DaysGrid
                daysArr={daysArr}
                selectedDate={selectedDate}
                dayClick={selectDay} />
        </div>
    )
}

export default MonthCalendar;
