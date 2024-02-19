import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import NavLink from "next/link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © Milhan Kim, Soojeong Lim '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createPhoto(
  file: string,
  code: string,
  alternative_name: string,
  explanation: string,
  time_took: string,
) {
  return {file: file, code: code, alternative_name: alternative_name, explanation: explanation, time_took: time_took};
}

const photos = [
  createPhoto('./IC1805_edited.jpg', "IC1805", "Heart Nebula", "An emission nebula, 7500 light years away from Earth and located in the Perseus Arm of the Galaxy in the constellation Cassiopeia.", "2024-02-17"),
  createPhoto('./M82_edited.jpg', "M82", "Cigar Galaxy, Starburst Galaxy", "A starburst galaxy approximately 12 million light-years away in the constellation Ursa Major. It is the second-largest member of the M81 Group", "2024-02-17"),
  createPhoto('./ic1848-2024.jpg', "IC1848", "Soul Nebula", "An emission nebula located in Cassiopeia. Several small open clusters are embedded in the nebula", "2024-02-17"),
  createPhoto('./MergeMosaic_NGC2237.jpg', "NGC2237", "Rosette Nebula", "A giant molecular cloud in the Monoceros region of the Milky Way Galaxy.", "2024-01-05"),
  createPhoto('./m81.png', "M81", "Bode's Galaxy", "A grand design spiral galaxy about 12 million light-years away in the constellation Ursa Major.", "2023-12-26"),
  createPhoto('./m1-2024.png', "M1", "Crab Nebula", "Supernova remnant and pulsar wind nebula in the constellation of Taurus", "2023-12-26"),
  createPhoto('./m42-2023-11-04.jpg', "M42", "The Great Orion Nebula", "The Orion Nebula (also known as Messier 42, M42, or NGC 1976) is a diffuse nebula situated in the Milky Way, being south of Orion's Belt in the constellation of Orion, and is known as the middle \"star\" in the \"sword\" of Orion. It is one of the brightest nebulae and is visible to the naked eye in the night sky with apparent magnitude 4.0. It is 1,344 ± 20 light-years (412.1 ± 6.1 pc) away and is the closest region of massive star formation to Earth.", "2023-11-04"),
  createPhoto('./ngc891.jpg', "NGC891", "NGC891 looks as the Milky Way", "NGC 891 (also known as Caldwell 23, the Silver Sliver Galaxy, and the Outer Limits Galaxy) is an edge-on unbarred spiral galaxy about 30 million light-years away in the constellation Andromeda.", "2023-11-04"),
  createPhoto('./m33.jpg', "M33", "The Triangulum Galaxy", "The Triangulum Galaxy is a spiral galaxy 2.73 million light-years (ly) from Earth in the constellation Triangulum.", "2023-11-04"),
  createPhoto('./horsehead_flame.jpg', "IC434,NGC2023,NGC2024", "Horsehead Nebula, Flame Nebula, and NGC2023", "The Horsehead Nebula is a small dark nebula in the constellation Orion. The Flame Nebula, designated as NGC 2024 and Sh2-277, is an emission nebula in the constellation Orion. NGC 2023 is an emission and reflection nebula in the equatorial constellation of Orion.", "2023-10-14"),
  createPhoto('./veil_mosaic.png', "NGC6992", "(Mosaic) Veil Nebula", "The Veil Nebula is a cloud of heated and ionized gas and dust in the constellation Cygnus.", "2023-08-26"),
  createPhoto('./veil.png', "NGC6992", "Veil Nebula", "The Veil Nebula is a cloud of heated and ionized gas and dust in the constellation Cygnus.", "2023-08-20"),
  createPhoto('./helix.jpg', "NGC7293", "Helix Nebula", "The Helix Nebula (also known as NGC 7293 or Caldwell 63) is a planetary nebula (PN) located in the constellation Aquarius.", "2023-09-13"),
  createPhoto('./dumbell.jpg', "M27", "Dumbbell Nebula", "The Dumbbell Nebula (also known as the Apple Core Nebula, Messier 27, and NGC 6853) is a planetary nebula (nebulosity surrounding a white dwarf) in the constellation Vulpecula, at a distance of about 1360 light-years.", "2023-08-20"),
  createPhoto('./m16.png', "M16", "Eagle Nebula, Pillars of Creation", "The Eagle Nebula (catalogued as Messier 16 or M16, and as NGC 6611, and also known as the Star Queen Nebula) is a young open cluster of stars in the constellation Serpens, discovered by Jean-Philippe de Cheseaux in 1745–46. Both the \"Eagle\" and the \"Star Queen\" refer to visual impressions of the dark silhouette near the center of the nebula, an area made famous as the \"Pillars of Creation\" imaged by the Hubble Space Telescope. Pillars of Creation is a photograph taken by the Hubble Space Telescope of elephant trunks of interstellar gas and dust in the Eagle Nebula, in the Serpens constellation, some 6,500–7,000 light-years (2,000–2,100 pc; 61–66 Em) from Earth.", "2023-01-02"),
  createPhoto('./ngc2244.jpg', "NGC2244", "Rosette Nebula", "The Rosette Nebula (also known as Caldwell 49) is an H II region located near one end of a giant molecular cloud in the Monoceros region of the Milky Way Galaxy. The open cluster NGC 2244 (Caldwell 50) is closely associated with the nebulosity, the stars of the cluster having been formed from the nebula's matter.", "2023-01-02"),
  createPhoto('./m42_pixinsight.png', "M42, Sh2-279", "The Great Orion Nebula and The Running Man Nebula", "One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects.", "2023-01-21"),
  createPhoto('./m51_edge.png', "M51", "Whirlpool Galaxy", "Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus", "2023-05-17"),
  createPhoto('./IMG_2027.jpg', "Vega", "α Lyr", "Vega is the brightest star in the northern constellation of Lyra", "2023-05-02"),
  // createPhoto('./m51_stacked_c8_3.png', "M51", "Whirlpool Galaxy", "Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus", "2023-04-28"),
  createPhoto('./m51.png', "M51", "Whirlpool Galaxy", "Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus", "2023-04-09"),
  createPhoto('./M42-orion-2023-01-21.png', "M42, Sh2-279", "The Great Orion Nebula and The Running Man Nebula", "One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects.", "2023-01-21"),
  createPhoto('./M1_crab_nebula_2023-01-21.png', "M1", "Crab Nebula", "Supernova remnant and pulsar wind nebula in the constellation of Taurus", "2023-01-21"),
  createPhoto('./NGC2244-rosette-nebula3.png', "NGC2244", "Rosette Nebula", "The nebula looks like a rose, so it's called the rosette nebula", "2023-01-02"),
  createPhoto('./ngc1499-california_nebula-2022-12-24_2.png', "NGC1499", "California Nebula", "The nebula looks like the state of California. Only a part of the massive deep sky object is presented here.", "2022-12-24"),
  createPhoto('./NGC896_heart_nebula_2023-01-02.png', "NGC896", "Heart Nebula", "It displays glowing ionized hydrogen gas and darker dust lanes.", "2023-01-02"),
  createPhoto('./ngc2264-christmas_tree_cluster-2022-12-24.png', "NGC2264", "Christmas tree cluster, or cone nebula", "One of the hardest target to capture so far. But you can check the cone-shaped nebula and (part of) christmas tree form", "2022-12-24"),
  createPhoto('./m42-orion-2022-11-27.png', "M42", "The Great Orion Nebula", "One of very few visible nebulae in the night sky, and one of the most beautiful deep sky objects. This photo was took in Tokyo, our house veranda", "2022-11-27"),
  createPhoto('./r_r_p_stacked3 (1).png', "M45", "Pleiades star cluster", "Also called seven sisters, One of very few visible nebulae in the night sky with bare eyes. Look at the beautiful blue gases", "2022-10-03"),
  createPhoto('./r_r_f_stacked2 (1).png', "IC434, NGC2024", "Horsehead nebula and Flame nebula", "One of the most famous deep sky object for the audiences, thanks to the hubble image. The image contains at least three nebulae, horse head, flame, and reflection nebular NGC2023 (bright-star-looking object under the horse)", "2022-10-03"),
  createPhoto('./r_a_stacked (1).png', "M31", "Andromeda Galaxy", "The nearest galaxy to our galaxy. Also you can see two more galaxies, M32 (center above) and M110 (below)", "2022-10-03"),
];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Gallery of Astrophotography
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Whenever the sky is clear, we gaze upwards and capture images of the night sky, focusing particularly on deep sky objects.
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              These are some of the finest astrophotography images that my partner and I have captured over the years.
            </Typography>
            <Stack
              sx={{pt: 4}}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <NavLink href="/" style={{textDecoration: 'none'}}>
                <Button variant="contained">Go back to the main page</Button>
              </NavLink>
              {/*<Button variant="outlined">Secondary action</Button>*/}
            </Stack>
          </Container>
        </Box>
        <Container sx={{py: 8}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {photos.map((photo) => (
              <Grid item key={photo.file} xs={12} sm={6} md={4}>
                <Card
                  sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '10%',
                    }}
                    image={"thumb/" + photo.file}
                    alt={photo.code}
                  />
                  <CardActions>
                    <Button size="large"><NavLink href={photo.file} style={{textDecoration: 'none'}}>View
                      large</NavLink></Button>
                  </CardActions>
                  <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {photo.code}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h5">
                      {photo.alternative_name}
                    </Typography>
                    <Typography gutterBottom component="h6">
                      {photo.time_took}
                    </Typography>
                    <Typography>
                      {photo.explanation}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Hope you enjoyed the night sky objects!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          References to all celestial deep sky objects are labeled as accurately as possible. If you find any inaccuracies, do not hesitate to inform me.
        </Typography>
        <Copyright/>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}