export type Photo = {
  file: string;
  code: string;
  name: string;
  description: string;
  taken: string;
};

function createPhoto(file: string, code: string, name: string, description: string, taken: string): Photo {
  return {file, code, name, description, taken};
}

export const photos: Photo[] = [
  createPhoto('m51_edited.jpg', 'M51', 'Whirlpool Galaxy', 'Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus', '2024-03-04'),
  createPhoto('IC1805_edited.jpg', 'IC1805', 'Heart Nebula', 'An emission nebula 7500 light years away from Earth, located in the Perseus Arm of the Galaxy in the constellation Cassiopeia.', '2024-02-17'),
  createPhoto('M82_edited.jpg', 'M82', 'Cigar Galaxy, Starburst Galaxy', 'A starburst galaxy approximately 12 million light-years away in the constellation Ursa Major.', '2024-02-17'),
  createPhoto('ic1848-2024.jpg', 'IC1848', 'Soul Nebula', 'An emission nebula located in Cassiopeia. Several small open clusters are embedded in the nebula.', '2024-02-17'),
  createPhoto('MergeMosaic_NGC2237.jpg', 'NGC2237', 'Rosette Nebula', 'A giant molecular cloud in the Monoceros region of the Milky Way Galaxy.', '2024-01-05'),
  createPhoto('m81.png', 'M81', "Bode's Galaxy", 'A grand design spiral galaxy about 12 million light-years away in the constellation Ursa Major.', '2023-12-26'),
  createPhoto('m1-2024.png', 'M1', 'Crab Nebula', 'Supernova remnant and pulsar wind nebula in the constellation of Taurus.', '2023-12-26'),
  createPhoto('m42-2023-11-04.jpg', 'M42', 'The Great Orion Nebula', 'One of the brightest nebulae visible to the naked eye in the night sky.', '2023-11-04'),
  createPhoto('ngc891.jpg', 'NGC891', 'NGC891 looks as the Milky Way', 'An edge-on unbarred spiral galaxy about 30 million light-years away in the constellation Andromeda.', '2023-11-04'),
  createPhoto('m33.jpg', 'M33', 'The Triangulum Galaxy', 'A spiral galaxy 2.73 million light-years from Earth in the constellation Triangulum.', '2023-11-04'),
  createPhoto('horsehead_flame.jpg', 'IC434,NGC2023,NGC2024', 'Horsehead Nebula, Flame Nebula, and NGC2023', 'Multiple nebulae in Orion including the iconic Horsehead silhouette.', '2023-10-14'),
  createPhoto('veil_mosaic.png', 'NGC6992', '(Mosaic) Veil Nebula', 'Cloud of heated and ionized gas and dust in the constellation Cygnus.', '2023-08-26'),
  createPhoto('veil.png', 'NGC6992', 'Veil Nebula', 'Cloud of heated and ionized gas and dust in the constellation Cygnus.', '2023-08-20'),
  createPhoto('helix.jpg', 'NGC7293', 'Helix Nebula', 'Planetary nebula located in the constellation Aquarius.', '2023-09-13'),
  createPhoto('dumbell.jpg', 'M27', 'Dumbbell Nebula', 'Planetary nebula in the constellation Vulpecula at a distance of about 1360 light-years.', '2023-08-20'),
  createPhoto('m16.png', 'M16', 'Eagle Nebula, Pillars of Creation', 'Young open cluster of stars in the constellation Serpens featuring the Pillars of Creation.', '2023-01-02'),
  createPhoto('ngc2244.jpg', 'NGC2244', 'Rosette Nebula', 'H II region located near one end of a giant molecular cloud in the Monoceros region.', '2023-01-02'),
  createPhoto('m42_pixinsight.png', 'M42, Sh2-279', 'The Great Orion Nebula and The Running Man Nebula', 'Diffused nebula situated south of Orion\'s Belt.', '2023-01-21'),
  createPhoto('m51_edge.png', 'M51', 'Whirlpool Galaxy', 'Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus.', '2023-05-17'),
  createPhoto('IMG_2027.jpg', 'Vega', '\u03b1 Lyr', 'Vega is the brightest star in the northern constellation of Lyra.', '2023-05-02'),
  createPhoto('m51.png', 'M51', 'Whirlpool Galaxy', 'Interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus.', '2023-04-09'),
  createPhoto('M42-orion-2023-01-21.png', 'M42, Sh2-279', 'The Great Orion Nebula and The Running Man Nebula', 'A photograph capturing both nebulae in stunning color.', '2023-01-21'),
  createPhoto('M1_crab_nebula_2023-01-21.png', 'M1', 'Crab Nebula', 'Supernova remnant and pulsar wind nebula in the constellation of Taurus.', '2023-01-21'),
  createPhoto('NGC2244-rosette-nebula3.png', 'NGC2244', 'Rosette Nebula', 'The nebula looks like a rose, earning its popular name.', '2023-01-02'),
  createPhoto('ngc1499-california_nebula-2022-12-24_2.png', 'NGC1499', 'California Nebula', 'The nebula resembles the outline of California.', '2022-12-24'),
  createPhoto('NGC896_heart_nebula_2023-01-02.png', 'NGC896', 'Heart Nebula', 'Displays glowing ionized hydrogen gas and darker dust lanes.', '2023-01-02'),
  createPhoto('ngc2264-christmas_tree_cluster-2022-12-24.png', 'NGC2264', 'Christmas Tree Cluster, or Cone Nebula', 'Challenging target featuring the cone-shaped nebula and part of the Christmas tree form.', '2022-12-24'),
  createPhoto('m42-orion-2022-11-27.png', 'M42', 'The Great Orion Nebula', 'Captured from Tokyo with the nebula visible from a veranda.', '2022-11-27'),
  createPhoto('r_r_p_stacked3 (1).png', 'M45', 'Pleiades star cluster', 'Also called seven sisters; visible nebulae with beautiful blue gases.', '2022-10-03'),
  createPhoto('r_r_f_stacked2 (1).png', 'IC434, NGC2024', 'Horsehead Nebula and Flame Nebula', 'Includes multiple nebulae such as Horsehead, Flame, and reflection nebula NGC2023.', '2022-10-03'),
  createPhoto('r_a_stacked (1).png', 'M31', 'Andromeda Galaxy', 'The nearest galaxy to the Milky Way with companions M32 and M110 in view.', '2022-10-03')
];
