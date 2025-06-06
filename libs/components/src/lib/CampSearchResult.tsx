'use client';
import lunr from 'lunr';
import type { CampItem, Highlight, LunrPosition } from '@digital-www-pwa/types';
import { useMemo } from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import FestivalIcon from '@mui/icons-material/Festival';

import { HighlightedText } from './HighlightedText';

export function CampSearchResult({
  result,
  camp,
}: {
  result: lunr.Index.Result;
  camp: CampItem;
}) {
  const nameHighlights = useMemo(
    () =>
      Object.values(result.matchData.metadata).reduce(
        (highlights: Highlight[], metadata) => {
          if (metadata.name) {
            metadata.name.position.forEach((pos: LunrPosition) => {
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
        <FestivalIcon />
      </ListItemIcon>
      <ListItemText
        primary={
          <HighlightedText text={camp.name} highlights={nameHighlights} />
        }
      />
    </>
  );
}
