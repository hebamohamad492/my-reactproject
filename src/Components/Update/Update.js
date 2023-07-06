import React, { Fragment,useState } from 'react'
import '../Myfile/Myfile.css'
import '../Login/Login.css'
import Footer from '../Footer';
function Update() {
  const [MyData,setMyData]=useState({workshopName:"",workshopNumber:"",WorkshopOwner:""})
  const Updatefily =async ()=>{
    console.warn(MyData)
    let result = await fetch("",{
              method:"post",
              body:JSON.stringify({MyData}),
              headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
              } 
            });
            result=await result.json();
            console.warn(result);  
          }
     const handleOnChange = (e) => {
            setMyData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          };
  return (
    <Fragment>
        
    <div style={{display:"flex",flexDirection:'row-reverse',marginBottom:"1000px"}}>
      <div style={{display:"flex" }}>
            <div className='fily'></div>

            <div style={{display:"flex",flexDirection:"column",  position:"absolute",top:"500px",right:"30px"}}>
                {/* <div  style={{display:"flex",marginBottom:'20px'}}> 
              < input type="text"className='input'name='Name'
              value={MyData.Name}
              onChange={handleOnChange}
              />
              <label className='label'  htmlFor='user'>اسم المستخدم</label>

                </div>
                <div  style={{display:"flex",marginBottom:'20px'}}>
              < input type="email"className='input' name='email'
              value={MyData.email}
              onChange={handleOnChange}
              />
              <label className='label' htmlFor='emal'>الإيميل</label> 

                </div> */}
              <br/><br/>
              <div  style={{display:"flex",marginBottom:'20px'}}>
              < input type="text"className='input'name='workshopName'
              value={MyData.workshopName}
              onChange={handleOnChange}
              />
              <label className='label' htmlFor='nam'>اسم الورشة</label>
                </div>
                <br/><br/>
                <div  style={{display:"flex",marginBottom:'20px'}}>
              < input type="text"className='input' name='workshopNumber'/>
              <label className='label' htmlFor='num'>رقم الورشة</label>
                </div>
                <br/><br/>
                <div  style={{display:"flex",marginBottom:'20px'}}>
              < input type="text"className='input' name='WorkshopOwner'
              value={MyData.WorkshopOwner}
              onChange={handleOnChange}
              />
              <label className='label' htmlFor='own' style={{width:"150px"}}>صاحب الورشة</label>
                </div>
            </div>
      </div>
      <div style={{display:"flex"}}> 
            <div className=' shopimage'></div>
            <div style={{display:"flex",flexDirection:"column",position:"absolute",top:'600px',left:'20px',textAlign:"center"}}>
                <p>الوصف</p>
                <p style={{width:"400px"}}>نمتلك أكثر من فرع متخصصين فى الصيانة فى طريق الاسماعيلية القاهرة الصحراوى 
                    متوافرين فى جميع الأوقات خدمتنا متوافرة 24 ساعةو خاصةفى الليل</p>
            </div>
      </div>
                <button className='formbut' style={{position:"absolute",left:"100px",top:"800px"}} onClick={Updatefily}>تعديل</button>
    </div>
    <div style={{display:"flex",marginTop:"300px"}}>
<Footer />
    </div>


    </Fragment>
  )
}

export default Update;