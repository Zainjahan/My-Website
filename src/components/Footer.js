import * as React from 'react';
import './style.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
    return (
        <div class="row">
            <div class="column" >
            <img width="84" height="91" src="https://atompoint.com/wp-content/uploads/2020/01/Group-36166.png" class="attachment-full size-full entered lazyloaded" alt="" data-lazy-src="https://atompoint.com/wp-content/uploads/2020/09/logo-white_2x_optimized.png" data-ll-status="loaded"></img>
                <h4 class="elementor-heading-title elementor-size-default">© 2022 Atompoint.<br />
                    All rights Reserved</h4>
            </div>
            <div class="column" >
                <h2>Explore</h2>
                <a color='#fff' href="aboutus">About Us</a>
                <br />
                <a  href="portfolio">Portfolio</a>
                <br />
                <a  href="opportunities">Opportunities</a>
                <br />
                <a  href="privacypolicy">Privacy Policy</a>

            </div>
            <div class="column" >
                <h2>Visit</h2>
                <p>Office @ Atlanta, USA 205 Market Pl Suite 200, Roswell, GA 30075
                </p><br />
                <p>Office @ London, UK 67 Ena Road, Norbury, London Sw16 4JE
                </p><br />
                <p>Office @ Karachi, PK 45-C, Faran Cooperative Society, Shaheed-e-Millat Road
                </p>
            </div>
            <div class="column" >
                <h2>Contact</h2>
                <p>contact@atompoint.com</p><br />
                <p>+1 618 596 3276</p><br />
                <p>+92 213 7235458
                </p><br />
                <FacebookOutlinedIcon />
                <InstagramIcon />
            </div>
        </div>

    );
}
