import RestaurantCard from "./RestaurantCard";     
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../Assets/constant";
import useOnlineStatus from "../Assets/useOnlineStatus";
import UserContext from "./UserContext";

const Body=()=>{

    const [listOfRestaurant,setlistOfRestaurant]= useState([])
    const [filteredList,setFilteredList]=useState([]) 
    const [searchText,setSearchText]=useState("")

    const{setUserName, loggedInUser}=useContext(UserContext);

   
    useEffect(()=>{
        fetchData();  
    },[]);

    const fetchData= async ()=>{
        const data= await fetch(HOME_API)
const json= await data.json()


setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus=useOnlineStatus();

    if(onlineStatus=== false) return (
<h2>
    Looks like you are offline ! Please check your internet connection.
</h2>
    ) ;

    if(listOfRestaurant.length===0){
        return <Shimmer/>
    }



    return (
           <div className="body">
                         <div className="filter ">
                            <div className="search m-4 p-4 flex items-center gap-4">
                            <input type="text"className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                            <button className="px-4 py-0.5 bg-green-500 m-4 rounded-lg " onClick={()=>{
                               const filteredList=listOfRestaurant.filter(
                                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                                setFilteredList(filteredList);
                            }}>Search
                            </button>
                            
                            <button className="px-4 py-0.5 bg-gray-300 m-4 rounded-lg " onClick={()=>{
                             const filteredList=listOfRestaurant.filter(
                                (restaurant)=> restaurant.info.avgRating>4.3
                               
                            );
                            setFilteredList(filteredList);
                            }}>
                                Top Rated Restaurant</button>
                                <div className="search m-4 p-4 flex ">
                            <label className="m-2">Username : </label>
                            <input type="text"className="border border-solid border-black flex" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                            
                         </div>
                         </div>
                        
                                <div className="flex flex-wrap">
                          {
                                filteredList.map((restaurant)=>
                                (
                                    <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                                        {
                                    <RestaurantCard   
                                    props={restaurant}/> }
                                         </Link>
                               
                                )
                                )
                                }
                          
                                </div>
                  </div>
                  </div>
    )
}

export default Body;