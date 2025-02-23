import { describe, it, mock, before } from "node:test";
import { deepEqual } from "node:assert/strict";

import { filterPastEvents } from "./filterPastEvents.ts";

describe("filterPastEvents", () => {
  before(() => {
    mock.timers.enable({ apis: ["Date"] });
  });

  it("should filter past event", () => {
    const currentDate = new Date("2025-03-28T20:00:00+00:00").getTime();
    mock.timers.setTime(currentDate);

    const input = {
      datetime: {
        from: "2025-02-01T20:00:00+00:00",
        until: "2025-02-01T23:30:00+00:00",
      },
    };

    const actual = filterPastEvents(input);

    const expected = false;

    deepEqual(actual, expected);
  });

  it("should leave the agenda items if they are in the future", () => {
    const currentDate = new Date("2025-01-15T20:00:00+00:00").getTime();
    mock.timers.setTime(currentDate);

    const input = {
      datetime: {
        from: "2025-02-01T20:00:00+00:00",
        until: "2025-02-01T23:30:00+00:00",
      },
    };

    const actual = filterPastEvents(input);

    const expected = true;

    deepEqual(actual, expected);
  });

  it("should leave the agenda item in there for 5 days in the future", () => {
    const eventDate = new Date("2025-02-04T20:00:00+00:00").getTime();
    const twoDays = 2 * 24 * 60 * 60 * 1000;

    mock.timers.setTime(eventDate - twoDays);

    const input = {
      datetime: {
        from: "2025-02-01T20:00:00+00:00",
        until: "2025-02-01T23:30:00+00:00",
      },
    };

    const actual = filterPastEvents(input);

    const expected = true;

    deepEqual(actual, expected);
  });
});
