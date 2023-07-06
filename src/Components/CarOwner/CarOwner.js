import React, { Fragment ,useState} from 'react'
import  './CarOwner.css'
import  '../Login/Login.css'
import { Link,useNavigate} from "react-router-dom";
import Footer from '../Footer';
import { search } from 'react-icons-kit/fa';
import { Icon } from 'react-icons-kit'
import * as L from "leaflet";
import {location2} from 'react-icons-kit/icomoon/location2'
import { LayersControl,MapContainer, TileLayer, Marker, Popup , useMapEvents } from 'react-leaflet'


const { BaseLayer } = LayersControl

function LocationMarker() {
  const LeafIcon = L.Icon.extend({
    options: {}
  });
  var  greenIcon = new LeafIcon({
    iconUrl:"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [35, 51],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position} icon={greenIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

function CarOwner() {


  const appmenu = [
    { id: "1", name: "1-Burger" ,lan:31.610134425338188,lat:30.174433169870884},
    { id: "2", name: "2-Pasta",lan:31.71175795585478,lat:30.226656512891832},
    { id: "3", name: "3-Green Soup" ,lan:31.465938875280862,lat:30.27055014311996},
    { id: "4", name: "4-Salad",lan:31.368435217623052,lat:30.231402715475443},
    { id: "5", name: "5-Pastrami",lan:32.1759303047782,lat:30.561883863682805 }, 
    { id: "6", name: "1-Burger" ,lan: 32.51101329729236,lat:30.030676301857145},
    { id: "7", name: "2-Pasta" ,lan:32.30776623625918,lat:30.750901422408777},
    { id: "8", name: "3-Green Soup",lan:32.29917517226389,lat:30.606613498750253 },
    { id: "9", name: "4-Salad",lan: 32.271194369098005,lat:30.679720180043528},
    { id: "10", name: "5-Pastrami",lan: 32.24012366128803,lat: 30.572182547810733 },
    { id: "10", name: "5-Pastrami",lan: 31.240121660325944,lat:30.015506702947093 },
    { id: "10", name: "5-Pastrami",lan:31.330758861745714,lat:  30.126923908714478 },
    { id: "10", name: "5-Pastrami",lan:  31.242181595281927,lat: 30.084154540197517},
  ];
  // 30.174433169870884, 31.61013442533818//// الشروق
  // 30.226656512891832, 31.71175795585478////
  // 30.27055014311996, 31.465938875280862//
  // 30.231402715475443, 31.368435217623052//
  // 30.561883863682805, 32.1759303047782//
  // 30.030676301857145, 32.51101329729236//
  // 30.750901422408777, 32.30776623625918//
  // 30.606613498750253, 32.29917517226389
  // 30.679720180043528, 32.271194369098005//
  // 30.572182547810733, 32.24012366128803//

  // 30.015506702947093, 31.240121660325944
  // 30.126923908714478, 31.330758861745714
  // 30.084154540197517, 31.242181595281927





          return(
            <Fragment >
              <div style={{}}>

              <div style={{display:"flex",flexDirection:'row',backgroundColor:"white",
                    justifyContent: 'space-around',padding: '20px 30px',position: 'absolute',left: '405px',top: '114px',
                    borderRadius:' 10px' ,width:"600px",marginBottom:"300px"}}>

                 <input type='search' style={{borderRadius:"30px",width:"400px",fontWeight:"bolder",textAlign:"center",fontSize:"larger"}} placeholder='البحث'/>
             <Icon size={35}id='' className='default' icon={search}/>
            </div>
<div id="map">


<MapContainer center={[30.604045049716973, 32.23993958161383]} zoom={6} scrollWheelZoom={false}>

<LayersControl>
            <BaseLayer checked name="OpenStreetMap">
            <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
            </BaseLayer>
            <LocationMarker />
          </LayersControl>
  
    {appmenu.map(appmenu=>(
      <Marker position={[appmenu.lat, appmenu.lan]} key={appmenu.id}>
        <Popup position={[appmenu.lat, appmenu.lan]} >
          <div>
            <h2>{appmenu.name}</h2>
          </div>
        </Popup>

      </Marker>
    ))}
</MapContainer>









    </div>
            <div style={{display:"flex",margin:"1100px 0px 0px 100px",height:"100px"}} >
                <button  className="login">طلب تصليح</button>
            </div>
            <div style={{display:"flex",marginTop:"100px"}}>
                  <Footer /> 
              </div>
    </div>
            </Fragment>
          )
}

export default CarOwner
