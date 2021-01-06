import React, { Component } from "react";

class EventsNumber extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({
      numberOfEvents: value,
    });
  };

  render() {
    return (
      <div className="events-number">
        <label className="events-number-label">Number of events: </label>
        <input
          type="number"
          className="events-number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
      </div>
    );
  }
}

export default EventsNumber;
