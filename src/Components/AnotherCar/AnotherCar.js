import React ,{Fragment, useState}from 'react'
import { useNavigate } from 'react-router-dom'
import "../MyCar/MyCar.css"
import "../Login/Login.css"
import "../Navbar/Navbar.css"
import car from './car2.png'
import Footer from '../Footer';
import Modal from '../Modal/Modal';
import Loader from '../Loader'
function AnotherCar() {
  const [Carinfo,setCarinfo]=useState({brand:"",yearModel:"",engineCapacity:"",motorPower:"",bodyType:"",followAgency:"",agencyName :"",agencyAddress:"",agencyPhone:""})
  const [showModal,setshowModal] =useState(false) ;
  const [pop,setpop]=useState(false);
  // const navigate= useNavigate()
    const handleOnChange = (e) => {
      setCarinfo((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } 
    const [errors, setErrors] = useState(false);
    const token =  localStorage.getItem('user')
const [loading, setLoading] = useState(false);
const SubmitHandler = async(e)=>{
    console.log(Carinfo);
    setLoading(true);
    fetch("https://el-warsha-zymi.onrender.com/api/v1/cars",{
        method:"POST",
        body:JSON.stringify(Carinfo),
        headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        Authorization:`Bearer ${JSON.parse(token)}`
          } 
        },
        { withCredentials: true}
    ).then(res=>{
        setLoading(false)
        console.log(res)
        if(res.ok===false){
          setErrors(true);
          setTimeout(() => {
          setErrors(false);
          }, 6000);
        }else{
          setErrors(false)
        }
      return res.json()
    }).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err.messege)
                      })
      }
  return (
  <Fragment>
    <Modal popup={pop} Carinfo={Carinfo} show={showModal}changfun={handleOnChange} closeModal={()=>setshowModal(false)}/>
      {loading ?<Loader />:""}
      <div className='MyCarclass'  style={{display:"flex",justifyContent:"flex-end"}} >
      <div className='backgcar' style={{display:"flex",backgroundImage: `url(${car})`,hight:"1000px"}}> </div>
        <div className='formclass '  style={{width:"900px",top:"150px" ,position:"absolute",display:"inline-block"}} > 
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
                <input type="text"  name='brand' className='input'style={{textAlign:"center",hight:"20px",borderRadius:"20px"}}
                    value={Carinfo.brand}
                    onChange={handleOnChange}/>
                    <label className='label' htmlFor="mark" style={{width:"200px"}}>ماركت السيارة</label>
            </div>
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
                <input type="text"name='yearModel'  className='input'
                style={{hight:"20px",borderRadius:"20px",width:"120px",marginRight:"50px",textAlign:"center"}}
                value={Carinfo.yearModel}
                onChange={handleOnChange}
                />
                <label className='label' htmlFor="yearModel" style={{width:"200px"}}>موديل عام</label>
            </div>
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
              <input type="text"name="engineCapacity"  className='input'style={{textAlign:"center",hight:"20px",borderRadius:"20px"}}
                value={Carinfo.engineCapacity}
                onChange={handleOnChange}
              />
              <label className='label' htmlFor="engineCapacity"  style={{width:"200px"}}> سعة المحرك</label>
              </div>
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
              <input type="text"name='motorPower'   className='input'style={{textAlign:"center",hight:"20px",borderRadius:"20px"}}
                value={Carinfo.motorPower}
                onChange={handleOnChange}
              />
              <label className='label' htmlFor="motorPower" style={{width:"200px"}}>قوة المحرك</label>
            </div>
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
              <input type="text"name='bodyType'    className='input'style={{textAlign:"center",hight:"20px",borderRadius:"20px"}}
                value={Carinfo.bodyType}
                onChange={handleOnChange}
              />
              <label className='label' htmlFor="bodyType" style={{width:"200px"}}>نوع الهيكل</label>
            </div>
              <p style={{display:"flex",marginLeft:"600px" , fontFamily: 'Vazirmatn', fontWeight:'400',fontSize: '30px' }}>.تابعة للتوكيل</p>
            <div style={{display:"flex",marginLeft:"550px"}}>
                <div style={{width:'100px',display:"flex"}}>
                  <label className='label' htmlFor='Register1'>لا</label> 
                  <input type="radio" id='Register1' name='followAgency'
                    value={false}
                    onChange={handleOnChange}/>
                </div>
                <div style={{width:"100px",display:"flex"}}>
                  <label className='label' htmlFor='Register2' >نعم</label> 
                  <input type="radio"id='Register2'name='followAgency'
                  value={true}
                  onChange={handleOnChange}
                  onClick={()=>{setpop(false);
                    setshowModal(true)
                  }}/>
                </div> </div>
            {errors&&( <div  className="text-danger " role="alert">"you are not loged in , please log in to get access"</div>)}
                <button className='save'onClick={SubmitHandler} style={{marginTop:'50px',width:"243px",padding:"10px",marginBottom:"100px"}} type='submit'> حفظ</button>
            </div></div>
        <div style={{display:"flex",marginTop:"1000px"}}>
          <Footer />
        </div>
    </Fragment>
  )
}
export default AnotherCar