import React, { Fragment ,useState} from 'react'
import { Link } from 'react-router-dom';
import './Myfile.css'
import about  from './about.png';
import alerts  from './alerts.png';
import car  from './car.png';
import exit  from './exit.png';
import fily  from './fily.png';
import persons  from './person.png';

import Footer from '../Footer';
import Switch from '../Switch/Switch';
function Myfile() {


  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <Fragment>

    <div style={{display:"flex",flexDirection:'row-reverse' ,marginBottom:"200px"}}>
      <div style={{display:"flex" }}>
        <div  style={{display:"flex",height:"500px",justifyContent:"space-around"}}>

            <div className='fily'>
            <img src={file} style={{borderRadius:"50%",width:"200px",height:"200px"}}/>
            </div>

            <input type="file" onChange={handleChange}  style={{width:"110px",borderRadius:"0%",fontSize:"10px",
                                        fontFamily:"cursive",margin:"300px 200px 0px 0px",height:"100px",cursor:"pointer"}}/>
        </div>
        {/* </div> */}

            <div style={{display:"flex",flexDirection:"column", position:"absolute",top:"500px",right:"200px"}}>

            <Link to="/Warshety" className='link' > ورشتى - <div style={{ backgroundImage: `url(${car})` ,backgroundRepeat: "no-repeat",width:"60px",marginLeft:"10px"}}></div></Link>
            <div style={{display:"flex",justifyContent:"space-between",width:"700px"}}>
            {<Switch/>}
            <Link to="/Home" className='link' >تنبيهات -<div style={{ backgroundImage: `url(${alerts})` ,backgroundRepeat: "no-repeat",width:"60px",marginLeft:"10px"}}> </div></Link>
            </div>
            <Link to="/Home" className='link' >المصلحين -<div style={{ backgroundImage: `url(${persons})`,backgroundRepeat: "no-repeat" ,width:"60px",marginLeft:"10px"}}></div></Link>
            

            <Link to="/Update" className='link' >تعديل الملف الشخصى -<div style={{ backgroundImage: `url(${fily})` ,backgroundRepeat: "no-repeat",width:"60px",marginLeft:"10px"}}> </div></Link>
            

            <Link to="/Home" className='link'>معلومات عن التطبيق -<div  style={{ backgroundImage: `url(${about})`,backgroundRepeat: "no-repeat" ,width:"60px",marginLeft:"10px"}} ></div></Link>
            

            <Link to="/Home" className='link'>تسجيل الخروج -<div style={{ backgroundImage: `url(${exit})` ,backgroundRepeat: "no-repeat",width:"60px",marginLeft:"10px"}} ></div></Link>
            </div>
      </div>
      <div style={{display:"flex",flexDirection:"column" ,justifyContent:"center"}}> 
            <div className=' shopimage'>
              <img src={file} style={{height:"400px",width:"400px"}}/>
            </div>
            <div style={{display:"flex",flexDirection:"column",position:"absolute",top:'600px',left:'20px',textAlign:"center" ,}}>
                <p  className='p'>اسم الورشة: الدمرداش</p>
                <p  className='p'>رقم الورشة :36548 </p>
                <p  className='p'>صاحب الورشة: محمد الدمرداش</p>
                <p  className='p' style={{width:"500px"}}>نمتلك أكثر من فرع متخصصين فى الصيانة فى طريق الاسماعيلية القاهرة الصحراوى 
                     متوافرين فى جميع الأوقات خدمتنا متوافرة 24 ساعةو خاصةفى الليل</p>
                
            </div>

            
      </div>

    </div>
     <footer style={{display:"flex",marginTop:"400px"}}>

        <Footer />
     </footer>

    </Fragment>
  )
}

export default Myfile