import React from 'react';

import Grid from '@mui/material/Grid2';
import Chip from '@mui/material/Chip';

import { TAGS } from '../const';

function EventTags({ event }) {
  if (!event) return null;

  return (
    <Grid container spacing={1}>
      {TAGS.map((tag) => {
        if (!event[tag.slug]) return null;
        const IconComponent = tag.icon;
        return (
          <Grid key={tag.slug}>
            <Chip icon={<IconComponent />} label={tag.name} color={tag.slug} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default EventTags;
