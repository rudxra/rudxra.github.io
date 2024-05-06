import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect} from 'react';
import logo from '../assets/img/logo.svg';
import navIcon from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from '../assets/img/GitHub.png'

export const NavBar =()=>{
    const [activeLink,setActiveLink]= useState('');
    const [scrolled,setScrolled]= useState('false');
    useEffect(()=>{
        const onScroll =()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
            window.addEventListener("scroll",onScroll);
            return window.removeEventListener("scroll",onScroll);
        }
    },[])
    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);
    }
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/ruddra-shukla-245447230/'><img src={navIcon} alt=''/></a>
                <a href='https://leetcode.com/rudxra'><img src={navIcon2} alt=''/></a>
                <a href='https://www.instagram.com/amipacifist/'><img src={navIcon3} alt=''/></a>
                <a href='https://github.com/rudxra'><img src={github} alt=''/></a>
            </div>
            {/* <Nav.Link href="#connect" className={activeLink === 'connect'? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('contact')}>
            <button className='vvd' ><span>Let's Connect</span></button></Nav.Link> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
{/* <a href="https://iconscout.com/icons/leetcode" class="text-underline font-size-sm" target="_blank">Leetcode</a> by <a href="https://iconscout.com/contributors/icon-54" class="text-underline font-size-sm">Icon 54</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> */}