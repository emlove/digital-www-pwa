'use client';

import dayjs from 'dayjs';

import { useFeedContext } from '@digital-www-pwa/feed-context';
import { AgendaView } from '@digital-www-pwa/page-agenda-view';
import { useMemo } from 'react';

export default function Page() {
  const feed = useFeedContext();
  const calendarEvents = useMemo(() => {
    return feed.coalesce.reduce((calendarEvents, feedEvent) => {
      const newEvents = feedEvent.event_times.map((eventTime) => ({
          id: eventTime.event_time_id,
          start: dayjs(eventTime.starting),
          end: dayjs(eventTime.ending),
          title: feedEvent.title,
        }
      ));
      return [...calendarEvents, ...newEvents];
    }, []);
  }, [feed]);

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Agenda
          </h1>
        </div>
      </header>
      <main>
        <AgendaView
           dates={[
            '2024-07-17',
            '2024-07-18',
            '2024-07-19',
            '2024-07-20',
            '2024-07-21',
          ]}
          events={calendarEvents}
        />
      </main>
    </>
  );
}
