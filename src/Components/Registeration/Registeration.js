import Navbar from '../Navbar/Navbar'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff' 
import React, { useState,useRef } from 'react'
import '../Login/Login.css';
import {useNavigate} from 'react-router-dom';
import Loader from '../Loader';
// import axios from 'axios'
function Registeration({closeform}) {
const [RegisterData,setRegisterData]=useState({fName:"",lName:"",email:"",password:"",passwordConfirm:"",rolle:"",image:""})
const [formerrors,setformerrors]=useState({})
const navigate= useNavigate()
const [type,settype]=useState('password')
const [type2,settype2]=useState('password')

const [icon,seticon]=useState(eyeOff)
const [icon2,seticon2]=useState(eyeOff)
const   HandlerTogel=()=>{
  if(type==='password'){
  seticon(eye);
  settype('text')
}else{
  settype('password');
  seticon(eyeOff)
}}
const HandlerTogel2=()=>{
  if(type2==='password'){
  seticon2(eye)
  settype2('text')
}else{
  settype2('password');
  seticon2(eyeOff)
}}
  
const handleOnChange = (e) => {
  setRegisterData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
const [image, setImage] = useState();
function handleChange(e) {
  console.log(e.target.files)
  RegisterData.image=(e.target.files[0]);
  console.log(RegisterData.image)
  console.log(e.target.value)
  setImage(URL.createObjectURL(e.target.files[0]));
}
// const handleImageChange = (e) => {
//   setRegisterData((prev) => ({
//     ...prev,
//     image: e.target.files[0],
//   }));
// }
const validate = () => {
  let errors = {};
  const regx=/^\S+@\S+\.\S+$/;
  if (!RegisterData.fName) {
    errors.fName = "First Name is required!"; 
  } else if( RegisterData.fName.length < 3 ){
    errors.fName = "Name must be at least 3 character & no more 10 ch "; 
  }
  if (!RegisterData.lName) {
    errors.lName = "Last Name is required!";
  }else if(RegisterData.lName.length < 3  ){
    errors.lName = "Name must be at least 3 character  "; 
  }
  if (!RegisterData.email) {
    errors.email= "Email is required!";
  }  else if(!regx.test(RegisterData.email)){
    errors.email = "Incorrect Email,please try again"; 
  }
   if (!RegisterData.password) {
    errors.password= "password is required!";
  } else if(RegisterData.password.length < 8 ){
    errors.password = "password must be at least 8 character "; 
  }
  if (!RegisterData.passwordConfirm) {
    errors.passwordConfirm = "passwordConfirmword is required!";
  }else if(RegisterData.passwordConfirm !== RegisterData.password){
    errors.passwordConfirm= "this not match password "; 
  }
  if (!image) {
    errors.image = "Image is required!";
  }else if(RegisterData.lName.length < 3  ){
    errors.lName = "Name must be at least 3 character  "; 
  }
  if (!RegisterData.rolle) {
    errors.rolle= "this  is required! \\you must chose one";
  }
  setformerrors(errors );
  return !Object.keys(errors).length;
};
const inputFile = useRef(null);
const onButtonClick = () => {
  // `current` points to the mounted file input element
  inputFile.current.click();
};
const [errors, setErrors] = useState(false);
const [loading, setLoading] = useState(false);
const [successful,setSuccessful]=useState(false)
const HandelSignup = async (e)=>{
  // e.preventDefault();
  const formData = new FormData();
      formData.append("fName", RegisterData.fName);
      formData.append("lName", RegisterData.lName);
      formData.append("email", RegisterData.email);
      formData.append("password", RegisterData.password);
      formData.append("passwordConfirm", RegisterData.passwordConfirm);
      formData.append("image", RegisterData.image);
  const isValid = validate();
  if (isValid) {
    setLoading(true);
    console.log(formData);
    console.log(RegisterData.image)
//     try {
//       let  response =await fetch("https://el-warsha-zymi.onrender.com/api/v1/users/signup",
//       {
//         method: "POST",
//         body: formData,
//       }
//       );
//       if(!response.ok){
//         throw new Error("invalid")
//       }else{
//         console.log(response)
//       }
//       const data=await response.json()
//       console.log(data)
//   }catch(error){
//     console.log(error.message)
//   }
// }
   fetch("https://el-warsha-zymi.onrender.com/api/v1/users/signup",{
            method:"POST",
            body:formData,
            headers:{
              'Content-Type':'application/json',
              'Accept':'application/json'
            } 
          }).then(res=>{
            setLoading(false)
              console.log(res)
              if(res.ok===false){
                setErrors(true)
              }else{
                setErrors(false)
                setSuccessful(true)
                closeform()
              }
            return res.json()
          }).then(data=>{
            // if(data){
            //  localStorage.setItem('user-info',JSON.stringify(data.data.user))
          // }
            //  localStorage.setItem('user',JSON.stringify(data.token))
             console.log(data)
        }).catch(err=>{
          console.log(err)
        })
           
      
      setTimeout(() => {
        setErrors(false);
        setformerrors(false)
      }, 3000);
    }
}
// const submitHandler= async(e)=>{
// // e.preventDefault()
// const formData=new FormData();
//       formData.append("fName", RegisterData.fName);
//       formData.append("lName", RegisterData.lName);
//       formData.append("email", RegisterData.email);
//       formData.append("password", RegisterData.password);
//       formData.append("passwordConfirm", RegisterData.passwordConfirm);
//       formData.append("image", RegisterData.image);
// console.log(formData)
// console.log(RegisterData)
//   const isValid = validate();
//     if (isValid) {
//     setLoading(true);
//  await axios.post("https://el-warsha-zymi.onrender.com/api/v1/users/signup",RegisterData)
//   .then( res=>{
//               setLoading(false)
//                 console.log(res)
//                 if(res.status!==200){
//                   setErrors(true)
//                   setTimeout(() => {
//                     setErrors(false);
//                   }, 8000);
//                 }else{
//                   setSuccessful(true)
//                 }
//               return res.json()
//     }).then(data=>{
//                 console.log(data)
//     }).catch(err=>{
//   setLoading(false)
//      console.log(err)
//   })
//   }
//   setTimeout(() => {
//     setErrors(false);
//     setformerrors(false)
//   }, 3000);
  
// }

  return (
    
    <div >
      {/* <form onSubmit={submitHandler}> */}
      <div className='deleteBtn'onClick={closeform}   >X</div>
      {loading ?<Loader />:""}
      {successful?<div></div>:""}
        <div style={{marginTop:"10px",height:"1000px",display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",height:"90px",justifyContent:"space-around"}}>
            <div style={{borderRadius:"50%",backgroundColor:"white" ,display:"flex",width:"70px" ,marginLeft:"10px",height:"70px"}}>
            <img src={image} style={{borderRadius:"50%",width:"70px",height:"70px"}}/>
            </div>
            <p className="text-danger errormasseg  errormasseg" role="alert" >{formerrors.image}</p>
            <input type="file" onChange={handleChange} name="image" accept="image/*" style={{ display:"none"}}  ref={inputFile} />
          <button  className='input-file'   style={{ width:"100px",borderRadius:"20px",fontSize:"15px",padding:"2px" ,height:"30px",fontFamily:"cursive",margin:"30px 120px 10px 0px"}}
           onClick={onButtonClick}>chooseIamge</button>
          </div>
          <div  style={{display:"flex",justifyContent:"space-around"}}>
            <div  style={{display:"flex",justifyContent:'center',flexDirection:"column",marginBottom:"0px"}}> 
                    <label className='label doubl2' htmlFor="fName"  > :الإسم الأول</label>
                <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"0px"}}>
                    <p className="text-danger errormasseg  " role="alert" >{formerrors.fName}</p>    
                    <input type="text" id='' name='fName' className='input  doubl'
                        onChange={handleOnChange}
                        value={RegisterData.fName}
                        /> </div>
                </div>
            
            <div  style={{display:"flex",flexDirection:"column",justifyContent:"center"}}> 
            <label className='label doubl2' htmlFor="lastName">:الإسم الأخير</label>
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"px"}}>
            <p className="text-danger  errormasseg " role="alert" >{formerrors.lName}</p> 
                <input type="text"name='lName' className='input doubl' 
                      onChange={handleOnChange}
                      value={RegisterData.lName} />
                      </div></div>
                      </div>

            <div  style={{display:"flex",justifyContent:"center"}}> 
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"10px"}}>
              <p className="text-danger errormasseg " role="alert" >{formerrors.email}</p>
              <input type="email"name='email'className='input '
                onChange={handleOnChange}  
                value={RegisterData.email}
                /></div>
              <label className='label' htmlFor="email" > :الايميل</label>
            </div>
            <div  style={{display:"flex",justifyContent:'center'}}> 
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"10px"}}>
                  <p className="text-danger errormasseg  " role="alert" >{formerrors.password}</p>
                <div  className='input'style={{border:"borderBox",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                  <input type={type}name='password' minlength="8"style={{   border: "hidden" ,width:"100%",backgroundColor:"transparent"
                    ,outline:"none",height:"100%"}}  required 
                    onChange={handleOnChange}
                    value={RegisterData.password}s/>
                  <div style={{display:"flex",cursor:"pointer"}}
                   onClick={HandlerTogel}><Icon icon={icon} size={22}/></div>
                </div></div>
              <label className='label' htmlFor="pass">:كلمة السر</label>
            </div>

          <div  style={{display:"flex",justifyContent:'center'}}> 
            <div style={{display:"flex",flexDirection:"column-reverse",marginLeft:"10px"}}>
            <p className="text-danger errormasseg " role="alert">{formerrors.passwordConfirm}</p>
              <div  className='input'style={{border:"borderBox",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                  <input type={type2} name='passwordConfirm' 
                    style={{border: "hidden" ,width:"100%",backgroundColor:"transparent",outline:"none",height:"100%"}} required  onChange={handleOnChange}
                    value={RegisterData.passwordConfirm} />
                  <div style={{display:"flex",cursor:"pointer"}}onClick={HandlerTogel2}>
                    <Icon icon={icon2} size={22}/></div>
              </div>
            </div>
              <label className='label' htmlFor="passwordConfirm"style={{width:"180"}}>:تأكيدكلمةالسر</label>
            </div>                          
    
             <div style={{display:"flex",flexDirection:"row-reverse"}}>

              <p style={{display:"flex",justifyContent:"center" , fontFamily: 'Vazirmatn', fontWeight:'bolder'
              ,marginTop:"30px",fontSize: '30px',width:"300px",margin:"30pX 70px 0px 10px"}}>..تسجل ك</p>
            <div style={{display:"flex",flexDirection:"column",width:"400px"}}>
            <p className="text-danger errormasseg  " role="alert" >{formerrors.rolle}</p> 
                <div style={{width:"200px",display:"flex",justifyContent:"space-around"}}>
                  <label htmlFor='Register1' className='label' style={{color:"black"}}> صاحب سيارة</label> 
                  <input type="radio"  name='rolle' value="customer" 
                  onChange={handleOnChange}/>
                </div>
                <div style={{width:"200px",display:"flex",justifyContent:"space-around"}}>
                  <label  htmlFor='Register2' className='label' style={{color:"black"}} >صاحب ورشة</label> 
                  <input type="radio"name='rolle'value="workshop"
                   onChange={handleOnChange} />
                </div>
                <div style={{width:"200px",display:"flex",justifyContent:"space-around"}}>
                  <label  htmlFor='Register3' className='label' style={{color:"black"}}>صنيعى</label>
                  <input type="radio"name='rolle' value="mechanic" 
                  onChange={handleOnChange}/>
                </div>
              
            </div> 
          </div>
                  <button type='submit' className='registerbutton'
                  style={{height:"40px",margin:"5px 100px 200px 35%",width:"180px",fontSize:"25px",fontWeight:"bolder" }} 
           onClick={HandelSignup} >التالى</button>
          </div>

      {/* </form> */}
    </div>
    )
}

export default Registeration;
