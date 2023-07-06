import React, { Fragment, useState,useEffect, } from 'react'
import './Navbar.css'
import { json, Link,NavLink ,useNavigate} from "react-router-dom";
import Modal from '../Modal/Modal'
import axios from 'axios'
import Cookies from 'universal-cookie';

const NavFunction=({auther})=>{
  // console.log(auther)
  if (auther==="Customer") {
    return (
      <div style={{display:"flex",flexDirection:"row",width:"900px",justifyContent:"space-around",}}> 
      
        <NavLink to='/About' className="navclass"> معلومات عننا </NavLink>
      <NavLink to='/PaymentWay' className="navclass"> أرشيف</NavLink>
      <NavLink to='/CarOwner' className="navclass"> مفضلاتى</NavLink>
      <NavLink to='/Myfile' className="navclass"> قطع غيار</NavLink>
      <NavLink to='/AnotherCar'className="navclass"> سيارة أخرى</NavLink>
      <NavLink to='/Myfile' className="navclass">  ملفى</NavLink>
      <NavLink to='/CarOwner'className="navclass"> الرئيسية</NavLink></div>
    )
  } else if (auther==="Workshop") {
    return ( 
     
      <div style={{display:"flex",flexDirection:"row",width:"900px",justifyContent:"space-around",}}><NavLink to='/About' className="navclass"> معلومات عننا </NavLink>
      <NavLink to='/PaymentWay' className="navclass"> أرشيف</NavLink>
      <NavLink to='/CarOwner' className="navclass"> الورش الأخرى</NavLink>
      <NavLink to='/Myfile' className="navclass"> قطع غيار</NavLink>
      <NavLink to='/AnotherCar'className="navclass"> المصلحين</NavLink>
      <NavLink to='/Myfile' className="navclass">  ملفى</NavLink>
      <NavLink to='/CarOwner'className="navclass"> الرئيسية</NavLink></div>)
  } else {
    return (
      <div style={{display:"flex",flexDirection:"row",width:"900px",justifyContent:"space-around",}}>
        <NavLink to='/About' className="navclass"> معلومات عننا </NavLink>
      <NavLink to='/PaymentWay' className="navclass"> أرشيف</NavLink>
      <NavLink to='/Myfile' className="navclass">  ملفى</NavLink>
      <NavLink to='/CarOwner'className="navclass"> الرئيسية</NavLink></div>
    )
  }
}
function Navbar() {
  const [showModal,setshowModal] =useState(false) ;
  const [witch,setwitch]=useState()
  const [authempty,setAuthE]=useState(false)
  const [userImage,setUserImage]=useState() 
  const [userEmail,setUserEmail]=useState() 
  const [userRolle,setUserRolle]=useState() 
  const items =  localStorage.getItem('user-info')
  // console.log(items)
const navigate=useNavigate()
// const [userCockies,setUserCockeis]=useState()
  // const LoggedIn=(e)=>{
  //   const data={
  //     authntication:true
  //   }
  //   axios.get('https://el-warsha-zymi.onrender.com/api/v1/users/isLoggedIn',data)
  //   .then( res=>{
  //                 console.log(res)
  //                 if(res.ok===false){
  //                 }else{
  //                 }
  //               return res.json()
  //     }).catch(err=>{   
  //      console.log(err)

  //   })
  //   }


  // // const fetchInfo = () => {
  // //   return fetch('https://el-warsha-zymi.onrender.com/api/v1/users/isLoggedIn')
  // //     .then((res) => res.json())
  // //     .then((d) => console.log(d))
  // // }
  // useEffect(() => {
  //   LoggedIn();
  // }, []);

  useEffect(() => {
    
    if (items=== null || items=== ""||items===[]) {
      setAuthE(true);
    }else if(items!== null || items!== ""||items!==[]) {
      setAuthE(false);
      setUserImage(JSON.parse(items).image)
      setUserEmail(JSON.parse(items).email)
      setUserRolle(JSON.parse(items).rolle)
    }
  }, []);
  const cookies = new Cookies();
  const Logout=()=>{
       localStorage.clear()
      setAuthE(true)
      navigate('/')
     cookies.remove('user-Info', [])
  }
  window.onbeforeunload = () => {
    localStorage.removeItem('user-Info');
  }
  return (
    <Fragment>
          
        <Modal  show={showModal} closeModal={()=>setshowModal(false)} who={witch} />
          <nav className='nav'>
              <div className="w-logo"> 
                    <p className="tit"> 
                      الورشة</p> 
            </div>
          {authempty?
              
            <Fragment>
              <div className='container'>
                <div  style={{display:"flex",marginRight:"30px"}} className='container2'>
                  <button  className='login' onClick={()=>{setshowModal(true);setwitch(false);} }>تسجيل الدخول</button>
                  <button  className='register'  onClick={()=>{setshowModal(true);setwitch(true)}}>ابدأ الأن</button>
                </div> 
                <div style={{display:"flex",flexDirection:"row",width:"700px",justifyContent:"space-around"}}>
                  <NavLink to='/About' className="navclass"> معلومات  عننا </NavLink>
                  <NavLink to='/PaymentWay' className="navclass"> الورش الأخرى</NavLink>
                  <NavLink to='/Myfile' className="navclass"> قطع غيار</NavLink>
                  <NavLink to='/CarOwner 'className="navclass"> الرئيسية</NavLink>
                </div>
              </div>
</Fragment> 
  :
           <Fragment>
             <div className='container2'style={{display:"flex",alignItems:"center",marginLeft:"10px"}}>
            <div style={{display:"flex",flexDirection:"column",marginRight:"10px",width:"280px",height:"70px",paddingLeft:"5px" ,borderRadius:"20px",border:"1px solid white"}}>
                <img src={userImage} style={{width:"40px",height:"40px",borderRadius:"50%",marginLeft:"10px",marginTop:"3px"}}/> 
              <div style={{width:"50px",color:"darkgoldenrod"}}>{userEmail} </div> 
              </div>
              <button  className='register'  onClick={Logout}>تسجيل الخروج</button>
           </div>
           {<NavFunction auther={userRolle}/>}
           </Fragment>
          }














       </nav>
   

    </Fragment>

  )
}

export default Navbar