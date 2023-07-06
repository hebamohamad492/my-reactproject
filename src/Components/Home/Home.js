import React, { Fragment ,useState} from 'react'
import { Link} from "react-router-dom";
import Footer from '../Footer';
import './Home.css';
import Registeration from '../Registeration/Registeration';
import carown from '../images/imag1.png';
import fixed from  '../images/imag2.png'
import owner from  '../images/imag3.png';
import Modal from '../Modal/Modal'

function Home() {
  const [showModal,setshowModal] =useState(false) ;
  const [witch,setwitch]=useState()
  const StartRegister=()=>{
    return(
      <div>
        <Registeration />
      </div>
    )
  }
  return (
   < Fragment>
         <Modal  show={showModal} closeModal={()=>setshowModal(false)} who={witch} />

   <div>

    <div className='Home1'>
      <p className='parag'>

      إستمتعت الآن بالسفر بلا قلق من الأعطال  الورشة تقدم الآن خدمات لأجل راحتك متوافرين 24 ساعة خاصة بالليل سجل الآن معنا 
      </p>
      <button className='button'onClick={()=>{setshowModal(true);setwitch(true)}}>إبدأ الأن</button>
      </div>

       <div className='Home2' >
        <p>تطبيق الورشة شامل لتلبية إحتياجاتكم </p>
       </div>
       <div className='Home3' >
          <div className='dcard'>
           <span>كصاحب سيارة</span>
           <br/>
           <img className="imaging"src={carown}  />
           <p style={{}}>يوفر التطبيق ترشيح أقرب ورشة لك والتواصل السريع مع الورش 
وتوفير قطع غيار بأفضل سعر </p>
          </div>
          
          <div  className='dcard'>
             <span>كمصلح</span>
             <br/>
           <img className="imaging"src={fixed}   style={{}}/>
           <p style={{fontfamily:""}}>يوفر التطبيق مرحلة تقيم خاص لعملك وترشيحات لكوإتاحة توفير لك عمل تابع للورشات</p>
          </div>

          <div  className='dcard' >
           <span>كصاحب ورشة</span>
           <br/>
           <img className="imaging"src={owner} />
           <p>يوفر التطبيق مرحلة تقيم خاص لعملك وعرض لمتجرك الخاص بقطع الغيار وفرصة عمل أوفر من خلال 
التطبيق</p>
          </div>
          

       </div>
       <div className='but'>
               <Link to='/Registeration' className='start'>
     إبدأ الأن
               </Link>
       </div>
   </div>
   <div style={{display:"flex",marginTop:"1600px"}}>

                 <Footer />
              </div>
   </Fragment>
  )
}

export default Home;