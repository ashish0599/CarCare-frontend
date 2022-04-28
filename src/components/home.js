import React from "react";
import { Appcontext } from "./context";
import "../css/home.css";
import Nav from "./nav";

import jwt from "jsonwebtoken";
import { useHistory } from "react-router";


function Home (){
    let history = useHistory()
    let token = window.localStorage.getItem("auth")
    let userData = jwt.decode(token)
    const{ setServiceType} = React.useContext(Appcontext)

    async function order(value){
        try{
            if( token  && userData.exp*1000 >= Date.now()){
                if(value===1){
                    setServiceType("$ 99")
                    history.push("./appointment_form")
                }else if( value===2){
                    setServiceType("$ 199")
                    history.push("./appointment_form")
                }else{
                    setServiceType("$ 299")
                    history.push("./appointment_form")
                }
                
            }else{
                history.push("/login")
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <Nav/>
        
        
         <div className="div2">
            <p className="p2">We Provide Wash Active treatment & packages  Germkleen Active treatment New Paint Shine & Shield Coating VentureShield Paint Protection</p>
           </div>
        
        
        <div className="titleDiv" id="firstDiv">
           <div className="titleContent">
                <p className="t1 t2">keep</p>
                <p className="t1 t2">Your Car</p>
                <p className="t1 t2">LOOKING NEW</p>
                <button className="bookActionBtn" onClick={()=>{history.push("/appointment_form")}}>Book Now<i className="fas fa-arrow-right rightArw"></i></button>
            </div>
           
        </div>

<div className="priceingParent">
            <div className="priceingTitle">
                <div>
                    <p className="c1">AFFORDABLE PRICING FOR EVERYONE</p>
                </div>
                <div className="priceDescription">
                   
                    
                </div>
            </div>
            <div className="orderParent" id="paisa">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 orderRow">
                        <div>
                            <div>
                                <p className="o1">$ 99</p>
                                <p className="o2">BASIC</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Wheel Shine</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Tire Dressing</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Windows in and out</p>
                                <p><i className="fas fa-times" style={{color:"red"  , marginRight:"15px"}}></i>Interior Vaccum</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Dashboard Clean</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Febreze Odor Eliminator</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{order(1)}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderRow2">
                        <div>
                            <div>
                                <p className="o1">$ 199</p>
                                <p className="o2">DELUXE</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Wheel Shine</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Tire Dressing</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Windows in and out</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Interior Vaccum</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Dashboard Clean</p>
                                <p><i className="fas fa-times" style={{color:"red" ,marginRight:"15px"}}></i>Febreze Odor Eliminator</p>
                                <p><i className="fas fa-times" style={{color:"red" , marginRight:"15px"}}></i>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{order(2)}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 orderRow3">
                        <div>
                            <div>
                                <p className="o1">$ 299</p>
                                <p className="o2">ULTIMATE</p>
                            </div>
                            <div>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Exterior Hand Wash</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Wheel Shine</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Tire Dressing</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Windows in and out</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Interior Vaccum</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Dashboard Clean</p>
                                <p><i className="fas fa-check" style={{color:"green" , marginRight:"15px"}}></i>Febreze Odor Eliminator</p>
                                <p><i className="fas fa-check" style={{color:"red" , marginRight:"15px"}}></i>Hand Dry</p>
                                <button className="bookBtn" onClick={()=>{order(3)}}>Order Now <i className="fas fa-arrow-right rightArw"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

<div className="workedBrands">
            <div className="servicBrands">
                <p className="sr1">BRANDS WE'VE COVERED</p>
            </div>
            <div>
                    
            <div className="container-fluid">
                <div className="row" style={{marginBottom:"40px"}}>
                    
                    <div className="col-lg-3 col-md-6" >
                        <div  className="brandName" >
                            <img src="./images/ferrari.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/benz.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/mini.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/tesla.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>

            </div>
            </div>
            </div>
 <div>
               <div className="container-fluid">
                <div className="row" style={{marginBottom:"60px"}}>
                    
                    <div className="col-lg-3 col-md-6" >
                        <div  className="brandName" >
                            <img src="./images/kia.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/bmw.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/ford.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="brandName">
                            <img src="./images/bent.jpg" alt="brand" style={{width:"100%" , height:"100%"}}/>
                        </div>
                    </div>

            </div>
            </div>
            </div>

</div>
        
        <div className="footer" id="aboutUs_contactUs">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 aboutDiv">
                        <p className="footer1">ABOUT US</p>
                        <p className="c2 desp"> we also offer such detailing help as interior vacuuming, polishing, 
                            waxing and many others... to Make cars clean, shiny and glossy is our main specialty! 
                            On par with dedicated and thorough exterior and interior washing services,
                            we also offer such detailing help as interior vacuuming, polishing, 
                            waxing xteal detailing, vacuuming and deep cleaning, and interior detailing....</p>
                    </div>
                   
                    <div  className="col-lg-4">
                         <div className="footerIcons">
                            <div>
                             <i className="far fa-clock fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">open to Contact</p>
                                <p className="footer2">8:00 am - 9:00 pm</p>
                            </div> 
                        </div>
                        <div className="footerIcons">
                            <div>
                                <i className="fas fa-phone-square-alt fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">(+91) 6782999289</p>
                                <p className="footer2">Careforcars@gmail.com</p>
                            </div>               
                        </div>
                       <div className="footerIcons">
                            <div>
                                <i className="fas fa-map-marker-alt fa-2x ficon"></i>
                            </div>
                            <div>
                                <p className="footer2">18-C Kaylana street GTB NAGAR Jodhpur-342005 </p>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home;
