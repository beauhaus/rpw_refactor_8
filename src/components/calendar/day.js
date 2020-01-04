import React from 'react'
import moment from 'moment'

import dayStyles from './day.module.scss';

const DaysGrid = ({ ownData, monthCheck, dayClick }) => {
    const { fullDate, evtArr } = ownData.own;// this is data distinct for each day
   
    const presentDay = moment().format("YYYY-MM-DD")
    const formedDay = moment(fullDate).format("D")
   
    return (
        <div className={dayStyles.container}>
            <button className={monthCheck && fullDate === presentDay ? dayStyles.currentDate : dayStyles.calendarDay}
                onClick={() => {dayClick(fullDate)}}
                onKeyDown={() => dayClick(fullDate)}
                tabIndex={Number(formedDay)}
            >
                <div className={dayStyles.dayNumber}>{formedDay}</div>
                {evtArr.map((item, idx) => (
                    <p key={idx} className={dayStyles[`${item.stylecode}`]} >{item.slug}</p>
                ))}
            </button>
        </div>
    )

}

export default DaysGrid;
