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
         <Carousel autoPlay={false} >
        <div>
            <img alt="" src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"/>
            <p className="legend">Legend 3</p>
        </div>
       
    </Carousel>

        {/* <br />
        <div>
          <div class='container-fluid' >
            <div className="row title" style={{ marginBottom: "20px" }} >
              <div class="col-sm-12 btn btn-warning">
                How To Use Bootstrap Carousel In ReactJS
              </div>
            </div>
          </div>
          <div className='container-fluid' >
            <Carousel>
              <Carousel.Item style={{ 'height': "300px" }} >
                <img style={{ 'height': "300px" }}
                  className="d-block w-100"
                  src={'assets/img/img2.jpg'} />
                <Carousel.Caption>
                  <h3>First Demo </h3>
                </Carousel.Caption>
              </Carousel.Item  >
              <Carousel.Item style={{ 'height': "300px" }}>
                <img style={{ 'height': "300px" }}
                  className="d-block w-100"
                  src={'assets/img/img1.jpg'} />
                <Carousel.Caption>
                  <h3>Second Demo</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ 'height': "300px" }}>
                <img style={{ 'height': "300px" }}
                  className="d-block w-100"
                  src={'assets/img/img3.jpg'} />
                <Carousel.Caption>
                  <h3>Third Demo</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div> */}

        {/* <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    <div class="carousel-inner" role="listbox">

      <div class="item active">
        <img src="img_chania.jpg" alt="Chania" width="460" height="345"/>
        <div class="carousel-caption">
          <h3>Chania</h3>
          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        </div>
      </div>

      <div class="item">
        <img src="img_chania2.jpg" alt="Chania" width="460" height="345"/>
        <div class="carousel-caption">
          <h3>Chania</h3>
          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
        </div>
      </div>
    
      <div class="item">
        <img src="img_flower.jpg" alt="Flower" width="460" height="345"/>
        <div class="carousel-caption">
          <h3>Flowers</h3>
          <p>Beautiful flowers in Kolymbari, Crete.</p>
        </div>
      </div>

      <div class="item">
        <img src="img_flower2.jpg" alt="Flower" width="460" height="345"/>
        <div class="carousel-caption">
          <h3>Flowers</h3>
          <p>Beautiful flowers in Kolymbari, Crete.</p>
        </div>
      </div>
  
    </div>

    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div> */}
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
