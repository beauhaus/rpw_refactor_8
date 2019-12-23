import React, { useState } from 'react'
import moment from 'moment'
// import CalNav from './calendarScrap/calendarnav'
// import DayPrevPanel from './daypreview'
// import MonthGrid from './calendarScrap/monthgrid'
// import PrevPanel from "./prevpanel"
import { monthArrayMaker } from '../../utils/utils'
import Wrapper from './wrapper'


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
    // const aside = '<aside>aside</aside>'
    return (

        // <Locky enabled={false} className={calendarStyles.locky} >
            <div className={calendarStyles.container}>
                {/* <CalNav
                decMonth={decrementMonth}
                incMonth={incrementMonth}
                selectedDate={selectedDate}
            /> */}

                {/* <DayPrevPanel
                previewDate={previewDate}
            /> */}

                {/* <PrevPanel previewDate={previewDate}/> */}
                <Wrapper/>
                <DaysGrid/>
            
            {/* <MonthGrid
                daysArr={daysArr}
                selectedDate={selectedDate}
                dayClick={selectDay}
            /> */}

            </div>
        // </Locky>
    )

}

// const MonthCalendar =()=>(<Locky component={LockyComp}/>)

export default MonthCalendar;
