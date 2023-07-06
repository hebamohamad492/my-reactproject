import React from 'react'
import "./About.css"
import Aya  from './A.png'
import Mohmed from './M.jpg'
import Eman from './E.png'
import Heba from './H.png'
import Aya2 from './A2.png'
import staricon from './star.png'
// import Sara from '../images/S.png'
// import Yassmeen from '../images/A2.png'

function About() {
  return (
    <div style={{backgroundColor:"#345D68",height:"1700px"}} >
     <div className='header'>
        <div className="warsha-logo"> 
            <p className="title1"> 
              الورشة   </p> 
        </div>
       <p className="title2">
        هيا نتحدث عن نفسنا أكثر 
         فى هذا المشروع 
       </p>
     </div>

     <p id="members"> أعضاء فريق مشروع التخرج</p>

  
  <div >
     <div div className=" designer"></div>
      <p id='design'>بيان آدم باشا
      <br/>
      UI/UX designer
      </p></div>
     <div div className=" flutter">
     <div style={{ backgroundImage: `url(${staricon })`,backgroundRepeat: "no-repeat",width:"60px",marginLeft:"10px"}}></div>
      <h1 style={{color:"#FFFFFF"}}>Flutter developers   </h1>
     <div className='flutergirl'>
      <div className='eman'   style={{ backgroundImage: `url(${Eman})`,left:' 76px',backgroundPosition:"center"}}>
        <h3 className='h3'style={{color:"darkblue"}}  >
      إيمان مالك
        </h3>
      </div>
     <div className='aya' style={{ backgroundImage: `url(${Aya})`,left:' 347px'}}>
     <h3 className='h3'style={{color:"darkblue"}} >

     آية جمعة جبريل
  </h3>
     </div>
     </div>
     <div className='mohamed' style={{ backgroundImage: `url(${Mohmed})`,left:' 616px',backgroundPosition:"center",backgroundSize:"550px"}}>
     <h3 className='h3'style={{color:"darkblue"}}>

     محمد رفاعى سيد 
  </h3>
     </div>

     </div>
     <div div className="front"> 
     <div style={{ backgroundImage: `url(${staricon })`,marginLeft:"900px",backgroundRepeat: "no-repeat",width:"60px"}}></div>
     <h1 style={{color:"#FFFFFF",display:"flex",marginLeft:"5px"}}>Front-end developers  </h1>
    <div className='heba'  style={{ backgroundImage: `url(${Heba})`,left:'970px'}}>
      <h3 className='h3'style={{color:"darkblue"}}>
          هبة محمد أحمد
      </h3>
     </div>
     <div className='aya2' style={{ backgroundImage: `url(${Aya2})`}}>
     <h3 className='h3'style={{color:"darkblue"}}>

     آية أحمد عبدالنبى
  </h3>
     </div>
     </div>
      <div div className=" back">
        <div style={{ backgroundImage: `url(${staricon })`,backgroundRepeat: "no-repeat",width:"60px",marginLeft:"10px"}}></div>
        <h1 style={{color:"#FFFFFF"}}>Back-end developers  </h1>
        <div className='sara'><h3 className='h3'style={{color:"darkblue"}}>
        سارة محمد سرور
        </h3></div>
        <div className='yassmeen'><h3 className='h3'style={{color:"darkblue"}}>
        ياسمين محمد أحمد  
      </h3></div>
     </div>
    
    </div>
  )
}

export default About;