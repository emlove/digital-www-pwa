import { Event, EventTime } from '@digital-www-pwa/event-types';

/**
 * For multi-day all-day events, the API returns contiguous event times, one
 * for each day. This function merges contiguous event times, to show them
 * properly on the calendar
 */
export function getMergedEventTimes(feedEvent: Event) {
  return feedEvent.event_times.reduce(
    (collectedTimes: EventTime[], eventTime: EventTime) => {
      if (collectedTimes.length === 0) {
        // We always need to include the first event time
        return [eventTime];
      }

      // Check to see if any of the existing collected times are contiguous with
      // the new event time we're looking at. If so, modify the new event to include
      // both times
      const existingIndex = collectedTimes.findIndex(
        (collectedTime: EventTime, index: number) => {
          if (collectedTime.ending === eventTime.starting) {
            eventTime.starting = collectedTime.starting;
            return true;
          }
          if (collectedTime.starting === eventTime.ending) {
            eventTime.ending = collectedTime.ending;
            return true;
          }
          return false;
        }
      );
      // If we found an existing event, replace the old one and return the new
      // collection
      if (existingIndex >= 0) {
        collectedTimes[existingIndex] = eventTime;
        return collectedTimes;
      }

      // Otherwise, if the new event isn't contiguous with any existing events,
      // add it to the collected event times.
      return [...collectedTimes, eventTime];
    },
    []
  );
}

export const tidyAlphaSort = (a: any, b: any, propName: string) => {
  const sortA = a[propName]
    .trim()
    .replace(/^[Tt]he ?/i, '')
    .toUpperCase();
  const sortB = b[propName]
    .trim()
    .replace(/^[Tt]he ?/i, '')
    .toUpperCase();

  if (sortA < sortB) {
    return -1;
  }
  if (sortA > sortB) {
    return 1;
  }
  return 0;
};
