import React from 'react'
import moment from 'moment'

const PrevMonthBuffer = ({ selectedDate }) => {
    /* uncomment this */
    const firstDay = moment(selectedDate).startOf("month").format('d');

   
    // const firstDay = "5";  // DELETE THIS
    return (
        <span style={1 * firstDay ? { gridColumn: `${firstDay}` } : { display: 'none' }} />
    )
}
export default PrevMonthBuffer;