'use client';
import React from 'react';

import { useCamp } from '../../../contexts/processedData';

import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import Header from '../../../components/Header';

function Page({ params }: { params: { id: string } }) {
  const camp = useCamp(params.id);
  return (
    <>
      <Header>{camp === null ? <Skeleton /> : camp.name}</Header>
      <Typography variant="h5">
        {camp === null ? (
          <Skeleton />
        ) : (
          `${camp.neighborhood} - Site ${camp.site}`
        )}
      </Typography>
      <Typography variant="body1">
        {camp === null
          ? Array(4)
              .fill(null)
              .map((_, index) => <Skeleton key={index} />)
          : camp.description}
      </Typography>
    </>
  );
}

export default Page;
