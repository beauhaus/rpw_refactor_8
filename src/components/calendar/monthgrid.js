import React from 'react'
import moment from 'moment'

import PrevMonthBuffer from './prevmonthbuffer'
import Days from './days'

import eventsDaysdisplay from '../../hooks/use-alleventsdaysdisplay'

import monthGridStyles from './monthgrid.module.scss';


const MonthGrid = ({ selectedDate, daysArr, dayClick }) => {
    // console.log("selectedMonth: monthGrid", "")
    const dayData = eventsDaysdisplay()
    console.log("DD: ", dayData)
    /********** Today-Highlight Check **********/
    const currentMonth = moment(selectedDate).format("M")
    const monthCheck = (currentMonth === currentMonth); // eslint-disable-line no-self-compare
    const firstDay = moment(selectedDate).startOf("month"); //String
    
    return (
        <div className={monthGridStyles.container}>
            <div className={monthGridStyles.smtwtfs}>
            <p>s</p>
            <p>m</p>
            <p>t</p>
            <p>w</p>
            <p>t</p>
            <p>f</p>
            <p>s</p>
            </div>
            <PrevMonthBuffer firstDay={firstDay} selectedDate={selectedDate} />
            {daysArr.map((item, idx) => {
                // console.log("IT: ", item.own.fullDate)
                let filteredDB = dayData.filter(evtItem => {
                    let hasEvt = evtItem.datesArr.indexOf(item.own.fullDate)
                    return hasEvt !== -1;
                })
                filteredDB.map(fdbitem => (
                    item.own.evtArr.push({ slug: fdbitem.slug, daytag: fdbitem.daytag })
                ))
                return (
                    <Days
                        key={idx}
                        ownData={item}
                        monthCheck={monthCheck}
                        dayClick={dayClick}
                    />
                )
            })}
        </div>
    )

}

export default MonthGrid;