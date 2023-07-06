
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'; 
import React, { useState ,useEffect} from 'react';
import '../Components/Login/Login.css';
import {useNavigate,useParams,useSearchParams} from 'react-router-dom';
import axios from 'axios';
import '../Components/Modal/Modal.css';
import Modal from './Modal/Modal';
import Loader from './Loader';

const ResetPassword = ({closeform}) => {
    const [password,setpassword]=useState("");
    const [passwordConfirm,setpasswordConfirm]=useState("");
    const [icon,seticon]=useState(eyeOff)
    const [type,settype]=useState('password')
    const  HandlerTogel=()=>{
      if(type==='password'){
        seticon(eye);
        settype('text')
      }else{
        settype('password');
        seticon(eyeOff)
      }}
const navigate= useNavigate()
const [formerrors,setformerrors]=useState({})
const [errors, setErrors] = useState(null);
const [successful,setSuccessful]=useState(false)
const [loading, setLoading] = useState(false);

const validate = () => {
  let errors = {};
   if (!password) {
     errors.password= "password is required!";
    } else if(password.length < 8 ){
    errors.password = "password must be at least 8 character "; 
  }
  if (!passwordConfirm) {
    errors.passwordConfirm = "passwordConfirmword is required!";
  }else if(passwordConfirm !== password){
    errors.passwordConfirm= "this not match password "; 
  }
  setformerrors(errors );
  return !Object.keys(errors).length;
};

const [showModal,setshowModal] =useState(false) ;
  const [witch,setwitch]=useState()

const { token} = useParams();
const submitHandler=(e)=>{
  const data={
    password:password,
    passwordConfirm:passwordConfirm
  }
  const isValid = validate();
  if (isValid) {
    setLoading(true);
    console.log(token)
  axios.patch(`https://el-warsha-zymi.onrender.com/api/v1/users/resetPassword/${token}`,data)
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
                  setshowModal(true);
                  setwitch(false);
                }
              return res.json()
    }).then(data=>{
                console.log(data)
    }).catch(err=>{
  setErrors(true)
  setLoading(false)
     console.log(err)
  })
  }
}

  return (
    <div className='overlay' style={{height:"400px"}}>
        <Modal  show={showModal} closeModal={()=>setshowModal(false)} who={witch} />
        {loading ?<Loader />:""}
 <div className='deleteBtn'onClick={closeform}   >X</div>
<div  style={{display:"flex",justifyContent:'center',marginTop:"60px",marginBottom:"30px"}}> 
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"10px"}}>
                  <p className="text-danger errormasseg  " role="alert" >{formerrors.password}</p>
                <div  className='input'style={{border:"borderBox",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                  <input type={type}name='password' minlength="8"style={{   border: "hidden" ,width:"100%",backgroundColor:"transparent"
                    ,outline:"none",height:"100%"}}  required 
                    onChange={(e)=>{setpassword(e.target.value)}}
                    value={password}/>
                  <div style={{display:"flex",cursor:"pointer"}}
                   onClick={HandlerTogel}><Icon icon={icon} size={22}/></div>
                </div></div>
              <label className='label' htmlFor="pass">:كلمة السر</label>
            </div>

          <div  style={{display:"flex",justifyContent:'center',marginBottom:"30px"}}> 
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"10px"}}>
            <p className="text-danger errormasseg " role="alert">{formerrors.passwordConfirm}</p>
              <div  className='input'style={{border:"borderBox",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                  <input type={type} name='passwordConfirm' 
                    style={{border: "hidden" ,width:"100%",backgroundColor:"transparent",outline:"none",height:"100%"}} 
                    value={passwordConfirm} onChange={(e)=>{setpasswordConfirm(e.target.value)}}/>
                  <div style={{display:"flex",cursor:"pointer"}}onClick={HandlerTogel}>
                    <Icon icon={icon} size={22}/></div>
              </div>
            </div>
              <label className='label' htmlFor="passwordConfirm"style={{width:"180"}}>:تأكيدكلمةالسر</label>
            </div>  
            {errors&&( <div  className="text-danger " role="alert">" "</div>)}
              {successful&&(<div style={{color:"darkgreen",width:"400px",textAlign:"center"}}>"Password has been reset Successfully.😊"</div>)}
            <button type='submit' className='registerbutton'onClick={submitHandler}
                  style={{height:"40px",margin:"5px 100px 200px 35%",width:"180px",fontSize:"25px",fontWeight:"bolder" }} 
             >حفظ</button>                        
                  {/* </form> */}
    </div>
  )
}

export default ResetPassword