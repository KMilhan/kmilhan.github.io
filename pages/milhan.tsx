import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NavLink from "next/link";
import Button from "@mui/material/Button";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import AdjustIcon from '@mui/icons-material/Adjust';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function someName() {
  return <>
    <Box sx={{flexGrow: 1}}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          About Milhan
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 2,
        }}
      >
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <Typography>
              <em>Personal Life</em>
            </Typography>
            <List
              sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  On his free time,
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <TwoWheelerIcon/>
                </ListItemIcon>
                <ListItemText primary="Go to the racing track"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AdjustIcon/>
                </ListItemIcon>
                <ListItemText primary="Stargazing and astrophography"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <PsychologyIcon/>
                </ListItemIcon>
                <ListItemText primary="Mindfulness"/>
              </ListItemButton>
              <Collapse timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon>
                      <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Starred"/>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            <List
              sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Everyday,
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <CoffeeIcon/>
                </ListItemIcon>
                <ListItemText primary="Enjoy a cup of coffee"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <FitnessCenterIcon/>
                </ListItemIcon>
                <ListItemText primary="Lifting and swimming"/>
              </ListItemButton>
              <Collapse timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon>
                      <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Starred"/>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Container>
        </Grid>
      </Box>


      {/*Professional life */}

      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <Typography>
              <em>Professional Life</em>
            </Typography>
            <List
              sx={{width: '100%', maxWidth: 1080, bgcolor: 'background.paper'}}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Senior Software Engineer
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <AdjustIcon/>
                </ListItemIcon>
                <ListItemText
                  primary="Senior Software Engineer, specialized in developing tools for software engineers"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AdjustIcon/>
                </ListItemIcon>
                <ListItemText
                  primary="Master's degree in computer science. Thesis on reducing the complexity of heterogeneously distributed computing system"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AdjustIcon/>
                </ListItemIcon>
                <ListItemText
                  primary="Experienced in manufacturing, e-commerce, internet messaging, and automotive industry"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AdjustIcon/>
                </ListItemIcon>
                <ListItemText primary="Have worked as individual contributor, tech lead, or manager"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AdjustIcon/>
                </ListItemIcon>
                <ListItemText primary="Love this job"/>
              </ListItemButton>
              <Collapse timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon>
                      <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Starred"/>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            <NavLink href="https://milhan.kim" style={{textDecoration: 'none'}}>
              <Button fullWidth style={{margin: "50px auto auto auto"}} variant="contained">View full resume at
                https://milhan.kim/</Button>
            </NavLink>
          </Container>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Container maxWidth="sm">

            <NavLink href="./" style={{textDecoration: 'none'}}>
              <Button fullWidth style={{margin: "50px auto auto auto"}} variant="contained">Go to home</Button>
            </NavLink>
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Box>
  </>
}
