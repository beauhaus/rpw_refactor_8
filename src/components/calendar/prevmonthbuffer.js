import React from 'react'
import moment from 'moment'

const PrevMonthBuffer = ({ selectedDate }) => {
    // const firstDay = moment(selectedDate).startOf("month").format('d');

    //    deletethis
    const firstDay = "5";
    return (
        <span style={1 * firstDay ? { gridColumn: `${firstDay}` } : { display: 'none' }} />
    )
}
export default PrevMonthBuffer;