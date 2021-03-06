import React, { useState, } from 'react';
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import './calendar.scss'

const CalendarComp = () => {
    const [value, setValue] = useState(new Date())

    return (
        <div className="react-calendar">
            <Calendar onChange={setValue} value={value} />
        </div>
    )

}
export default CalendarComp;