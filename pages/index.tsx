import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import NavLink from "next/link"
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{flexGrow: 1, pt: 8}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to Milhan Kim&apos;s personal website
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
              Hi, this is Milhan Kim, an owner of this website. Click the button below to get to know about myself.
            </Typography>
            <div><br/></div>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
              Also, I have an album for you to show my hobby astrophotography projects. Please enjoy!
            </Typography>
            <div><br/></div>
            <Typography align="center" color="text.secondary" component="p">
              contact: kimmilhan@gmail.com LinkedIn: <a href="https://milhan.kim/">https://milhan.kim/</a>
            </Typography>
          </Container>
          <Container maxWidth="sm">
            <NavLink href="./milhan" style={{textDecoration: 'none'}}>
              <Button fullWidth style={{margin: "50px auto auto auto"}} variant="contained">Who&apos;s Milhan</Button>
            </NavLink>
            <NavLink href="./Album" style={{textDecoration: 'none'}}>
              <Button fullWidth style={{margin: "50px auto auto auto"}} variant="contained">Go to astrophotoraphy
                album</Button>
            </NavLink>
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Box>
  );
}
