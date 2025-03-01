const fiveDays = 1000 * 60 * 60 * 24 * 5;
import type { Agenda } from "../types/agenda";

type Event = Agenda[number];

  /*
 * Filter past events if they are more than 5 days in the past compared to the current date.
 * @param {Event} event - The event to filter.
 *
 * @returns {boolean} - True if the event is more than 5 days in the future, false otherwise.
 */
export const filterPastEvents = (event: Event): boolean => {
  if (!event.date) {
    return true;
  }

  const date = new Date(event.date);

  return date.valueOf() > new Date().valueOf() - fiveDays;
};
