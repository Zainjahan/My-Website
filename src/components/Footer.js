import * as React from 'react';
import './style.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';

export default function Footer() {
    return (


        <div className='main1'>
            <Box sx={{ backgroundColor: "#2824d5", overflow: "hidden", height: "10%", padding: "20px" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ backgroundColor: "white", marginLeft: "20%", width: "70%", marginRight: "20%", borderRadius: "7%", overflow: "hidden" }}>
                        <Typography sx={{ color: "##060515", fontFamily: "'segoe ui',Sans-serif", fontSize: "36px", fontWeight: 900, height: "128px", width: "57%", margin: "8px" }}>Atompoint + You

                        </Typography><br />
                        <Typography sx={{ marginTop: "-5%", marginBottom: "3%", color: "#060515", fontFamily: "'segoe ui',Sans-serif", fontSize: "22px", fontWeight: 400, lineHeight: "1.3em", marginTop: "-9%" }}>We solve ambitious business problems with amazing<br /> digital products
                            {/* <Button sx={{ borderRadius: '16px', color: "black",marginLeft:"38%",background:"#2824d5" }} variant="contained" color="inherit"><TemporaryDrawer1/> <ArrowForwardIcon /></Button> */}
                            <Button xs={{ marginTop: "5%", marginLeft: "14%" }} sx={{ borderRadius: '16px', color: "black", marginLeft: "68%", marginTop: "-12%" }} variant="contained" color="inherit">GET IN TOUCH</Button>

                        </Typography>
                    </Box>
                </Box>
            </Box>
            <div class="rowstyle">
                <div class="column" >
                    <img width="84" height="91" src="https://atompoint.com/wp-content/uploads/2020/01/Group-36166.png" class="attachment-full size-full entered lazyloaded" alt="" data-lazy-src="https://atompoint.com/wp-content/uploads/2020/09/logo-white_2x_optimized.png" data-ll-status="loaded"></img>
                    <h4 class="elementor">© 2022 Atompoint.<br />
                        All rights Reserved</h4>
                </div>
                <div class="column" >
                    <h4>Explore</h4>
                    <a class="links" href="aboutus">About Us</a>
                    <br />
                    <a class="links" href="portfolio">Portfolio</a>
                    <br />
                    <a class="links" href="opportunities">Opportunities</a>
                    <br />
                    <a class="links" href="privacypolicy">Privacy Policy</a>

                </div>
                <div class="column" >
                    <h4>Visit</h4>
                    <p>Office @ Atlanta, USA 205 Market Pl<br /> Suite 200, Roswell, GA 30075
                    </p><br />
                    <p>Office @ London, UK 67 Ena Road,<br /> Norbury, London Sw16 4JE
                    </p><br />
                    <p>Office @ Karachi, PK 45-C, Faran<br /> Cooperative Society, Shaheed-e-Millat Road
                    </p>
                </div>
                <div class="column" >
                    <h4>Contact</h4>
                    <p>contact@atompoint.com</p><br />
                    <p>+1 618 596 3276</p><br />
                    <p>+92 213 7235458
                    </p><br />
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                </div>
            </div>
        </div>

    );
}
