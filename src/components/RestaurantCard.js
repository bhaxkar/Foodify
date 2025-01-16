import { IMG_URL } from "../utils/constant";

const RestaurantCard = ({restaurant}) =>{

    // console.log(restaurant);
    const {name, cloudinaryImageId, cuisines} = restaurant.info;

    return(
        <div className="bg-[#f9f9f9] border-none rounded-xl shadow-md overflow-hidden transition-shadow duration-300 ease-in-out w-[300px] m-4 p-4 text-center hover:-translate-y-2.5 hover:shadow-xl">
            <img className="w-full h-[180px] object-cover border-b-4 border-b-[#ff6f61] rounded-t-xl mb-4" src={`${IMG_URL}${cloudinaryImageId}`} alt="Dish-image" /> 
            <h3 className="text-[1.6em] text-[#ff6f61] my-2 font-arial">{name}</h3> 
            <div className="text-[1.1em] text-[#555] my-2 font-arial">
                {
                    cuisines.map((cuisine, index) => ( 
                        <span className="inline-block bg-[#ff6f61] text-white rounded-xl px-2 py-1 m-1 text-[0.9em] font-arial" key={index}  > {cuisine} </span> 
                    )) 
                } 
            </div> 
        </div>
    )
};
export default RestaurantCard;