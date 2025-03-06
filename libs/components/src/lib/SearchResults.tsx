'use client';
import lunr from 'lunr';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Skeleton from '@mui/material/Skeleton';
import { useEvents } from '@digital-www-pwa/providers';
import Link from 'next/link';

import { EventSearchResult } from './EventSearchResult';

export function SearchResults({
  eventResults,
  onClick,
}: {
  eventResults: lunr.Index.Result[];
  onClick: (e: any) => void;
}) {
  const events = useEvents();
  return (
    <MenuList>
      {eventResults.map((result) => {
        if (events === null) {
          return <Skeleton variant="rectangular" />;
        }
        const event = events[result.ref];
        return (
          <MenuItem
            key={result.ref}
            component={Link}
            href={`/events/${event.event_times[0].event_time_id}`}
            onClick={onClick}
          >
            <EventSearchResult result={result} event={event} />
          </MenuItem>
        );
      })}
    </MenuList>
  );
}
