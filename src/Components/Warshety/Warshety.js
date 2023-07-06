// import * as React from 'react';
// import{ Rating} from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';/
import React,{useState}from 'react'
import ReactStars from "react-rating-stars-component";
import Footer from '../Footer';
import './Warshety.css'
import '../Myfile/Myfile.css'
import Rating from '../Rating/Rating';
const Warshety = () => {
  
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div> 
      <div style={{display:"flex" ,justifyContent:"space-between",width:"100%"}}> 

      <div style={{display:"flex",flexDirection:"column"}}>
    <div className=' shopimage'>
    </div>
     <div  style={{position:"absolute",top:"550px",left:"100px"}}><Rating/></div> 
      </div>
    <div style={{display:"flex",flexDirection:"column",position:"absolute",left:"800px",top:"200px",textAlign:"center" ,}}>
        <p className='p' >اسم الورشة: الدمرداش</p>
        <p className='p'>رقم الورشة :36548 </p>
        <p className='p'>صاحب الورشة: محمد الدمرداش</p>
        <p className='p' style={{width:"500px"}}>نمتلك أكثر من فرع متخصصين فى الصيانة فى طريق الاسماعيلية القاهرة الصحراوى 
             متوافرين فى جميع الأوقات خدمتنا متوافرة 24 ساعةو خاصةفى الليل</p>
        
    </div>
    <div className='detail'>تفاصيل</div>
    {/* <legend style={{marginLeft:"10000px"}}>التعليقات  */}
      {/* <div></div> */}
    {/* </legend> */}
    <div  className='comment_container'>
      <legend style={{fontSize:"25px",fontStyle:"italic"}}> التعليقات</legend>
      <fieldset style={{width:"auto",border:" solid white"}}>

      <div className='comments'style={{marginLeft:"30%"}}>
        <img/>kleajwefdq;lwkdl;aka
        nm</div>
      <div className='comments'style={{marginLeft:"30%"}}> 
        <img/>dcasjkld
      nmn</div>
      <div className='comments'style={{marginLeft:"30%"}}>
      <img/>equRQLQJKWDJKJEFD
        km;l</div>
      </fieldset>
    </div>
</div>
<footer style={{display:"flex",marginTop:"1300px"}}>

<Footer />
</footer>

</div>
  )
}

export default Warshety