import React, { Fragment, useState } from 'react'
import imge  from './pay.png'
import Footer from '../Footer';
import Modal from '../Modal/Modal';
const PaymentWay = () => {
  const [showModal,setshowModal] =useState(false) ;
  const [pop,setpop]=useState();
  const [errors, setErrors] = useState(false);
const [loading, setLoading] = useState(false);
  // const showpopup=()=>{
  //   setpop(true);
  //   madalshow;
  // }
  const [Pay,setPay]=useState({})
  const handleOnChange = (e) => {
    setPay((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Fragment>
      <div>
       <Modal popup={pop} show={showModal} closeModal={()=>setshowModal(false)}/>

      <div  style={{ backgroundImage: `url(${imge})` ,width:"500px",position:"absolute",top:"200px",height:"400px",backgroundRepeat: "no-repeat",
                  backgroundPosition:"center",backgroundSize:"100% ",left:"200px",borderRadius:"40%"}}></div>

        <div style={{display:"flex",flexDirection:"column",position:"absolute",left:"1112px",top:"332px"}}>

               <div style={{width:"300px",display:"flex",justifyContent:"space-around" ,marginBottom:"50px"}}>
                  <label  className='label' htmlFor='problem1'> بطاقة إئتمان</label> 
                  <input type="radio" id='problem1' name='stat'  onClick={()=>{setpop(true);
                                                                        setshowModal(true) }}
                  />
                </div>

                <div style={{width:"300px",display:"flex",justifyContent:"space-around" ,marginBottom:"50px"}}>
                  <label  className='label' htmlFor='problem2' >فودافون كاش</label> 
                  <input type="radio"id='problem2'name='stat' />
                </div>

                <div style={{width:"300px",display:"flex",justifyContent:"space-around" ,marginBottom:"50px"}}>
                  <label  className='label' htmlFor='problem3'>فورى</label>
                  <input type="radio"id='problem3'name='stat' />
                </div>

                <div style={{width:"300px",display:"flex",justifyContent:"space-around" ,marginBottom:"50px"}}>
                  <label  className='label' htmlFor='problem4'>فواتيرك</label> 
                  <input type="radio" id='problem4' name='stat'/>
                </div>

                

              
            
            </div>
            <button className='save' style={{ margin:"650px  600px 100px 500px",width:"243px",padding:"10px"}} type='submit'
           
                  > موافق</button>
      </div>
      <footer style={{}}>

<Footer />
</footer>
    </Fragment>
  )
}

export default PaymentWay