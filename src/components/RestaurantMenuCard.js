import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"

const RestaurantMenuCard = ({menuItems}) =>{

   // console.log(menuItems);

   const {name, imageId} = menuItems?.card?.info || {};

   const dispatch = useDispatch();
   const handleAddItem = (item)=>{
    dispatch(addItem(item));
   }



    return(
        <div className="max-w-xl border-2 border-red-300 mt-2 rounded-sm flex flex-col mx-auto p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div>
                <img className="w-80 h-70 border-2 border-gray-300" src={`${IMG_URL}${imageId}`} alt={name} />
            </div>
            <div className="mx-auto my-auto">
                <h1 className="text-gray-700 font-medium text-lg">{name}</h1>
            </div>
            <div className="mx-auto my-auto">
            <button className="cursor-pointer text-white font-semibold text-lg p-2 border-2 border-red-700 bg-red-500 rounded-lg" onClick={() => handleAddItem(menuItems.card.info)} >Add Item ⊕</button>
            </div>
        </div>
    )
}

export default RestaurantMenuCard;