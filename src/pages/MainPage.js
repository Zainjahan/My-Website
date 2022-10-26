import React, { useState,useEffect } from 'react';
import '../components/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import SwipeableTextMobileStepper from '../pages/SwipeableTextMobileStepper';
import { Formwork } from './Formwork';
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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CrouselSlide from './CrouseSlide';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CircularProgress from '@mui/material/CircularProgress';






export default function MainPage(props) {
  const [index, setIndex] = useState(0);

  
  // const classes = useStyles();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="background">
      {/* <Header></Header> */}
      <Careers />

      <div className='heads'>
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
        <CrouselSlide />
      </div>
      <div>
        <div class="bgtext1">
          <h1 className='service1'>What We Do</h1>

        </div>

        <h1 className='service1'>Our Services</h1>
        <p className='service2'>We work with enterprises, organizations, and businesses from various<br /> industries, helping them create and launch products that are used by<br /> thousands of customers around the world.
        </p>
      </div>
      <br />
      <Box >
        <Grid container >
          <Grid item xs={12} lg={6} md={8}  >
            <Item  height="10px" sx={{background:"linear-gradient(15deg,#0c1033 0,rgba(40,36,213,.7539390756302521) 100%)",marginLeft:"4%",borderRadius:"10px solid"}}>
              <img className='imga' src="https://atompoint.com/wp-content/uploads/2020/08/Group-37136.svg" alt='' />
              <h1 className='name'>Digital Products<br /> & Engineering</h1>
              <p className='name1'>Our expertise is building, connecting, and scaling digital <br />products. We advise, manage, architect, and develop, using<br /> agile methods to ensure on-time delivery.
              </p>
            </Item>

          </Grid>
          <Grid item xs={12} lg={3} md={8} >
            <Item marginLeft={"4%"} sx={{ width: "69%", marginLeft: { xs: "4%", sm: "4%" } ,background:"#252844"}} xs={8} lg={3} md={8} >
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37158.svg" alt='' />
              <h1 className='web'>Web<br />
                Development
              </h1>
            </Item>
          </Grid>
          <Grid item sx={{ height: "51%" }} xs={12} lg={3} md={8}>
            <Item xs={8} sx={{ width: "69%", marginLeft: "-5%",background:"#252844" }}>
              <img className='classimage' src="https://atompoint.com/wp-content/uploads/2020/08/Group-37159.svg" alt='' />
              <h1 className='web'>Mobile<br />
                Development
              </h1>
            </Item>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={12} lg={3} md={8}>
          </Grid>
          <Grid sx={{ marginLeft: "19%", marginTop: "-17%" }} item xs={8} lg={3} md={8} >
            <Item sx={{ width: { xs: "69%", sm: "69%",background:"#252844" }, marginLeft: { xs: "14%", sm: "14%", lg: "29%" }, marginTop: { xs: "26%", sm: "26%", lg: "0%" } }} xs={8} lg={3} md={8} >
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37160.svg" alt='' />
              <h1 className='web'>UI/UX &<br />
                Branding
              </h1>
            </Item>
          </Grid>
          <Grid sx={{ marginTop: "-17%", height: "51%", marginLeft: "5%" }} item xs={12} lg={3} md={8}>
            <Item xs={8} sx={{ width: "69%",background:"#252844" }}>
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37161.svg" alt='' />
              <h1 className='web'>Cybersecurity
              </h1>
            </Item>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={12} lg={3} md={8}>

          </Grid>

        </Grid>
        <br />
        <Grid container >
          <Grid item xs={12} lg={3} md={8} >
            <Item xs={8} sx={{background:"#252844",marginLeft:"14%",marginRight:"6%"}} className='last'>
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37165.svg" alt='' />
              <h1 className='web'>Cloud
                Solutions
              </h1>
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} md={8}>
            <Item xs={8} sx={{background:"#252844",marginRight:"4%"}}className='last'>
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37164.svg" alt='' />
              <h1 className='web'>Extended
                Team</h1>
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} md={8} >
            <Item xs={8} sx={{background:"#252844",marginRight:"4%"}} className='last'>
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37163.svg" alt='' />
              <h1 className='web'>Startup
                Co-Create</h1>
            </Item>
          </Grid>
          <Grid item xs={12} lg={3} md={8} >
            <Item xs={8} sx={{background:"#252844",marginRight:"4%"}} className='last'>
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37162.svg" alt='' />
              <h1 className='web'>Custom
                Integration
              </h1>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className='fourth'>
        <h1 className='our'>How We Do It</h1>
        <h1 className='our'>Our Approach
        </h1>
      </div>
      <div class="wrapper">
        <div class="item1">
          <AccessAlarmsIcon sx={{ width: "85%", height: "100%" }} />
        </div>

        <div class="item2">
          <h2 className='design1'>01</h2>

          <h2 className='design1'>Design</h2>
          <h1 className='experience'>  Experience & Aesthetics</h1>
          <h6 className='ourtec'>Our tech-geeks and design-thinkers keep intended users and their<br /> behavior in mind to create the right balance between the beauty and<br /> the beast.
          </h6>

        </div>
        <div class="item3">
          <h2 className='design1'>02</h2>

          <h2 className='design1'>Development</h2>

          <h2 className='latest'>Latest & Stable Technologies
          </h2>
          <h6 className='using'>Using modern technology requires a spirit of experimentation<br /> and innovation. We constantly focus on creating an enjoyable, intuitive,<br /> engaging and remarkable experience by using practicality alongside<br /> our cutting-edge technology.
          </h6>
        </div>
        <div class="item4">
          <AccessAlarmsIcon sx={{ width: "35%", height: "100%" }} />
        </div>
        <div className='item5'>
          <AccessAlarmsIcon sx={{ width: "25%", height: "100%" }} />

        </div>
        <div className='item6'>
          <h2 className='design1'>03</h2>

          <h2 className='design1'>Process</h2>

          <h2 className='lean'> Lean & Transparent Process</h2>
          <h6 className='we'>We use digitized and agile project management tools to maintain<br /> complete transparency and efficiency. You have complete access to<br /> information of our progress at all times.
          </h6>

        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>

  )
}
