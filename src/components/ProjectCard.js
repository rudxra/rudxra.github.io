import {Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
export const ProjectCard=({title,description,imgUrl,link})=>{
    return(
        <a href={link} target="-blank" rel="noopener noreferrer">
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col></a>
    )
}