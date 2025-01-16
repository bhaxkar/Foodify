import { useState, useEffect } from "react";
import {RESTAURANT_MENU_API} from "../utils/constant"

const useRestaurantMenu = (resID) =>{

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [itemInfo, setItemInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getRestaurentInfo();
    },[resID])
    
    async function getRestaurentInfo() {

        try {
            const restaurentInfoData = await fetch(RESTAURANT_MENU_API + resID)
    
            const jsonRestaurentInfoData = await restaurentInfoData.json();
            // console.log(jsonRestaurentInfoData);
    
            const restaurentData = jsonRestaurentInfoData?.data?.cards?.[2]?.card.card.info || null;
            // console.log(restaurentData);
            setRestaurantInfo(restaurentData);
    
            const menuItem = jsonRestaurentInfoData?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
            // console.log(menuItem);
            setItemInfo(menuItem);
            setLoading(false);
            
        } catch (err) {
            
            window.alert(`Failed to fetch restaurants menu: ${err.message || 'Unknown error occurred'}`);
        }
    }
    return { restaurantInfo, itemInfo, loading };
}
export default useRestaurantMenu;