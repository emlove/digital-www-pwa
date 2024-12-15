'use client';

import { useFeedContext } from '@digital-www-pwa/feed-context';

export default function Index() {
  const feed = useFeedContext();
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <ul>
            {feed.coalesce.map((event) => {
              return <li key={event.event_id}>{event.title}</li>;
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
