'use client';
import React from 'react';

import { useRadio } from '../../../contexts/processedData';

import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import Header from '../../../components/Header';

function Page({ params }: { params: { id: string } }) {
  const radio = useRadio(params.id);
  return (
    <>
      <Header>{radio === null ? <Skeleton /> : radio.radio_dj_name}</Header>
      <Typography variant="h5">{radio.radio_time.format('dddd LT')}</Typography>
      <Typography variant="body1">
        {radio === null
          ? Array(4)
              .fill(null)
              .map((_, index) => <Skeleton key={index} />)
          : radio.radio_description}
      </Typography>
    </>
  );
}

export default Page;
