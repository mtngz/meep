import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

describe("<Event />", () => {
  const event = {
    kind: "calendar#event",
    etag: '"3181161784712000"',
    id: "4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",
    status: "confirmed",
    htmlLink:
      "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:17:46.000Z",
    updated: "2020-05-27T12:01:32.356Z",
    summary: "Learn JavaScript",
    description:
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    location: "London, UK",
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true,
    },
    start: {
      dateTime: "2020-05-21T16:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    end: {
      dateTime: "2020-05-21T17:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
    originalStartTime: {
      dateTime: "2020-05-21T16:00:00+02:00",
      timeZone: "Europe/Berlin",
    },
    iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
    sequence: 0,
    reminders: {
      useDefault: true,
    },
  };

  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render the Event component", () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test("render the event element", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render the event overview", () => {
    expect(EventWrapper.find(".event-overview")).toHaveLength(1);
  });

  test("render content of event overview", () => {
    expect(EventWrapper.find(".event-overview").children()).toHaveLength(4);
  });

  test("render the event details", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".event-details")).toHaveLength(1);
  });

  test("render content of event details", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".event-details").children()).toHaveLength(3);
  });

  test("render details button", () => {
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });

  test("click on 'show details' to show event details", () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test("click on 'hide detials' to hide event details", () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  });
});
