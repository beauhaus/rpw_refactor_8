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
            <PrevMonthBuffer/>
            {/* <PrevMonthBuffer firstDay={firstDay} selectedDate={selectedDate} /> */}
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
            <button onClick={() => alert("You clicked!")}>9</button>
        </div>
    )

}

export default DaysGrid;