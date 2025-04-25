import "../Css/RestaurantCard.css"
import { CDN_URL } from "../Assets/constant"
import { useContext } from "react"
import UserContext from "./UserContext"
const RestaurantCard=(props) => {

    const {name,avgRating,areaName,cuisines,cloudinaryImageId}=props.props.info
    const {loggedInUser}=useContext(UserContext);
    
    
    return(
           <div className="m-4 p-4 w-[200px] h-[400px] bg-gray-200 rounded-lg hover:bg-gray-400" >
                  <img  className="rounded-lg" src={CDN_URL+ cloudinaryImageId }/>
                  <h1 className="font-bold py-4 text-lg">{name}</h1>
                  <h4>{avgRating}</h4>
                  <h4 className="truncate">{cuisines.join(", ")}</h4>
                  <h4>{areaName}</h4>
                  



           </div>
    )
}


// export const withAdLabel=(RestaurantCard)=>{
//        return(props)=>{
//               return(
//                      <div>
//                             <label>Ad</label>
//                             <RestaurantCard {...props}/>
//                      </div>
//               )
//        }
             
//     }

export default RestaurantCard;