import { CDN_URL } from "../Assets/constant";
const ItemList=({items})=>{
    console.log(items);
    return(
        <div>
                {items.map((item) =>(
                     <div key={item?.card?.info?.id}
                     className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                     
                     >  
                       
                        <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice }</span>

                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4"> 
                    <div className="absolute">

                    <button className="p-2 mx-8 font-bold text-green-500 bg-white shadow-lg my-16 rounded-lg">ADD </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                        </div>
                    </div>
                ))}
                
             </div>
    )


}
export default ItemList;