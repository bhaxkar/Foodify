import { IMG_URL } from "../utils/constant";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const FoodItem = ({name, id, description, imageId, price}) => {
    const dispatch = useDispatch();
    
    const handleRemoveItem = () => {
        dispatch(removeItem({id}));
    }
    
    return (
        <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
                <img 
                    src={`${IMG_URL}${imageId}`} 
                    alt={name} 
                    className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <h3 className="text-gray-600">₹{price/100}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
            <button 
                onClick={handleRemoveItem}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
                Remove 
            </button>
        </div>
    );
}

export default FoodItem;