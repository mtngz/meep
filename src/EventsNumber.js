import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

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
    if (value < 1 || value > 32) {
      this.setState({
        infoText: "Please choose a nunber between 1 and 32.",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div className="events-number">
        <ErrorAlert text={this.state.infoText} />
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
