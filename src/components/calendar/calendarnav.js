import React from "react"
import moment from 'moment'

import calNavStyles from './calendarnav.module.scss';

const CalNav = ({ decMonth, incMonth, selectedDate }) => {
    // console.log("> calNav", selectedDate)
    return (
        <nav className={calNavStyles.nav}>
            <div className={calNavStyles.subContainer}>
                <button className={`${calNavStyles.prevBtn} ${calNavStyles.calNavBtn}`} onClick={decMonth}>
                    <span className={calNavStyles.prev}></span>
                </button>
                <h1>{moment(selectedDate).format("MMMM")}</h1>
                <button className={`${calNavStyles.nextMonth} ${calNavStyles.calNavBtn}`} onClick={incMonth}>
                    <span className={calNavStyles.next}></span>
                </button>
            </div>
        </nav>
    )
}

export default CalNav;