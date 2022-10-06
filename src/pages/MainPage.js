import React from 'react';
import '../components/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import SwipeableTextMobileStepper from '../pages/SwipeableTextMobileStepper';



export default function MainPage() {
  return (
    <div>
      <Header></Header>
      <section>
        <h1>We create</h1>
        <h1 className="a">
          <div class="message">
            <div class="word1">
              Innovative </div>
            <div class="word2">
              Disruptive </div>
            <div class="word3">
              Delightful </div>
          </div>
        </h1>
        <h1 className='b'>digital products <br /> & experiences.</h1>
      </section>
      

      <section1>
        <h2>We are a team of diverse & collaborative tech geeks who love to <br /> solve real-world problems through perfect synergy between<br /> cutting-edge technology, design and process
        </h2><br />
        <h3>Today, we are crafting high-quality mobile apps, enterprise applications,<br /> websites, marketplaces and IoT integrations. Tomorrow, you might see us<br /> making self-generative robots, hoverboards & intergalactic portals.
        </h3><br />
        <Button variant="contained" sx={{display:"flex",justifyContent:"center",fontFamily:"Sans-serif",fontSize:'13px',textWeight:600,textTransform:"uppercase",fill:"#000000",backgroundColor:"#fff",borderRadius:"25px 25px 25px 25px",boxShadow:"0 5px 10px 0 rgb(0 0 0 / 16%)",padding:"17px 34px",marginLeft:"44%"}}>LEARN MORE</Button>

      </section1>
      <section2>
        <h2>The Spotlight</h2>
        <h2>Our Featured Innovations</h2>
        <SwipeableTextMobileStepper/>
      </section2>
      <Footer></Footer>
    </div>

  )
}
