import React from 'react';
import { Formwork } from './Formwork';
import '../components/style.css';
import Header from '../components/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';







function AboutUs({ location, zoomLevel }) {
  
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )
  
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (

    
    <div className='cont1'>
      <Header></Header>
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>


      <section className='separate'>
        <h1 className='heading-title1'>LOOKING TO <strong>BUILD & GROW</strong>  THE NEXT<br /><strong>DISRUPTIVE</strong> DIGITAL PRODUCTS AND <br /><h1 className='heading-title2'>MAKE IT MATTER</h1></h1><br />

        <p>Atompoint is botique software development studio specializing in human centric <br />approach to technology development.Provide delightful user experience and <br />bridge the gap between design and function.</p>
        <br />
        <p>We are a team of experience and passionate creatives,developers and engineers<br />with diverse skillset in the design and development industry.Our work is <br />meticulously curated to the business challenge at hand. </p>

        <br />
        <div>
          <h2 className='heading1'>"We are inspired by the technicalities of nature, the algorithms, the patterns and the anomalies."</h2>
          <br />
          <h3 className='heading2'>Yunus Jamal - Founder

          </h3><br />
          <Box>
          <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Item>
      <h1>
        Why<br/>Choose<br/>Us?
      </h1>
    </Item>
  </Grid>
  <Grid item xs={8}>
    <Item>
      
     <h1 className='tech'>Technological Pragmatists</h1>
      <p className='tech1'>Being in the market for a decade has allowed  us to <br/>establish efficiently flowing and developmental<br/>processes.We use the right tool for the right job by <br/>utlilizing the synergy between us and our clients to come<br/>up with successful and innovative products.</p>
   <h1 className='tech'>Technological Pragmatists</h1>
      <p className='tech1'>Being in the market for a decade has allowed  us to <br/>establish efficiently flowing and developmental<br/>processes.We use the right tool for the right job by <br/>utlilizing the synergy between us and our clients to come<br/>up with successful and innovative products.</p>
      <h1 className='tech'>Technological Pragmatists</h1>
      <p className='tech1'>Being in the market for a decade has allowed  us to <br/>establish efficiently flowing and developmental<br/>processes.We use the right tool for the right job by <br/>utlilizing the synergy between us and our clients to come<br/>up with successful and innovative products.</p>
      <h1 className='tech'>Technological Pragmatists</h1>
      <p className='tech1'>Being in the market for a decade has allowed  us to <br/>establish efficiently flowing and developmental<br/>processes.We use the right tool for the right job by <br/>utlilizing the synergy between us and our clients to come<br/>up with successful and innovative products.</p>
      <h1 className='tech'>Technological Pragmatists</h1>
      <p className='tech1'>Being in the market for a decade has allowed  us to <br/>establish efficiently flowing and developmental<br/>processes.We use the right tool for the right job by <br/>utlilizing the synergy between us and our clients to come<br/>up with successful and innovative products.</p>
   
   
    </Item>
    
  </Grid>
</Grid>

</Box>
<br/>
<Box>
          <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Item>
      <h1>Officially In <br/>3<br/>Countries<br/>KARACHI,PK<br/>LONDON,U.K<br/>ATLANTA,U.S.A</h1>
    </Item>
  </Grid>
  <Grid item xs={8}>
    <Item>

    <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div>
 </InfoWindow>
</Map>


    
    </Item>
    
  </Grid>
</Grid>

</Box>


        </div>

      </section>

    </div>
  )
}
export default AboutUs({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)
