'use client';
import lunr from 'lunr';
import type { ProcessedEventItem, Highlight } from '@digital-www-pwa/types';
import { useMemo } from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import EventIcon from '@mui/icons-material/Event';

import { HighlightedText } from './HighlightedText';

interface LunrPosition {
  0: number; // match start
  1: number; // match length
}

export function EventSearchResult({
  result,
  event,
}: {
  result: lunr.Index.Result;
  event: ProcessedEventItem;
}) {
  const titleHighlights = useMemo(
    () =>
      Object.values(result.matchData.metadata).reduce(
        (highlights: Highlight[], metadata) => {
          if (metadata.title) {
            metadata.title.position.forEach((pos: LunrPosition) => {
              highlights.push({
                start: pos[0],
                end: pos[0] + pos[1],
              });
            });
          }
          return highlights;
        },
        [],
      ),
    [result],
  );

  return (
    <>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <HighlightedText text={event.title} highlights={titleHighlights} />
        }
      />
    </>
  );
}
