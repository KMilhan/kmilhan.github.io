import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavLink from "next/link";

export default function Header() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <NavLink href="./" style={{textDecoration: 'none'}}>
            <Typography variant="h6" component="div" color="white" sx={{flexGrow: 1}}>
              https://kmilhan.github.io
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
