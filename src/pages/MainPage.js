import React,{useState} from 'react';
import '../components/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import SwipeableTextMobileStepper from '../pages/SwipeableTextMobileStepper';
import { Formwork } from './Formwork';
import TemporaryDrawer from './TemporaryDrawer';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';




export default function MainPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Header></Header>
      <section>
               <h1 className='sections'>We create<br/>
<span className='sections1'></span></h1>

        <h1 className='b'>digital products <br /> & experiences.</h1>
      </section>
      {/* <TemporaryDrawer/> */}

      {/* <section1>
        <h2>We are a team of diverse & collaborative tech geeks who love to <br /> solve real-world problems through perfect synergy between<br /> cutting-edge technology, design and process
        </h2><br />
        <h3>Today, we are crafting high-quality mobile apps, enterprise applications,<br /> websites, marketplaces and IoT integrations. Tomorrow, you might see us<br /> making self-generative robots, hoverboards & intergalactic portals.
        </h3><br />
        <Button variant="contained" sx={{display:"flex",justifyContent:"center",fontFamily:"Sans-serif",fontSize:'13px',textWeight:600,textTransform:"uppercase",fill:"#000000",backgroundColor:"#fff",borderRadius:"25px 25px 25px 25px",boxShadow:"0 5px 10px 0 rgb(0 0 0 / 16%)",padding:"17px 34px",marginLeft:"44%"}}>LEARN MORE</Button>

      </section1>
      <section2>
        <h2>The Spotlight</h2>
        <h2>Our Featured Innovations</h2>
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://atompoint.com/wp-content/uploads/2020/07/Mockup-Website-Cloudnosys.jpg.webp"
          alt="First slide"
        />
        <img
          className="d-block w-100"
          src="https://atompoint.com/wp-content/uploads/2020/07/Mockup-Website-Cloudnosys.jpg.webp"
          alt="Second slide"
        />
         <img
          className="d-block w-100"
          src="https://atompoint.com/wp-content/uploads/2020/07/Mockup-Website-Cloudnosys.jpg.webp"
          alt="Second slide"
        />
      </Carousel.Item>
         </Carousel>

      </section2> */}
      {/* <section>
        <br/>
        <Container>
        <Row md={4}>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 3</Col>

      </Row>
            <Row md={4}>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 3</Col>

      </Row>
      <Row md={4}>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 3</Col>

      </Row>
      <Row md={4}>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 3</Col>

      </Row>

    </Container>

      </section> */}
      <Footer></Footer>
    </div>

  )
}
