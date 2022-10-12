import React, { useState } from 'react';
import '../components/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import SwipeableTextMobileStepper from '../pages/SwipeableTextMobileStepper';
import { Formwork } from './Formwork';
import TemporaryDrawer from './TemporaryDrawer';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Careers from './Careers';
import Carousel from 'react-bootstrap/Carousel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



import BootstrapCarousel from './BootstrapCarousel';
import { Typography } from '@mui/material';
import CrouselSlide from './CrouseSlidel';




export default function MainPage(props) {
  // const classes = useStyles();


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="background">
      <Header></Header>
      <Careers />

      <div>
        <h2 className='heading1'>We are a team of diverse & collaborative tech geeks who love to <br /> solve real-world problems through perfect synergy between<br /> cutting-edge technology, design and process
        </h2><br />
        <h3 className='heading2'>Today, we are crafting high-quality mobile apps, enterprise applications,<br /> websites, marketplaces and IoT integrations. Tomorrow, you might see us<br /> making self-generative robots, hoverboards & intergalactic portals.
        </h3><br />
        <Button variant="contained" sx={{ display: "flex", justifyContent: "center", fontFamily: "Sans-serif", fontSize: '13px', textWeight: 600, textTransform: "uppercase", fill: "#000000", borderRadius: "25px 25px 25px 25px", boxShadow: "0 5px 10px 0 rgb(0 0 0 / 16%)", padding: "17px 34px", marginLeft: "44%" }}>LEARN MORE</Button>

      </div>
      <div className='three-heading'>
        <h1>The  Spotlight</h1>
        <h2>Our Featured Innovations</h2>
      </div>
      <div>
      <CrouselSlide/>
      </div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Typography sx={{color:"##060515",fontFamily:"'segoe ui',Sans-serif",fontSize:"36px",fontWeight:900,marginLeft:"2%"}}>Atompoint + You

</Typography>

    </Box>


      <Footer></Footer>
    </div>

  )
}
