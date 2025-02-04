import React from 'react';

import Link from 'next/link';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';

import { MAX_DESCRIPTION_LENGTH } from '../const';

function RadioCard({ radio }) {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Card>
        <CardActionArea component={Link} href={`/radio/${radio.id}`}>
          <CardHeader
            title={radio.radio_dj_name}
            subheader={radio.radio_time.format('LT')}
          />
          <CardContent>
            <Typography variant="subtitle1">
              {radio.radio_description.length > MAX_DESCRIPTION_LENGTH
                ? `${radio.radio_description.substring(0, MAX_DESCRIPTION_LENGTH)}…`
                : radio.radio_description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default RadioCard;
