import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/component/Body"; 
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./src/component/Error";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import RestaurantMenu from "./src/component/RestaurantMenu";
import UserContext from "./src/component/UserContext";
import {Provider} from "react-redux";
import appStore from "./src/Assets/appStore";
import Cart from "./src/component/Cart";
const AppLayout=()=>{
       const [userName, setUserName]=useState();
       

       useEffect(()=>{
              const data={
                  name: "Samikchha Gurung",  
              }
              setUserName(data.name);
       },[]);
      
       return (
              <Provider store={appStore}>
              <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
              <div className="App">
                     <Header/>
                     <Outlet/>
                     <Footer/>
                     </div>
                     </UserContext.Provider>
                     </Provider>
       )
}
const AppRouter=createBrowserRouter([
       { path:"/",
              element:<AppLayout/>,
              children :[
                     {
                            path:"/",
                            element:<Body/>,
                     },
                     { path:"/about",
                            element:<About/>,
                            errorElement:<Error/>,
                     },
                     { path:"/contact",
                            element:<Contact/>,
                            errorElement:<Error/>,
                     }, 
                     { path:"/restaurants/:resId",
                            element:<RestaurantMenu/>
                     
                     },  
                     {
                            path:"/cart",
                            element:<Cart/>
                     },  
                     
                     
              ],
              errorElement:<Error/>,
},


              


]);
      

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
       <RouterProvider router={AppRouter}/>
      </React.StrictMode>);

{/* <RouterProvider router={AppRouter}/> */}

