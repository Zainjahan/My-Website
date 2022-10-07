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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <form ref={form} onSubmit={sendEmail}>
                <h2 className='head1' >Let's Talk!</h2>
                <p className='head2'>Tell us about your needs and challenges. Together, we can craft a powerful solution for your business.
                </p>
                <label className='head3' >What do you want to build? </label><br />
                {/* <div className='head4'>
        <span className='new'>
        <input type="radio" value="Mobile App" />
        <label >Mobile App
        </label>
        </span>
        <span className='new'>
        <input type="radio" value="Website" />
        <label >Website</label>
        </span>
        <span className='new'>
        <input type="radio" value="Customization" /></span>
        <span>
        <label >Customization</label>
        <br/>
        <input type="radio" value="MVP Development" />
        </span>
        <span  className='new'>
        <label >MVP Development
        </label>
        <input type="radio" value="Startup Incubation" />
        </span>
        <span className='new'>
        <label >Startup Incubation
        </label>
        </span>
        <span className='new'>
        <input type="radio" value="Product Development" />
        <label >Product Development
        </label></span></div> */}
                <div class="radio-btns">

                    <input type="radio" id="child" name="age" value="child" />
                    <label for="child">Mobile App</label>
                    <input type="radio" Style="MarginRight:-7%" id="adult" name="age" value="adult" />
                    <label for="adult">Website</label><br />
                    <input type="radio" id="senior" name="age" value="senior" />
                    <label for="senior">Customization</label><br />
                </div>
                <div class="radio-btns">

                    <input type="radio" id="child" name="age" value="child" />
                    <label for="child">MVP Development
                    </label>
                    <input type="radio" id="adult" name="age" value="adult" />
                    <label for="adult">Startup Incubation
                    </label><br />
                    <input type="radio" id="senior" name="age" value="senior" />
                    <label for="senior">Product Development</label>


                </div>


                <br />      <div className='head5'>
                    <h1 className='head5'>Tell us briefly about your idea and requirements</h1>
                    <textarea className='head10' name="message" rows="10" cols="65">
                    </textarea></div><br />
                <div className='head5'>
                    <h1 className='head5'>When are you available for a short discovery call?
                    </h1>
                    <input className='head7' type="date" id="birthday" name="birthday" /><br /></div>
                <h1 className='head5'>Your contact details
                </h1>

                <input type="text" name="user_name" placeholder='Name' />
                <input type="email" name="user_email" placeholder='Email' />
                <input type="Contact Number" name="user_contactnumber" placeholder='Contact Number' />
                <div class="row">

                <Button type="submit" value="send" variant="contained" sx={{display:"flex",justifyContent:"center",fontFamily:"Sans-serif",fontSize:'13px',textWeight:600,textTransform:"uppercase",fill:"#000000",borderRadius:"25px 25px 25px 25px",padding:"17px 34px",marginLeft:"73%"}}>Submit</Button>
                </div>
            </form>    </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
