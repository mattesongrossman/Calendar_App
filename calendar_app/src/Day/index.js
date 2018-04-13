import React, { Component } from 'react';
import moment from 'moment';

class Day extends Component {
  render() {
    console.log('this is dayinfo', this.props.dayInfo);
    return (
      <div className="day">
        <h2>{moment(this.props.dayInfo).format('DD')}</h2>
      </div>
    )
  }
}

export default Day;
