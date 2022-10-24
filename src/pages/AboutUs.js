import React from 'react';
import { Formwork } from './Formwork';
import '../components/style.css';
import Header from '../components/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Footer from '../components/Footer';


function AboutUs() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (


    <div className='cont1'>
      {/* <Header></Header> */}


      <section className='separate'>
        <h1 className='heading-title1'>LOOKING TO <strong>BUILD & GROW</strong>  THE NEXT<br /><strong>DISRUPTIVE</strong> DIGITAL PRODUCTS AND <br /><h1 className='heading-title2'>MAKE IT MATTER</h1></h1><br />

        <p>Atompoint is botique software development studio specializing in human centric <br />approach to technology development.Provide delightful user experience and <br />bridge the gap between design and function.</p>
        <br />
        <p>We are a team of experience and passionate creatives,developers and engineers<br />with diverse skillset in the design and development industry.Our work is <br />meticulously curated to the business challenge at hand. </p>
      </section>
      <br />
      <br />
      <section className='secs'>
        <h2 className='heading1'>"We are inspired by the technicalities of nature, the algorithms, the patterns and the anomalies."</h2>
        <br />
        <h3 className='heading2'>Yunus Jamal - Founder

        </h3></section><br />
      <Box sx={{ marginTop: "50%" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <h1 className='left'>
              Why<br />Choose<br />Us?
            </h1>
          </Grid>
          <Grid item xs={8}>

            <h1 className='tech'>Technological Pragmatists</h1>
            <p className='tech1'>Being in the market for a decade has allowed  us to <br />establish efficiently flowing and developmental<br />processes.We use the right tool for the right job by <br />utlilizing the synergy between us and our clients to come<br />up with successful and innovative products.</p>
            <h1 className='tech'>Technological Pragmatists</h1>
            <p className='tech1'>Being in the market for a decade has allowed  us to <br />establish efficiently flowing and developmental<br />processes.We use the right tool for the right job by <br />utlilizing the synergy between us and our clients to come<br />up with successful and innovative products.</p>
            <h1 className='tech'>Technological Pragmatists</h1>
            <p className='tech1'>Being in the market for a decade has allowed  us to <br />establish efficiently flowing and developmental<br />processes.We use the right tool for the right job by <br />utlilizing the synergy between us and our clients to come<br />up with successful and innovative products.</p>
            <h1 className='tech'>Technological Pragmatists</h1>
            <p className='tech1'>Being in the market for a decade has allowed  us to <br />establish efficiently flowing and developmental<br />processes.We use the right tool for the right job by <br />utlilizing the synergy between us and our clients to come<br />up with successful and innovative products.</p>
            <h1 className='tech'>Technological Pragmatists</h1>
            <p className='tech1'>Being in the market for a decade has allowed  us to <br />establish efficiently flowing and developmental<br />processes.We use the right tool for the right job by <br />utlilizing the synergy between us and our clients to come<br />up with successful and innovative products.</p>



          </Grid>
        </Grid>

      </Box>
      <br />
      <Box sx={{ marginTop: "25%" }}>
        <h1 className='num'>In Numbers</h1><br />
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <h1 className='left'>Officially In <br />3<br />Countries<br />KARACHI,PK<br />LONDON,U.K<br />ATLANTA,U.S.A</h1>
          </Grid>
          <Grid item xs={8}>
            <img width={"109%"} height={"80%"} src="https://atompoint.com/wp-content/uploads/2020/07/Group-36193@2x-2048x1022.png" alt="" />



          </Grid>
        </Grid>

      </Box>
      <Box sx={{ marginTop: "25%" }}>
        <h1 className='num'>In Numbers</h1><br/>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <h1 className='left'>Happy Family Of <br />25+<br />Countries<br />Team Members</h1>
          </Grid>
          <Grid item xs={8}>
            <div class="element">
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37160.svg" alt='' />

            </div>
            <div class="element">
              <img src="https://atompoint.com/wp-content/uploads/2020/08/Group-37160.svg" alt='' />
            </div>



          </Grid>
        </Grid>

      </Box>
      <Box sx={{ marginTop: "25%" }}>
        <h1 className='num'>In Numbers</h1><br/>
        <Grid container spacing={2} columns={20}>
          <Grid item xs={8} md={8} lg={8}>
            <h1 className='left'>Evolving <br />Digital Solutions</h1>
          </Grid>
          <Grid item xs={5} md={5} lg={5}>
            <h1><strong>60K</strong> Website Made With <br />Our Products</h1>
            <h1><strong>4</strong> Enterprise <br />Applications</h1>
            <h1><strong>20+</strong> Cloud<br />Solutions</h1>



          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <h1><strong>3</strong> Incubated <br />Startups</h1>
            <h1><strong>3</strong> Mobile <br />Applications</h1>
            <h1><strong>10+</strong> Custom<br />Websites</h1>



          </Grid>
        </Grid>

      </Box>
      <Box sx={{ marginTop: "25%" }}>
        <h1 className='num'>In Numbers</h1><br/>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <h1 className='left'>Experts in <br />30+<br />Technologies</h1>
          </Grid>
          <Grid item xs={8}>
            <div class="element">
              <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt='' />
            </div>
            <div class="element">
              <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt='' />
            </div>


          </Grid>
        </Grid>

      </Box>
      {/* <Footer></Footer> */}

    </div>
  )
}
export default AboutUs;