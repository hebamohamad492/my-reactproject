import React from 'react'
import { Link } from 'react-router-dom';
import facebook from './images/facebook.jpeg';
import twitter from  './images/twitter.jpeg';
import insta from './images/insta.jpeg';
import linkedin from './images/linkedin.png'
import "./Footer.css"
const Footer = () => {
  return (
    < >
  <footer  style={{position:"absolute",width:"100%",textAlign:"center" ,color:"white",backgroundColor:"darkgoldenrod",height:"100px"}}>
    <ul style={{display:"flex",justifyContent:"center",listStyleType:"none",marginTop:"20px"}}>
      
    <li > <Link><div className='ficons' style={{ backgroundImage: `url(${facebook})`, height:"100%"}}></div></Link>  </li>
    <li> <Link><div className='ficons' style={{ backgroundImage: `url(${twitter})`, left: ''}}></div></Link>  </li>
    <li> <Link><div className='ficons' style={{ backgroundImage: `url(${insta})`, left: ''}}></div></Link>  </li>
    <li> <Link><div className='ficons' style={{ backgroundImage: `url(${linkedin})`, left: ''}}></div></Link>  </li>
    </ul>
  



  <div style={{height:"70px",backgroundColor:"darkcyan"}}>    
    
    with our best wishes 
    <p>El WARSHA.com</p>
             </div>
</footer>
  </>
  )
}

export default Footer;