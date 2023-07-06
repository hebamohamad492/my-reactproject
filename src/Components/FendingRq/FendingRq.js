import React, { Fragment,useState } from 'react'
import './FendingRq.css'
import '../Login/Login.css'
import Loader from '../Loader';
import Footer from '../Footer';
const FendingRq = () => {
  const [errors, setErrors] = useState(false);
const [loading, setLoading] = useState(false);
const[problem,setProblem]=useState()
const handleOnChange = (e) => {
  setProblem((prev) => ({
    ...prev,
   [e.target.name]: e.target.value,
  }));
};
  return (
    <Fragment>

        <p className='reqhead'> طلب تصليح</p>
        <p className='reqhead2'>من السئ معرفة أن لديك مشكلة </p>

        <div> 
          <div className='backlogo'></div>
          <div>
          {loading ?<Loader />:""}
            <p className='thp'style={{left:"800px",top:"290px"}}>حدد مشكلتك</p>
            <div style={{display:"flex",flexDirection:"column",position:"absolute",left:"1112px",top:"382px"}}>
               <div style={{width:"300px",display:"flex",justifyContent:"space-around",marginBottom:"20px"}}>
                  <label  className='label' htmlFor='problem1'> عفشة</label> 
                  <input type="radio" id='problem1' name='stat' />
                </div>
                <div style={{width:"300px",display:"flex",justifyContent:"space-around",marginBottom:"20px"}}>
                  <label  className='label' htmlFor='problem2' >كهرباء</label> 
                  <input type="radio"id='problem2'name='stat' />
                </div>

                <div style={{width:"300px",display:"flex",justifyContent:"space-around",marginBottom:"20px"}}>
                  <label  className='label' htmlFor='problem3'>كوتش</label>
                  <input type="radio"id='problem3'name='stat' />
                </div>

                <div style={{width:"300px",display:"flex",justifyContent:"space-around",marginBottom:"20px"}}>
                  <label  className='label'style={{marginLeft:""}} htmlFor='problem4'> أعطال ميكانيكية</label> 
                  <input type="radio" id='problem4' name='stat'/>
                </div>

                <div style={{width:"300px",display:"flex",justifyContent:"space-around",marginBottom:"20px"}}>
                  <label  className='label' htmlFor='problem5' >لاأدرى</label> 
                  <input type="radio"id='problem5'name='stat' />
                </div>

                <div style={{width:"300px",display:"flex",justifyContent:"space-around",marginBottom:"20px"}}>
                  <label  className='label' style={{marginLeft:""}} htmlFor='problem6'>أخرى</label>
                  <input type="radio"id='problem6'name='stat' />
                </div>
            
            </div>
          </div>
          <div style={{position:"absolute",top:"200px"}} >
            <p className='psubhead' style={{position:'absolute', top:" 511px",left:"1032px",width:"214px"}}>هل تريد ورشة محددة؟</p>
            <div style={{display:"flex",position:"absolute",left:" 900px",marginBottom:"300px",top:"600px" }}>
                <div style={{width:'100px',display:"flex"}}>
                  <label htmlFor='no'>لا</label> 
                  <input type="radio" id='no' name='choice'  />
                </div>

                <div style={{width:"100px",display:"flex"}}>
                  <label htmlFor='yes' >نعم</label> 
                  <input type="radio"id='yes'name='choice'
        
                   />
                </div>
        
            </div>
          </div>
          {/* <div style={{ display:"flex",position:"absolute"}} > */}

          <button className='save' style={{ margin:"750px  1000px 100px 100px",width:"243px",padding:"10px"}} type='submit'> التالى</button>
          {/* </div> */}
        </div>
        <footer style={{}}>

                 <Footer />
              </footer>
    </Fragment>
  )
}

export default FendingRq