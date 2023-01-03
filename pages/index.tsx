import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Table from "../components/Table";
import NavLink from "next/link"

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <NavLink href="./linkSample">
              <Button fullWidth style={{margin: "50px auto auto auto"}} variant="contained">Go to test</Button>
            </NavLink>
            <NavLink href="./Album">
              <Button fullWidth style={{margin: "50px auto auto auto"}} variant="contained">Go to astrophotoraphy
                album</Button>
            </NavLink>
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>

          <Table/>
        </Grid>
      </Grid>
    </Box>
  );
}
