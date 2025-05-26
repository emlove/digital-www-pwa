'use client';
import { CampCard, Header } from '@digital-www-pwa/components';
import { useCamps } from '@digital-www-pwa/providers';
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';
import { useMemo } from 'react';

function getSortName(name: string): string {
  return name.replace(/^The\s+/, '');
}

export function CampsPage() {
  const camps = useCamps();
  const sortedCamps = useMemo(
    () =>
      camps &&
      Object.values(camps).toSorted((a, b) =>
        getSortName(a.name).localeCompare(getSortName(b.name))
      ),
    [camps]
  );

  function renderCamps() {
    if (!sortedCamps) {
      return Array(12)
        .fill(null)
        .map((_, index) => (
          <Grid key={index} size={{ xxs: 12, md: 6, lg: 4 }}>
            <Skeleton variant="rectangular" width="100%" height={240} />
          </Grid>
        ));
    }
    return sortedCamps.map((camp) => <CampCard key={camp.id} camp={camp} />);
  }

  return (
    <>
      <Header>Camps</Header>
      <Grid container spacing={2} padding={2}>
        {renderCamps()}
      </Grid>
    </>
  );
}
