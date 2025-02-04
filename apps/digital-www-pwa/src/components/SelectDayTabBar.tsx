import React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { EVENT_DAYS } from '../const';

function SelectDayTabBar({ selectedDay, setSelectedDay, ...props }) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={selectedDay}
        onChange={(e, newValue) => setSelectedDay(newValue)}
        aria-label="Select day of week"
        variant="scrollable"
        allowScrollButtonsMobile
        {...props}
      >
        {EVENT_DAYS.map((day) => (
          <Tab key={day} label={day} value={day} />
        ))}
      </Tabs>
    </Box>
  );
}

export default SelectDayTabBar;
