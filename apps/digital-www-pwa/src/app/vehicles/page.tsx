'use client';
import React, { useMemo } from 'react';

import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';

import { useVehicles } from '../../contexts/processedData';

import VehicleCard from '../../components/VehicleCard';
import Header from '../../components/Header';

function Page() {
  const vehicles = useVehicles();
  const sortedVehicles = useMemo(
    () =>
      vehicles && Object.values(vehicles).toSorted((a, b) => a.title > b.title),
    [vehicles],
  );

  function renderVehicles() {
    if (!sortedVehicles) {
      return Array(12)
        .fill(null)
        .map((_, index) => (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
            <Skeleton variant="rectangular" width="100%" height={240} />
          </Grid>
        ));
    }
    return sortedVehicles.map((vehicle) => (
      <VehicleCard key={vehicle.id} vehicle={vehicle} />
    ));
  }

  return (
    <>
      <Header>Art Cars</Header>
      <Grid container spacing={2} padding={2}>
        {renderVehicles()}
      </Grid>
    </>
  );
}

export default Page;
