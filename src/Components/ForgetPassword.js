import Loader from './Loader';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Modal from './Modal/Modal';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios'
function  ForgetPassword({closeform}) {
    const [showModal,setshowModal] =useState(false) ;
    const [successful,setSuccessful]=useState(false)
    //  const ForgetPassword = async ()=>{
      const [email, setemail] = useState("");
      const [loading, setLoading] = useState(false);
      const [errors, setErrors] = useState(null);
 const submitHandler= async(e)=>{
    // e.preventDefault()
    const data={
        email:email
    }
    const isValid = validate();
      if (isValid) {
      setLoading(true);
   await axios.post('https://el-warsha-zymi.onrender.com/api/v1/users/forgotpassword',data)
    .then( res=>{
                setLoading(false)
                  console.log(res)
                  if(res.status!==200){
                    setErrors(true)
                    setTimeout(() => {
                      setErrors(false);
                    }, 8000);
                  }else{
                    setSuccessful(true)
                  }
                return res.json()
      }).then(data=>{
                  console.log(data)
      }).catch(err=>{
    setLoading(false)
       console.log(err)
    })
    }
    setTimeout(() => {
      setErrors(false);
      setformerrors(false)
    }, 3000);
    
  }
  
 
const [formerrors,setformerrors]=useState({})
 const validate = () => {
  let errors = {};
  const regx=/^\S+@\S+\.\S+$/;
  if (!email) {
    errors.email= "Email is required!";
  }  else if(!regx.test(email)){
    errors.email = "Incorrect Email,please try again"; 
  }
  setformerrors(errors );
  return !Object.keys(errors).length;
};
// const data={
//       email:email
//   }
// 
//   const isValid = validate();
//   if (isValid) {
//   setLoading(true);
  //  fetch("https://el-warsha-zymi.onrender.com/api/v1/users/forgotpassword",{
  //           method:"POST",
  //           body:JSON.stringify(data),
  //           headers:{
  //             'Content-Type':'application/json',
  //             'Accept':'application/json'
  //           } 
  //         }).then(res=>{
  //           setLoading(false)
  //             console.log(res)
  //             if(res.ok===false){
  //               setErrors(true)
  //             }else{
  //               setSuccessful(true)
  //             }
  //             setTimeout(() => {
  //               setErrors(false);
  //             }, 6000);
  //           return res.json()
  //         }).then(data=>{
  //           console.log(data)
  //       }).catch(err=>{
  //       })


      // }}
  return (
    
    <div className=''style={{height:'250px'}}> 
     <Modal  show={showModal} closeModal={()=>setshowModal(false)} />
     {loading ?<Loader />:""}
     {/* <form > */}
        <div className='deleteBtn'onClick={closeform}   >X</div>
         <h2 style={{textAlgin:"center",marginLeft:"30%",marginBottom:"20px"}}>نسيت كلمة السر؟</h2>
            <div  style={{display:"flex",justifyContent:'flex-end',marginTop:'30px',marginBottom:"20px" }}> 
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"10px"}}>
            <p className="text-danger errormasseg " role="alert" >{formerrors.email}</p>
            <input type="email" id='mail'name='email' value={email}  onChange={(e)=>setemail(e.target.value)} className='input' 
                placeholder='email'/></div>
            <label className='label' htmlFor="Email" style={{}}> :الايميل</label>
            </div>
        
             {errors&&( <div  className="text-danger " role="alert">"The Email you entered does not exist"</div>)}
              {successful&&(<div style={{color:"darkgreen",width:"100%",textAlign:"center"}}>"Password Reset Link has been sent to your mail. Please Check it out"</div>)}
            <button type='submit' className='registerbutton'  
                  style={{height:"40px",margin:"5px 100px 20px 170px",width:"180px",fontSize:"25px",fontWeight:"bolder" }} 
                  onClick={submitHandler}>التالى</button>    
  
    </div>
  )
}

export default ForgetPassword;