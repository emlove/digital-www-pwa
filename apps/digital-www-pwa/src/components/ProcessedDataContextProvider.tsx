'use client';
import React, { useState, useEffect } from 'react';

import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { useFeedContext } from '@digital-www-pwa/feed-context';

import { INITIAL_DATA, ProcessedDataContext } from '../contexts/processedData';

import { EVENT_TIMEZONE } from '../const';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

dayjs.tz.setDefault(EVENT_TIMEZONE);

function ProcessedDataContextProvider({ children }) {
  const feed = useFeedContext();
  const [processedData, setProcessedData] = useState(INITIAL_DATA);

  useEffect(() => {
    // This can all go in a proper API route. Just mocked up here for the moment
    async function fetchDigitalWWW() {
      const res = await fetch('/digital-www.json');
      const data = await res.json();
      const { art: arts, camps, radio: radios, vehicles } = data;
      setProcessedData((lastState) => ({
        ...lastState,
        arts: Object.fromEntries(arts.map((art) => [art.id, art])),
        camps: Object.fromEntries(camps.map((camp) => [camp.id, camp])),
        radios: Object.fromEntries(
          radios.map((radio) => [
            radio.id,
            {
              ...radio,
              radio_time: dayjs(radio.radio_time).tz(EVENT_TIMEZONE, true),
            },
          ]),
        ),
        vehicles: Object.fromEntries(
          vehicles.map((vehicle) => [vehicle.id, vehicle]),
        ),
      }));
    }
    fetchDigitalWWW();
  }, []);

  useEffect(() => {
    if (!feed?.coalesce) {
      return;
    }

    const parsedEvents = feed.coalesce.map((event) => ({
      ...event,
      event_times: event.event_times.map((eventTime) => ({
        ...eventTime,
        starting: dayjs.tz(eventTime.starting, EVENT_TIMEZONE),
        ending: dayjs(eventTime.ending).tz(EVENT_TIMEZONE, true),
      })),
    }));
    const eventTimes = parsedEvents.reduce((collectedTimes, event) => {
      return [
        ...collectedTimes,
        ...event.event_times.map((eventTime) => ({
          ...eventTime,
          event,
        })),
      ];
    }, []);

    // Generate an object that maps from ID to object for quick lookups later
    const eventMap = Object.fromEntries(
      parsedEvents.map((event) => [event.event_id, event]),
    );
    const eventTimesMap = Object.fromEntries(
      eventTimes.map((eventTime) => [eventTime.event_time_id, eventTime]),
    );

    setProcessedData((previousState) => ({
      ...previousState,
      events: eventMap,
      eventTimes: eventTimesMap,
    }));
  }, [feed]);

  return (
    <ProcessedDataContext.Provider value={processedData}>
      {children}
    </ProcessedDataContext.Provider>
  );
}

export default ProcessedDataContextProvider;
