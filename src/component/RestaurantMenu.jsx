import React from 'react'
import { useEffect ,useState} from 'react'
import Shimmer from './Shimmer';
const RestaurantMenu = () => {
   const[resInfo, setResInfo]=useState(null);

  useEffect(()=>{
    fetchMenu();
  },[])
  const fetchMenu= async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId&catalog_qa=undefined&submitAction=ENTER")
    const json= await data.json();

    console.log(json);
    setResInfo(json.data)
  };
    
  if(resInfo=== null ) return <Shimmer/> 
  

  const {name,cuisines,costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  console.log(itemCards)
 
  return   (
    <div className='menu'>
      <h1>{name}</h1>

      <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
      <h3>Menu</h3>
 
    
      <ul >
        {itemCards.map((item)=> (
         <li key={item.card.info.id}>{item.card.info.name} -{"Rs. "} {item.card.info.defaultPrice /100}</li> 
        )

        )}
      </ul>
      </div>
  );
};

export default RestaurantMenu;