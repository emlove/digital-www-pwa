'use client';
import React, { useMemo } from 'react';

import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';

import { useArts } from '../../contexts/processedData';

import ArtCard from '../../components/ArtCard';
import Header from '../../components/Header';

function Page() {
  const arts = useArts();
  const sortedArts = useMemo(
    () => arts && Object.values(arts).toSorted((a, b) => a.title > b.title),
    [arts],
  );

  function renderArts() {
    if (!sortedArts) {
      return Array(12)
        .fill(null)
        .map((_, index) => (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
            <Skeleton variant="rectangular" width="100%" height={240} />
          </Grid>
        ));
    }
    return sortedArts.map((art) => <ArtCard key={art.id} art={art} />);
  }

  return (
    <>
      <Header>Art</Header>
      <Grid container spacing={2} padding={2}>
        {renderArts()}
      </Grid>
    </>
  );
}

export default Page;
