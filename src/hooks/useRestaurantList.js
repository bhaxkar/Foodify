import { useEffect, useState } from 'react'
import { RESTAURANT_LIST_API } from '../utils/constant'

// "useRestaurantlist" hook is going to return all avilable restaurant in the city with there details
const useRestaurantList = ()=>{
    
    const [ restaurants, setRestaurants] = useState([]);

    useEffect( () =>{
        getRestaurant();
    }, [])
   
    const getRestaurant = async () => {

        try{
            const data = await fetch(RESTAURANT_LIST_API);
            const jsonData = await data.json();
            //console.log(jsonData)
            setRestaurants(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (err){
            window.alert(`Failed to fetch restaurants: ${err.message || 'Unknown error occurred'}`);
            setRestaurants([]);
        }
        
    }

    //console.log(restaurants);
    return restaurants;  
}

export default useRestaurantList;