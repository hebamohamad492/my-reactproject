import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./MyCar.css"
import "../Login/Login.css"
import "../Navbar/Navbar.css"
import Footer from '../Footer';
import Modal from '../Modal/Modal';

function MyCar() {
  const [Carinfo,setCarinfo]=useState({brand:"",yearModel:"",engineCapacity:"",motorPower:"",bodyType:"",followAgency:"",agencyName :"",agencyAddress:"",agencyPhone:""})
  const [showModal,setshowModal] =useState(false) ;
  const [pop,setpop]=useState();
  const navigate= useNavigate()
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const AddCar = async ()=>{
    console.log(Carinfo);
    let result = await fetch("https://el-warsha-zymi.onrender.com/api/v1/cars",{
              method:"POST",
              body:JSON.stringify(Carinfo),
              headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
              } 
            })
            console.log('hellow')
            result=await result.json();
            console.warn(result);
            // localStorage.setItem('user',JSON.stringify(result))    ;
            // navigate('/CarOwner')   
            } 
  
  const handleOnChange = (e) => {
    setCarinfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    
  }

const submitHandler=(e)=>{
  AddCar()
      // e.preventDefault();
      console.log(Carinfo);
    }
  return (
    <Fragment>
    <div className='MyCarclass ' style={{display:"flex",justifyContent:"flex-end"}} >
                 <Modal popup={pop} Carinfo={Carinfo} show={showModal}changfun={handleOnChange} closeModal={()=>setshowModal(false)}/>

      <div  style={{height: "500px"}}>
          <div className='backgcar' >
              <img src={file} style={{ width: "500px",height:" 285px",borderRadius:"10%"}}  />
          </div>
          <input type="file" onChange={handleChange} style={{position:"absolute",left:"200px",top:"630px"}} name="imm"/>
      </div>
        <div className='formclass '   style={{width:"900px",top:"150px" ,position:"absolute",display:"inline-block"}} > 
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
                    <input type="text"  name='brand' className='input'style={{hight:"20px",borderRadius:"20px",textAlign:"center"}}
                    value={Carinfo.brand}
                    onChange={handleOnChange} />
                    <label className='label' htmlFor="brand"  style={{width:"200px"}}>ماركت السيارة</label>
            </div>
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
                <input type="text"name='yearModel'  className='input'
                style={{hight:"20px",borderRadius:"20px",width:"120px",marginRight:"50px",textAlign:"center"}}
                value={Carinfo.yearModel}
                onChange={handleOnChange}/>
                <label className='label' htmlFor="yearModel"  style={{width:"200px"}}>موديل عام</label>
            </div>

            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
              <input type="text"name="engineCapacity"  className='input'style={{hight:"20px",borderRadius:"20px",textAlign:"center"}}
                value={Carinfo.engineCapacity}
                onChange={handleOnChange}/>
              <label className='label' htmlFor="capaci ty"  style={{width:"200px"}}> سعة المحرك</label>
              </div>
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
              <input type="text"name='motorPower'   className='input'style={{hight:"20px",borderRadius:"20px",textAlign:"center"}}
                value={Carinfo.motorPower}
                onChange={handleOnChange}/>
              <label className='label' htmlFor="motorPower " style={{width:"200px"}}>قوة المحرك</label>
            </div>
            <div  style={{display:"flex",justifyContent:'flex-end',marginBottom:'20px',marginRight:"90px"}}> 
              <input type="text"name='bodyType'    className='input'style={{hight:"20px",borderRadius:"20px",textAlign:"center"}}
                value={Carinfo.bodyType}
                onChange={handleOnChange}/>
              <label className='label' htmlFor="bodyType"  style={{width:"200px"}}>نوع الهيكل</label>
            </div>
              <p style={{display:"flex",marginLeft:"600px" , fontFamily: 'Vazirmatn', fontWeight:'400',fontSize: '30px' }}>.تابعة للتوكيل</p>
            <div style={{display:"flex",marginLeft:"550px"}}>
                <div style={{width:'100px',display:"flex"}}>
                  <label className='label' htmlFor='Regist er1'>لا</label> 
                  <input type="radio" id='Register1' name='followAgency'   value="false"
                onChange={handleOnChange}
                   />
                </div>
                <div style={{width:"100px",display:"flex"}}>
                  <label className='label' htmlFor='Regist er2' >نعم</label> 
                  <input type="radio"id='Register2'name='followAgency'
                    value={true}
                onChange={handleOnChange}
                  onClick={()=>{setpop(false);
                    setshowModal(true)}}
                  />
                </div>
        
            </div>
              
                
                <button className='save'style={{marginTop:'50px',width:"243px",padding:"10px",marginBottom:"200px"}} type='submit'
                onClick={AddCar}> حفظ</button>
            </div>
    </div>
            <footer style={{display:"flex",marginTop:"500px"}}>

                 <Footer />
              </footer>
    </Fragment>
  )
}

export default MyCar
