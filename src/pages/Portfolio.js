import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Footer from '../components/Footer';
import Header from '../components/Header';



export default function Portfolio() {
  return (
    <div className='cont1'>
      {/* <Header></Header> */}

      <section className='separate'>
        <h1 className='create'>Our Creations</h1>
        <p className='create1'>Our work includes helping in creation and launch of digital products for the <br />global market.We Callaborate with enterprises,organizations,and businessess<br />from various industries.</p>
      </section>
      <br />

      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6} sx={{ marginLeft: "7%" }}>
            <h2 className='design1'>01 <br /><span>INCUBATED STARTUP
            </span></h2>
            <h2 className='cloud'>Cloud Security & Compliance</h2>
            <h2 className='what'>What They Do</h2>
            <p className='protect'>Protect your cloud infrastructure from security threats, data loss and compliance risks with real time monitoring, auditing, and automated remediation.
            </p>
            <h2 className='what'>How We Collaborated
            </h2>
            <p className='protect'>Designed and developed an enterprise grade, scalable application and helped create a specialized team. Atompoint augmented all departments of the startup until its maturity & market validation.

            </p>
          </Grid>
          <Grid item xs={6}>

            <img className='top' src="https://atompoint.com/wp-content/uploads/2020/08/1.-Cloudnosys-2-768x600.png" alt="" />
            <br />
            <div>
              <img className='top1' src="https://atompoint.com/wp-content/uploads/2020/07/LOGO-for-dark.png" alt="" />
            </div>


          </Grid>
        </Grid>

      </Box>
      <br />
      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6} sx={{ marginLeft: "7%" }}>
            <h2 className='design1'>07 <br /><span>INCUBATED STARTUP
            </span></h2>
            <h2 className='cloud'>Water Delivery & Management<br /> Platform
            </h2>
            <h2 className='what'>What They Do</h2>
            <p className='protect'>Easy Access To Water For Everyone. With a vision to solve one of the most basics problems that still exists in the region. Waterlink’s mission is to provide an efficient and viable solution to meet this demand and supply by uberizing water supply.


            </p>
            <h2 className='what'>How We Collaborated
            </h2>
            <p className='protect'>Complete product engineering, team creation and marketing. Atompoint designed and developed well crafted Mobile applications for customers and drivers, as well as vendors dashboard.



            </p>
          </Grid>
          <Grid item xs={6}>

            <img className='top' src="https://atompoint.com/wp-content/uploads/2020/08/3.-Waterlink-768x600.png" alt="" />
            <br />
            <div>
              <img className='top2' src="https://atompoint.com/wp-content/uploads/2020/08/Waterlink-Logo-e1600698035708.png" alt="" />
            </div>


          </Grid>
        </Grid>

      </Box>
      <br />
      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6} sx={{ marginLeft: "7%" }}>
            <h2 className='design1'>03 <br /><span>MVP DEVELOPMENT

            </span></h2>
            <h2 className='cloud'>Manufacturing Plants<br /> Efficiency Monitoring
            </h2>
            <h2 className='what'>What They Do</h2>
            <p className='protect'>Helping factories become smarter through digitization of the manufacturing value chain so companies can monitor the production efficiency in real time and meet business goals.


            </p>
            <h2 className='what'>How We Collaborated
            </h2>
            <p className='protect'>Provided accelerated development for a SaaS based, cloud application from planning to implementation. Atompoint’s team helped in integration of IoT sensors for implementation in GSK (Pharmaceutical) factories.



            </p>
          </Grid>
          <Grid item xs={6}>

            <img className='top' src="https://atompoint.com/wp-content/uploads/2020/08/2.-Procheck-768x600.png" alt="" />
            <br />
            <div>
              <img className='top3' src="https://atompoint.com/wp-content/uploads/2020/07/Group-36589.png" alt="" />
            </div>


          </Grid>
        </Grid>

      </Box>
      <br />
      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6} sx={{ marginLeft: "7%" }}>
            <h2 className='design1'>08 <br /><span>INCUBATED STARTUP
            </span></h2>
            <h2 className='cloud'>No-Code Website Builder Tool</h2>
            <h2 className='what1'>What They Do</h2>
            <p className='protect'>A powerful theme for WordPress, allowing you to design and create just about any kind of website with high customizability, performance and security.


            </p>
            <h2 className='what1'>How We Collaborated
            </h2>
            <p className='protect'>Designed & Developed a well architected WordPress Theme and a custom Drag & Drop Page Builder plugin, ready for the mass market. Atompoint provided complete technical support to their customers as well as helped in creating the right marketing material, branding and licensing system.



            </p>
          </Grid>
          <Grid item xs={6}>

            <img className='top' src="https://atompoint.com/wp-content/uploads/2020/08/4.-Prostyler-768x600.png" alt="" />
            <br />
            <div>
              <img className='top4' src="https://atompoint.com/wp-content/uploads/2020/07/Group-36590.png" alt="" />
            </div>


          </Grid>
        </Grid>

      </Box>
      <br />
      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6} sx={{ marginLeft: "7%" }}>
            <h2 className='design1'>05 <br /><span>TECHNOLOGY TRANSFORMATION

            </span></h2>
            <h2 className='cloud'>Logistics Tracking & ERP Application</h2>
            <h2 className='what2'>What They Do</h2>
            <p className='protect'>Steelink is a technologically enabled logistics provider for Pakistan. They provide end-to-end supply chain management, including warehousing, transportation, and freight forwarding.


            </p>
            <h2 className='what2'>How We Collaborated
            </h2>
            <p className='protect'>Created Portal for Steelink’s customers to Track and manage their consignments as well as an ERP Application for their staff to automate and manage business processes.



            </p>
          </Grid>
          <Grid item xs={6}>

            <img className='top' src="https://atompoint.com/wp-content/uploads/2020/08/5.-Steelink-768x600.png" alt="" />
            <br />
            <div>
              <img className='top5' src="https://atompoint.com/wp-content/uploads/2020/07/Group-36592.png" alt="" />
            </div>


          </Grid>
        </Grid>

      </Box>
      <Box>
        <h1 className='num'>And More...</h1>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={6}>
            <h1 className='left'><strong>60K</strong> Website Made <br />with Our<br /> Products</h1><br />
            <h1 className='left'><strong>20+</strong> Cloud<br />Solutions</h1>

          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <h1><strong>3</strong>Incubated Startups</h1>
            <h1><strong>3</strong> Mobile Applications</h1>



          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <h1><strong>4</strong> Enterprise Applications</h1><br />
            <h1><strong>10+</strong> Custom<br />Websites</h1>



          </Grid>
        </Grid>

      </Box>



      {/* <Footer></Footer> */}

    </div>)
}
