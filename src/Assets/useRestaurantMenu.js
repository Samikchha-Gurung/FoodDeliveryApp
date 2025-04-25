import { useEffect, useState } from "react";
import axios from "axios";
import { MENU_API } from '../Assets/constant';

const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData= async() => {
        const data= await axios.get(
            MENU_API + resId
          )
        // console.log(data)

        const js= data.data.data.cards
         setResInfo(js)
      // console.log(js)
    
        
    };

    //const restaurantInfo = 
   // const menuItems = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
    return resInfo
};

export default useRestaurantMenu;