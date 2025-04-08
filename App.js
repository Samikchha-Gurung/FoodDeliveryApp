import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/component/Body"; 
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import Error from "./src/component/Error";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import RestaurantMenu from "./src/component/RestaurantMenu";

const AppLayout=()=>{
      
       return (
              <div className="App">
                     <Header/>
                     <Outlet/>
                
                     <Footer/>
                     </div>
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
                     
                     
              ],
              errorElement:<Error/>,
},


              


]);
      

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);



