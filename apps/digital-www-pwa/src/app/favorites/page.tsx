'use client';
import React from 'react';

import EventsView from '../../components/EventsView';

function Page() {
  return <EventsView favoritesOnly={true} />;
}

export default Page;
