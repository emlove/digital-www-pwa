'use client';
import React from 'react';

import { useVehicle } from '../../../contexts/processedData';

import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import Header from '../../../components/Header';

function Page({ params }: { params: { id: string } }) {
  const vehicle = useVehicle(params.id);
  return (
    <>
      <Header>{vehicle === null ? <Skeleton /> : vehicle.title}</Header>
      <Typography variant="body1">
        {vehicle === null
          ? Array(4)
              .fill(null)
              .map((_, index) => <Skeleton key={index} />)
          : vehicle.description}
      </Typography>
    </>
  );
}

export default Page;
