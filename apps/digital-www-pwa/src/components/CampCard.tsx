import React from 'react';

import Link from 'next/link';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';

import { MAX_DESCRIPTION_LENGTH } from '../const';

function CampCard({ camp }) {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Card>
        <CardActionArea component={Link} href={`/camps/${camp.id}`}>
          <CardHeader
            title={camp.name}
            subheader={`${camp.neighborhood} - Site ${camp.site}`}
          />
          <CardContent>
            <Typography variant="subtitle1">
              {camp.description.length > MAX_DESCRIPTION_LENGTH
                ? `${camp.description.substring(0, MAX_DESCRIPTION_LENGTH)}…`
                : camp.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CampCard;
