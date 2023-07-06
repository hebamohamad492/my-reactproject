import Cookies from 'universal-cookie';
import React, { useEffect ,useState} from 'react';
import { Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff' 
import"./Login.css";
import Loader from '../Loader';
import Modal from '../Modal/Modal';
import Navbar from '../Navbar/Navbar'
import { Link ,useNavigate} from 'react-router-dom';



function Login({closeform}) {
  // const cookies = new Cookies();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [formerrors,setformerrors]=useState({})
  const [showModal,setshowModal] =useState(false) ;
  const [witch,setwitch]=useState()
const [fpass,setfpass]=useState(null)
  const Items={email,password}
const navigate= useNavigate()
const [type,settype]=useState('password')
const [icon,seticon]=useState(eyeOff)
const   HandlerTogel=()=>{
  if(type==='password'){
  seticon(eye);
  settype('text')
}else{
  settype('password');
  seticon(eyeOff)
}}
const[isLogged, setIsLogged] = useState(false);
const [errors, setErrors] = useState(false);
const [loading, setLoading] = useState(false);
const handleLogin =async (e)=>{
  const isValid = validate();
  if (isValid) {
    setLoading(true);
  fetch(" https://el-warsha-zymi.onrender.com/api/v1/users/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            credentials: "same-origin",
              headers:{
              'Content-Type':'application/json' } 
} 
      ).then(res=>{
          setLoading(false)
            console.log(res)
            if(res.ok===false){
              setErrors(true)
              setIsLogged(false)
            }else{
              setErrors(false)
              setIsLogged(true)
              closeform();
              window.location.reload();
            }
            setTimeout(() => {
                        setErrors(false);
                      }, 6000);
          return res.json()
        }).then(data=>{
          localStorage.setItem('user-info',JSON.stringify(data.data.user))
          localStorage.setItem('user',JSON.stringify(data.token))
          const token =  localStorage.getItem('user')
          console.log(JSON.parse(token))
          // cookies.set('user-Info', data.token, { path: '/' });
          console.log(data)
          ; 
      })
      .catch(err=>{
        console.log(err.messege)
      })
    }
    setTimeout(() => {
      setErrors(false);
      setformerrors(false)
    }, 3000);
  }

  const validate = () => {
  let errors = {};
  const regx=/^\S+@\S+\.\S+$/;
  if (!email) {
    errors.email= "Email is required!";
  }  else if(!regx.test(email)){
    errors.email = "Incorrect Email,please try again"; 
  }if (!password) {
    errors.password= "password is required!";
  } else if(password.length < 8 ){
    errors.password = "password must be at least 8 character "; 
  }
  setformerrors(errors);
  return !Object.keys(errors).length;
};
    const resetbutton=(e)=>{
      setemail("");
      setpassword("");
    }
  return (
    
    <div className='box'> 
    {/* <Loader isloading={loading} show={showLoader}/> */}
     <Modal  show={showModal} closeModal={()=>setshowModal(false)} Logged={isLogged}who={witch} frpass={fpass} />
     {/* <Navbar  Logged={isLogged} /> */}
      <div className='deleteBtn'onClick={closeform}   >X</div>
              {loading ?<Loader />:""}
    
               <div style={{marginTop:"90px"}}>
                <h2 style={{textAlgin:"center",marginLeft:"30%",marginBottom:"20px"}}>تسجيل الدخول</h2>
                <div>
                            </div >
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'10px',height:'80px' }}> 
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"10px"}}>
                    <p className="text-danger " role="alert" >{formerrors.email}</p> 
              <input type="email" id='mail'
                name='email' value={email}  onChange={(e)=>setemail(e.target.value)} className='input' 
              /></div>
            <label className='label' htmlFor="Email" > :الايميل</label>
            </div>

            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px'}}> 
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"10px"}}>
                    <p className="text-danger " role="alert" >{formerrors.password}</p>    
            <div  className='input'style={{border:"borderBox",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            
            <input type={type} name='password' 
                value={password}
                style={{   border: "hidden" ,width:"100%",backgroundColor:"transparent",outline:"none",height:"100%"}}
                onChange={(e)=>setpassword(e.target.value)}
                />
              <div style={{display:"flex",cursor:"pointer"}} onClick={HandlerTogel}><Icon icon={icon} size={24}/></div>
                </div></div>

            <label className='label' htmlFor="password">:الباسورد</label>
                </div>
               {errors&&( <div  className="text-danger " role="alert">"Invalid Email Or Password,Try Again"</div>)}
                <Link to='/' onClick={()=>{setfpass(true); setshowModal(true)}} style={{marginLeft:"300px",color:"darkblue",textDecorationLine:"none",fontSize:"18px",cursor:"pointer"}}>هل نسيت كلمة السر؟</Link>
            <div style={{display:"flex",marginBottom:"10px",justifyContent:'space-around'}}>
              <button type="reset"   className='formbut' onClick={resetbutton}
              >إعادة</button>
              <button type="submit" onClick={handleLogin} className='formbut'>دخول</button>
            </div>
            
            {/* <section> */}
            {/* <Loader/> */}
            <p style={{display:"flex",justifyContent:'center',marginTop:'80px'}} >

            <Link to='/Registeration' onClick={()=>{setshowModal(true);setwitch(true)}} style={{color:'#E09F3F'}}>إنشاء حساب</Link>
            لا تمتلك حساب؟</p>
            {/* </section> */}
            </div>
                {/* </form> */}
    </div>
  )
}

export default Login;