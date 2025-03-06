'use client';
import type { SearchIndexContextProps } from '@digital-www-pwa/types';
import lunr from 'lunr';
import { useState, useEffect, createContext, useContext } from 'react';

import { useEvents } from './ProcessedDataProvider';

const INITIAL_DATA: SearchIndexContextProps = {
  events: lunr(function () {}),
};

export const SearchIndexContext =
  createContext<SearchIndexContextProps>(INITIAL_DATA);

export function useEventsIndex(): lunr.Index {
  return useContext(SearchIndexContext).events;
}

export function SearchIndexProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const events = useEvents();
  const [searchIndex, setSearchIndex] = useState(INITIAL_DATA);

  useEffect(() => {
    if (events === null) {
      return;
    }
    setSearchIndex((previous) => ({
      ...previous,
      events: lunr(function () {
        this.ref('event_id');
        this.field('title');
        this.field('event_description');
        this.field('hosting_location');
        this.field('site_id');

        this.metadataWhitelist = ['position'];

        Object.values(events).forEach((event) => {
          this.add(event);
        });
      }),
    }));
  }, [events]);

  return (
    <SearchIndexContext.Provider value={searchIndex}>
      {children}
    </SearchIndexContext.Provider>
  );
}
