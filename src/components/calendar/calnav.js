import React from "react"
import moment from 'moment'

import calNavStyles from './calnav.module.scss';

const CalNav = ({ decMonth, incMonth, selectedDate }) => {
    // console.log("> calNavStyles", calNavStyles)
    return (
        <nav className={calNavStyles.nav}>
            {/* <div className={calNavStyles.subContainer}> */}
                <button className={calNavStyles.calNavBtn} onClick={decMonth}>
                    <span>&#x2039;</span>
                </button>
                {/* <h1>{moment(selectedDate).format("MMMM")}</h1> */}
                <h1>December</h1>
                <button className={calNavStyles.calNavBtn} onClick={incMonth}>
                    <span>&#x203A;</span>
                </button>
            {/* </div> */}
        </nav>
    )
}

export default CalNav;