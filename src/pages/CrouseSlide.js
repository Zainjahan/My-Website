import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function CrouselSlide() {
  return (
    <Carousel className='cro'>
      <Carousel.Item  >
        <img
          className="d-block w-50 h-50"
          src="https://atompoint.com/wp-content/uploads/2020/07/Mockup-Website-Cloudnosys.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <div className='cloud2'>
          <h2 className='design1'>01 <br /><span>INCUBATED STARTUP
          </span></h2><br />
          <h6 className='cloud1'>Cloud Security & <br /> Compliance</h6><br />
          <h6>Protect your cloud infrastructure from security <br />threats, data loss and compliance risks with real<br /> time monitoring, auditing, and automated<br /> remediation.</h6>
        </div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://atompoint.com/wp-content/uploads/2020/08/Mockup-Website.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <div className='cloud2'>
          <h2 className='design1'>02 <br /><span>INCUBATED STARTUP
          </span></h2><br />
          <h6 className='cloud1'>No-Code Website Builder <br/>Tool</h6><br />
          <h6>A powerful theme for WordPress, allowing you to<br/> design and create just about any kind of website<br/> with high customizability, performance and <br/>security. </h6></div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://atompoint.com/wp-content/uploads/2020/08/Mockup-Procheck_optimized.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <div className='cloud2'>
        <h2 className='design1'>03 <br /><span>MVP Development
</span></h2>
          <h6 className='cloud1'>Manufacturing Plants<br />
            Efficiency Monitoring</h6><br />
          <h6>Helping factories become smarter through<br /> digitization of the manufacturing value chain so<br /> companies can monitor the production efficiency<br /> in real time and meet business goals.</h6>
        </div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}
