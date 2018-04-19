import React from 'react';
import Day from '../Day';

const Week = (props) => {
  // Map over each day of one week, and return a day component for each with the necessary info
  const days = props.weekInfo.map(day => {
    return <Day key={day} dayInfo={day} currentMonth={props.currentMonth} />
  })

  return (
    <div className="week">
      {days}
    </div>
  )
}

export default Week;
