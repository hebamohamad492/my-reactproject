
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import About from './Components/About/About';
import Home from './Components/Home/Home';
import  MyCar from './Components/MyCar/MyCar';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from 'react';
import CarOwner from './Components/CarOwner/CarOwner';
import AnotherCar from './Components/AnotherCar/AnotherCar';
import Myfile from './Components/Myfile/Myfile';
import Modify from './Components/Update/Update';
import FendingRq from './Components/FendingRq/FendingRq';
import PaymentWay from './Components/PaymentWay/PaymentWay';
// import Home1 from './Components/Home1/Home1';
import Warshety from './Components/Warshety/Warshety';
import Rating from './Components/Rating/Rating';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import Loader from './Components/Loader';
import Login from './Components/Login/Login';
import Registeration from './Components/Registeration/Registeration';
import Switch from './Components/Switch/Switch';
import MyComponent from './Components/MyComponent';
function App() {
  
  return (
    <div style={{backgroundColor:"#345D68"}}>

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/MyCar' element={<MyCar/>}/>
  <Route path='/AnotherCar' element={<AnotherCar/>}/>
  <Route path='/CarOwner' element={<CarOwner/>}/>
  <Route path='/Myfile' element={<Myfile/>}/>
  <Route path='/Update' element={<Modify/>}/>
  <Route path='/FendingRq' element={<FendingRq/>}/>
  <Route path='/PaymentWay' element={<PaymentWay/>}/>
  <Route path='/Warshety' element={<Warshety/>}/>
  <Route path='/Rating'element={<Rating/>}/>
  <Route path='/Registeration'element={<Registeration/>}/>
  <Route path='/Login'element={<Login/>}/>
  <Route path='/ForgetPassword'element={<ForgetPassword/>}/>
  <Route path='/resetPassword/:token'element={<ResetPassword/>}/>
  <Route path='/Loader'element={<Loader/>}/>
  <Route path='/Switch'element={<Switch/>}/>
  {/* <Route path='/MyComponent'element={<MyComponent/>}/> */}




</Routes>



</BrowserRouter>

    </div>




  );
}

export default App;
