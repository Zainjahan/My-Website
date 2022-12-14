import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import '../components/style.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MDBRadio } from 'mdb-react-ui-kit';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { padding } from '@mui/system';
import ReCAPTCHA from "react-google-recaptcha";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CCloseButton from 'react-bootstrap/CloseButton';


export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const form = useRef();
    function onChange(value) {
        console.log('Captcha value:', value);
    }


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t1im6bq', 'template_opq3r8p', form.current, 'jjGozfQXkdwL7b9nH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 610, padding: "2% 7%" }}
            role="presentation"
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <CCloseButton  variant='##2824d5' className='cbutton'/>

            <form ref={form} onSubmit={sendEmail} >
                <div>
                    <h2 className='head1' >Let's Talk!</h2>
                </div>
                <p className='head2'>Tell us about your needs and challenges. Together, we can <br /> craft a powerful solution for your business.
                </p>
                <hr class="solid" />

                <label className='head3' >What do you want to build? </label><br />

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{ display: "inline-block", flexBasis: "33%", marginBottom: "15px" }}
                >
                    <FormControlLabel value="Mobile App" control={<Radio />} label="Mobile App" />
                    <FormControlLabel value="Website" control={<Radio />} label="Website" />
                    <FormControlLabel value="Customization" control={<Radio />} label="Customization" />
                    <br />
                    <FormControlLabel sc={{ display: "inline-block", width: "100px" }} value="MVP Development" control={<Radio />} label="MVP Development" />
                    <FormControlLabel sc={{ marginright: "10px", width: "160px", height: "20px" }} value="Startup Incubation" control={<Radio />} label="Startup Incubation" />
                    <FormControlLabel sc={{ marginright: "10px", width: "160px", height: "20px" }} value="Product Development" control={<Radio />} label="Product Development" />
                </RadioGroup>

                <br />
                <div >
                    <h1 className='head5'>Tell us briefly about your idea and requirements</h1>
                    <textarea className='head10' name="message" rows="10" cols="65">
                    </textarea></div><br />
                <div >
                    <h1 className='head11'>When are you available for a short discovery call?
                    </h1>
                    <input className='head7' type="date" id="birthday" name="birthday" /><br /></div>
                <h1 className='head5'>Your contact details
                </h1>
                <div class="inputc">
                    <input type="text" name="user_name" placeholder='Name' />
                    <input type="email" name="user_email" placeholder='Email' />
                    <input type="Contact Number" name="user_contactnumber" placeholder='Contact Number' /> </div>
                <br />
                <ReCAPTCHA
                    sx={{ Background: "#1a73e8", color: "white", display: "flex", flexBasis: "166px" }}
                    sitekey="YOUR-SITE-KEY"
                    onChange={onChange}
                />

                <div class="row">
                    <Button type="submit" value="send" variant="contained" sx={{ fontFamily: "Sans-serif", fontSize: '14px', textWeight: 700, textTransform: "uppercase", borderRadius: "25px 25px 25px 25px", padding: "17px 34px", borderWidth: 0, borderStyle: "solid", marginLeft: "101%", width: "40%" }}>Submit <ArrowForwardIcon /></Button>
                </div>
            </form>    </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button sx={{borderRadius:"10px"}}onClick={toggleDrawer(anchor, true)}>Contact Us</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
