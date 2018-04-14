import React, { Component } from 'react';
import moment from 'moment';
import Day from '../Day';

class Week extends Component {
  render() {
    const days = this.props.weekInfo.map(day => {
      return <Day key={day} dayInfo={day} />
    })

    return (
      <div className="week">
        {days}
      </div>
    )
  }
}

export default Week;
