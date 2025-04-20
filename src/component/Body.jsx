import RestaurantCard from "./RestaurantCard";    

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../Assets/constant";
import useOnlineStatus from "../Assets/useOnlineStatus";

const Body=()=>{

    const [listOfRestaurant,setlistOfRestaurant]= useState([])
    const [filteredList,setFilteredList]=useState([]) 
    const [searchText,setSearchText]=useState("")

    useEffect(()=>{
        fetchData();
        
    },[]);

    const fetchData= async ()=>{
        const data= await fetch(HOME_API)
const json= await data.json()
console.log(json);

setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
                         <div className="filter">
                            <input type="text"className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                            <button className="btn" onClick={()=>{
                               const filteredList=listOfRestaurant.filter(
                                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                                setFilteredList(filteredList);
                            }}>Search
                            </button>
                            
                            <button className="filter-btn" onClick={()=>{
                             const filteredList=listOfRestaurant.filter(
                                (restaurant)=> restaurant.info.avgRating>4.3
                               
                            );
                            setFilteredList(filteredList);
                            }}>
                                Top Rated Restaurant</button>
                         </div>
                                <div className="res-container">
                          {
                                filteredList.map((restaurant)=>
                                (
                                    <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard   
                                    props={restaurant}/></Link>
                               
                                )
                                )
                                }
                          
                                </div>
                  </div>
    )
}

export default Body;