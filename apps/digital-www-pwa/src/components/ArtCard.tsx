import React from 'react';

import Link from 'next/link';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';

import { MAX_DESCRIPTION_LENGTH } from '../const';

function ArtCard({ art }) {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Card>
        <CardActionArea component={Link} href={`/art/${art.id}`}>
          <CardHeader title={art.title} subheader={art.artist} />
          <CardContent>
            <Typography variant="subtitle1">
              {art.description.length > MAX_DESCRIPTION_LENGTH
                ? `${art.description.substring(0, MAX_DESCRIPTION_LENGTH)}…`
                : art.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ArtCard;
