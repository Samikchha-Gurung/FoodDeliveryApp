import "../Css/RestaurantCard.css"
import { CDN_URL } from "../Assets/constant"
const RestaurantCard=(props) => {

    const {name,avgRating,areaName,cuisines,cloudinaryImageId}=props.props.info
    
    
    return(
           <div className="res-card" >
                  <img  className="res-logo" src={CDN_URL+ cloudinaryImageId }/>
                  <h1>{name}</h1>
                  <h4>{avgRating}</h4>
                  <h4>{cuisines.join(", ")}</h4>
                  <h4>{areaName}</h4>

           </div>
    )
}

export default RestaurantCard;