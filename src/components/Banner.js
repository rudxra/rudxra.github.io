import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';

import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import Button from '@mui/material/Button';
import 'animate.css';
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";

export const Banner = ()=>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]= useState(false);
    const toRotate = ["Frontend Developer","Web Designer","UI/UX Designer"];
    const [text,setText]= useState('');
    const [delta,setDelta]= useState(300 - Math.random()*100);
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])
    const tick=()=>{
        let i= loopNum%toRotate.length;
        let fullText= toRotate[i];
        let updatedText = isDeleting? fullText.substring(0,text.length-1):fullText.substring(0,text.length +1);
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2);
        }
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return (
     <section className="banner" id="home">
        <Container >
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible})=>
                <div className={isVisible ? "animated_animated animate__fadeIn":""}>
                <span className="tagline">Welcome to my Portfolio !</span>
                <h1>{`Hi I'm Ruddra Shukla `}<br></br><span className="wrap">&lt;{text}/&gt;</span></h1>
                <Button variant="outlined" href="https://www.dropbox.com/scl/fi/30fljlr4gzoikjy1ho0g3/Resume.docx?rlkey=rpdz3endtahlwzse2frirwkxd&st=f55sfnbe&dl=0">Download Resume</Button>
                <Nav.Link href="#connect">
                <button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button></Nav.Link>
                </div>}</TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>
            </Col>
        </Row>
        </Container>
     </section>   
    )
}