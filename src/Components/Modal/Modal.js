import React, { useState } from 'react'
import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import ForgetPassword from '../ForgetPassword';
import ResetPassword from '../ResetPassword';
import Login from '../Login/Login'
import  '../Login/Login.css'
import Registeration from '../Registeration/Registeration';

import './Modal.css'
const Backdrop = ({})=>{
  return <div className="backDrop"> 
    </div>
    
  }
  
  const Overlay = ({witch,Carinfo,changfunction,fgpass, isloading,pop,close})=>{
  const [Carfollow,setCarfollow]=useState({agencyName:"",agencyAddress:"",agencyPhone:""});
   
  if(fgpass===true){
    return(
      <div className='overlay over2'style={{backgroundImage:"none"}}>
        <ForgetPassword closeform={close}/>
      </div>
    )
  } 
  // if(fgpass===false){
  //   return(
  //     <div className='overlay 'style={{backgroundImage:"none",width:"40%"}}>
  //     <ResetPassword closeform={close}/>
  //   </div>
  //   )
  // }
  if(pop === false){
    return   (
            <div className='overlay' style={{height:"400px"}}>
                <div className='deleteBtn'onClick={close}   >X</div>
                <div style={{marginTop:"50px"}}>
                    <p style={{color:"white",width:"",textAlign:"center" }} >تابعةللتوكيل</p>
                    <div  style={{display:"flex",margin:"10px 20px 10px 40px",justifyContent:"space-around"}}>
                      <input className='input'name='agencyName' type="text"style={{width:"300px"}}   value={Carinfo.agencyName }
                    onChange={changfunction}/>
                    <p style={{color:"white",marginTop:"5px" ,fontSize:"20px"}}>اسم الفرع</p>
                      
                    </div>
                    <div  style={{display:"flex",margin:"10px 20px 10px 40px",justifyContent:"space-around"}}>
                    <input className='input'name='agencyAddress' type="text"style={{width:"300px"}}value={Carinfo.agencyAddress}
                onChange={changfunction}/>
                      <p style={{color:"white",marginTop:"5px" ,fontSize:"20px"}}>عنوان الفرع</p>
                  </div>
                
                <div style={{display:"flex",margin:"10px 20px 10px 40px",justifyContent:"space-around"}} >
                      <input className='input'name='agencyPhone' type="number"style={{width:"300px"}}value={Carinfo.agencyPhone}
                onChange={changfunction}/>
                      <p style={{color:"white",marginTop:"5px" ,fontSize:"20px"}}>رقم التليفون</p>
                </div>
                    <button onClick={close} className="formbut" style={{marginLeft:"150px"}}
                    >حفظ</button>
              </div>
                
          </div>
          
            )

  }else if(pop===true){
    
    return(

      <div className='overlay' style={{}}>
               <div className='deleteBtn'onClick={close}   >X</div>
                <div style={{marginTop:"20px"}}>

                  <div style={{display:"flex",flexDirection:"column-reverse",margin:"10px 0px 10px 60px"}} >
                    <input className='input' type="text" style={{width:"350px",height:"40px"}}/>
                    <p style={{color:"white",marginLeft:"195px",fontSize:"20px"}}>أرقام بطاقة الائتمان</p>
                  </div>

                  <div style={{display:"flex",justifayContent:"center"}}>
                  <div  style={{display:"flex",margin:"10px 0px 10px 60px"}}>
                      <input className='input' type="date"style={{width:"130px"}} />
                      <p style={{color:"white",width:"90px"}}>تاريخ اليوم</p>
                    </div>
                    <div  style={{display:"flex",margin:"10px 0px 10px 0px"}}>
                      <input className='input' type="text"style={{width:"110px"}}/>
                      <p style={{color:"white"}}>cvv</p>
                  </div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column-reverse",margin:"10px 0px 0px 60px"}} >
                      <input className='input' type="text" style={{width:"350px",height:"40px"}}/>
                <p style={{color:"white",marginLeft:"130px",fontSize:"18px",width:"300px"}}>الإسم المكتوب ببطاقة الإئتمان</p>
                </div>
                    <button onClick={close} className="formbut" style={{marginLeft:"150px",marginBottom:"50px"}}
                    >موافق</button>
              </div>
                
              </div>
      )
  }

  if(witch ===false ){
      return   (
       <div className="overlay"> 
            <Login closeform={close}/>
        </div>
      )
  
}else if(witch===true){
    return   (
      <div className="overlay" style={{width:"42%",height:"620px "}}> 
  
          <Registeration  closeform={close}/>
         {/* {this.style.backgroundColor:" #193745"} */}
      </div>
      )
    }

  
}
function Modal({show,closeModal,who,popup,Carinfo,frpass, isloading ,changfun}) {


  return (
  // <>
  // <ResetPassword Bkdrop={ Backdrop}/>
  // {
    show && (    
        <Fragment>
          {ReactDOM.createPortal(
          <Fragment>
              <Backdrop  />
              <Overlay  witch={who} close={closeModal} pop={popup}fgpass={frpass}
              isloading={ isloading} Carinfo={Carinfo} changfunction={changfun}/>
              </Fragment>,
          document.getElementById('modal')
          )}
        </Fragment>
      )
    // }
    //       </>
  )
}

export default Modal