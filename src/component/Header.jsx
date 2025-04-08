import { CDN_LOGO } from "../Assets/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

    const [btnNameReact,setBtnNameReact]=useState("Login");
    return(
           <div className="app">
                  <div className="header">
                         <div className="logo-container">
                         <img className="logo" src={CDN_LOGO}/>
                         </div>
                         <div className="nav-items">
                                <ul>
                                       <li>
                                       <Link to="/">Home</Link></li>
                                       <li>
                                          <Link to="/about">About us</Link>
                                          </li>
                                       <li>
                                       <Link to="/contact">Contact us</Link></li>
                                       <li>Cart</li>
                                       <button className="login" onClick={()=>{
                                        btnNameReact==="login" ?
                                        setBtnNameReact("Logout") :setBtnNameReact("login")
                                       }}>
                                        {btnNameReact}
                                       </button>
                                </ul>
                         </div>     
                  </div>         
           </div>
    )
}

export default Header;