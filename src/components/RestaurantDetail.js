import { useParams } from "react-router-dom";
import { IMG_URL } from "../utils/constant";
import ShimmerRestaurantDetail from "./ShimmerRestaurantDetail";
import RestaurantMenuCard from "./RestaurantMenuCard";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantDetail = () =>{

    // Reading dynamic URL parameters
    const params = useParams();
    // console.log(params);

    const { restaurantInfo, itemInfo, loading } = useRestaurantMenu(params.id);
    // console.log(restaurantInfo)
   // console.log(itemInfo)

    if (loading) return <ShimmerRestaurantDetail/>;

    const {name, city, locality, avgRating, cloudinaryImageId} = restaurantInfo;

    return(
        <>
        <div className="max-w-4xl border-2 border-red-300 mt-2 rounded-sm flex mx-auto p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div>
                <img className="w-80 h-72 object-cover rounded-t-sm" src={`${IMG_URL}${cloudinaryImageId}`} alt={name}/> 
            </div>
            <div className="mx-auto my-auto">
                <h3 className="text-2xl font-bold text-gray-700">{name}</h3>
                <h4 className="text-xl font-semibold text-gray-700">{`${locality}, ${city}`}</h4>
                <h5 className="text-lg font-medium text-gray-700">{`${avgRating} stars`}</h5>
            </div>
        </div>
            { itemInfo.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 p-5">
                    {itemInfo.map((item) => (
                        <RestaurantMenuCard 
                            menuItems={item} 
                            key={item?.card?.info?.id}
                        /> 
                    ))}
                </div>
            ) : (
                <div className="mt-4 mb-36 flex justify-center">
                    <h3 className="text-gray-500 text-3xl font-semibold">Oops, menu not found </h3>
                </div>
            )} 
        </>
        
    )
}
export default RestaurantDetail;