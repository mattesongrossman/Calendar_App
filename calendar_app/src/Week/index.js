import React from 'react';
import Day from '../Day';

const Week = (props) => {
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
