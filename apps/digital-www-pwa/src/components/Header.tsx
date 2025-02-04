import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Header({ children, button, ...props }) {
  return (
    <Stack direction="row">
      <Typography
        sx={{ typography: { sm: 'h1', xs: 'h3' }, flexGrow: 1 }}
        component="span"
        {...props}
      >
        {children}
      </Typography>
      <Stack justifyContent="center">{button}</Stack>
    </Stack>
  );
}

export default Header;
