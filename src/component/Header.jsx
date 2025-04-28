import { CDN_LOGO } from "../Assets/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Assets/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnNameReact,setBtnNameReact]=useState("Login");

    const cartItems=useSelector((store)=>store.cart.items);

    const onlineStatus=useOnlineStatus();
       const {loggedInUser}=useContext(UserContext);
       // console.log({loggedInUser})

    return(
           <div className="app">
                  <div className="flex justify-between bg-pink-100 shadow-lg mt-2 sm:bg-amber-200 lg:bg-green-200">
                         <div className="logo-container">
                         <img className="w-56" src={CDN_LOGO}/>
                         </div>
                         <div className="flex items-center">
                                <ul className="flex p-4 m-4">
                                   <li className="px-4">Online Status:{onlineStatus ? "🟢" :"🔴"}</li>
                                       <li className="px-4">
                                       <Link to="/">Home</Link></li>
                                       <li className="px-4">
                                          <Link to="/about">About us</Link>
                                          </li>
                                       <li className="px-4">
                                       <Link to="/contact">Contact us</Link></li>
                                       <li className="px-4">
                                          <Link to ="/cart">🛒- ({cartItems.length})</Link></li>
                                       <button className="login" onClick={()=>{
                                        btnNameReact==="login" ?
                                        setBtnNameReact("Logout") :setBtnNameReact("login")
                                       }}>
                                        {btnNameReact}
                                       </button>
                                       <li className="px-4 font-bold">{loggedInUser}</li>
                                </ul>
                         </div>     
                  </div>         
           </div>
    )
}

export default Header;