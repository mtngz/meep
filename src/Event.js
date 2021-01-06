import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    const showDetails = this.state.showDetails;
    const { event } = this.props;

    return (
      <div className="event">
        <div className="event-overview">
          <h2 className="summary">{event.summary}</h2>
          <p className="start-time">{event.start.dateTime}</p>
          <p className="location">{event.location}</p>
          {!showDetails && (
            <button className="details-btn" onClick={this.handleShowDetails}>
              Show Details
            </button>
          )}
          {showDetails && (
            <button className="details-btn" onClick={this.handleShowDetails}>
              Hide Details
            </button>
          )}
        </div>
        {showDetails && (
          <div className="event-details">
            <p className="details-header">About this Event:</p>
            <p className="details-link">See details on Google Calendar</p>
            <p className="description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
