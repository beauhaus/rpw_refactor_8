import React from 'react'
// import moment from 'moment'

import PrevMonthBuffer from './prevmonthbuffer'
// import Days from './days'

// import eventsDaysdisplay from '../../../hooks/use-alleventsdaysdisplay'

import daysGridStyles from './daysgrid.module.scss';


const DaysGrid = () => {

    return (
        <div className={daysGridStyles.container}>
            <div className={daysGridStyles.smtwtfs}>
                <p>s</p>
                <p>m</p>
                <p>t</p>
                <p>w</p>
                <p>t</p>
                <p>f</p>
                <p>s</p>
            </div>
            <PrevMonthBuffer />
            {/* <PrevMonthBuffer firstDay={firstDay} selectedDate={selectedDate} /> */}
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
            <div className={daysGridStyles.daycontainer}>
                <button onClick={() => alert("You clicked!")}>
                    <div>fd</div>
                    <p>*</p>
                </button>
            </div>
        </div>
    )

}

export default DaysGrid;