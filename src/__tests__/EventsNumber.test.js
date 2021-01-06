import React from "react";
import { shallow } from "enzyme";
import EventsNumber from "../EventsNumber";

describe("<EventsNumber /> component", () => {
  let EventsNumberWrapper;
  beforeAll(() => {
    EventsNumberWrapper = shallow(<EventsNumber updateEvents={() => {}} />);
  });

  test("render the EventsNumber component", () => {
    expect(EventsNumberWrapper).toHaveLength(1);
  });

  test("render the EventsNumber element", () => {
    expect(EventsNumberWrapper.find(".events-number")).toHaveLength(1);
  });

  test("render the EventsNumber label", () => {
    expect(EventsNumberWrapper.find(".events-number-label")).toHaveLength(1);
  });

  test("render EventsNumber text input", () => {
    expect(EventsNumberWrapper.find(".events-number-input")).toHaveLength(1);
  });

  test("renders EventsNumber text input correctly", () => {
    const numberOfEvents = EventsNumberWrapper.state("numberOfEvents");
    expect(EventsNumberWrapper.find(".events-number-input").prop("value")).toBe(
      numberOfEvents
    );
  });

  test("change state when EventsNumber text input changes", () => {
    EventsNumberWrapper.setState({ numberOfEvents: "32" });
    const eventObject = { target: { value: "10" } };
    EventsNumberWrapper.find(".events-number-input").simulate(
      "change",
      eventObject
    );
    expect(EventsNumberWrapper.state("numberOfEvents")).toBe("10");
  });
});
