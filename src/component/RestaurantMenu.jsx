import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Assets/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo[2]?.card?.card?.info || {};

  const itemCards =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")} - {costForTwoMessage}</h3>
      <h3>Menu</h3>

      <ul>
        {itemCards.slice(2).flatMap((item) => {
          const newData = item?.card?.card?.itemCards;
          return (
            newData?.map((newItem) => {
              const { id, name, defaultPrice, price } = newItem.card.info;
              const displayPrice = defaultPrice || price || 0;
              return (
                <li key={id}>
                  {name} - ₹{displayPrice / 100}
                </li>
              );
            }) || []
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;