import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Assets/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex]=useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo[2]?.card?.card?.info || {};

  const itemCards =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // console.log(resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories=resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter((c) => {
      const type = c.card?.card?.["@type"];
      return (
        type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    });

    // console.log(categories)

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories accordion */}
     {
      categories.map((category,index)=>(
        // Controlled component
      <RestaurantCategory
       key={category?.card?.card?.title} 
       data={category?.card?.card}
       showItems={index=== showIndex ? true:false}
        setShowIndex={()=>setShowIndex(index)}
       />

      ))

     } 
  
    
    </div>
  );
};

export default RestaurantMenu;