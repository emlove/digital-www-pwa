'use client';
import React, { useState, useMemo } from 'react';

import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';

import { useRadios } from '../../contexts/processedData';

import RadioCard from '../../components/RadioCard';
import Header from '../../components/Header';
import SelectDayTabBar from '../../components/SelectDayTabBar';

function Page() {
  const radios = useRadios();
  const sortedRadios = useMemo(
    () =>
      radios &&
      Object.values(radios).toSorted((a, b) => a.radio_time - b.radio_time),
    [radios],
  );

  const [selectedDay, setSelectedDay] = useState('Wednesday');

  function renderRadio(radio) {
    if (radio.radio_day !== selectedDay) {
      return null;
    }
    return <RadioCard key={radio.id} radio={radio} />;
  }

  function renderRadios() {
    if (!sortedRadios) {
      return Array(12)
        .fill(null)
        .map((_, index) => (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
            <Skeleton variant="rectangular" width="100%" height={240} />
          </Grid>
        ));
    }
    return sortedRadios.map(renderRadio);
  }

  return (
    <>
      <Header>Radio SGC</Header>
      <SelectDayTabBar
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <Grid container spacing={2} padding={2}>
        {renderRadios()}
      </Grid>
    </>
  );
}

export default Page;
