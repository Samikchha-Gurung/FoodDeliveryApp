import RestaurantCard from "./RestaurantCard";    

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";




const Body=()=>{

    const [listOfRestaurant,setlistOfRestaurant]= useState([])
    const [filteredList,setFilteredList]=useState([]) 
    const [searchText,setSearchText]=useState("")

    useEffect(()=>{
        fetchData();
        
    },[]);

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json= await data.json()
console.log(json);
setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

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
                                <RestaurantCard    key={restaurant.info.id}
                                props={restaurant}/>
                                )
                                )
                                }
                          
                                </div>
                  </div>
    )
}

export default Body;