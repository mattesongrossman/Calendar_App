import React, { Component } from 'react';
import moment from 'moment';

class Day extends Component {
  render() {
    const splitDate = this.props.dayInfo.split('-');
    // console.log(splitDate); // index 2 to get just the date

    return (
      <div id={this.props.dayInfo} className="day">
        <h2>{splitDate[2]}</h2>
      </div>
    )
  }
}

export default Day;
