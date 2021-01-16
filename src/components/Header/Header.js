import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropDown,
} from 'react-bootstrap'
import {
    Link,
    NavLink,
    withRouter
} from 'react-router-dom'
import {
    HomeRounded,
    SchoolRounded,
    WorkRounded,
    Facebook,
    Twitter,
    Linkedin,
    GitHub,
    Telegram,
} from '@material-ui/icons'
import resumeData from '../../utils/resumeData'
import CostumButton from '../Button/Buttonku'
import './Header.css'



const Header = (props) => {
const pathName = props?.location?.pathname

    return (
        <Navbar expand='lg' sticky='top' className='header'>
            {/*Home page */}
            <Nav.Link as={NavLink} to='/' className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link> 
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='header_left'>
                     {/*Resume page */}
                    <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : 'header_link'}>Resume</Nav.Link>
                     {/*Portofolio */}
                    <Nav.Link as={NavLink} to='/portofolio' className={pathName === '/portofolio' ? 'header_link_active' : 'header_link'}>Portofolio</Nav.Link>
                </Nav>
             <div className='header_right'>
             {Object.keys(resumeData.sosmed).map(key => (
                   <a  href={resumeData.sosmed[key].link}  target='_blank'>{resumeData.sosmed[key].icon}</a>
               ))}
                <CostumButton text={'Hire Me'} icon={<Telegram/>}/>
               
             </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)
