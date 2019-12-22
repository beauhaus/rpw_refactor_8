import React from "react"
import moment from 'moment'

import calNavStyles from './calendarnav.module.scss';

const CalNav = ({ decMonth, incMonth, selectedDate }) => {
    // console.log("> calNavStyles", calNavStyles)
    return (
        <nav className={calNavStyles.nav}>
            <div className={calNavStyles.subContainer}>
                <button className={calNavStyles.calNavBtn} onClick={decMonth}>
                    &#x2039;
                </button>
                <h1>{moment(selectedDate).format("MMMM")}</h1>
                <button className={calNavStyles.calNavBtn} onClick={incMonth}>
                    &#x203A;
                </button>
            </div>
        </nav>
    )
}

export default CalNav;