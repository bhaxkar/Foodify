import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import RestaurantCard from "./RestaurantCard";
import ShimmerBody from "./ShimmerBody";
import { filterRestaurantData } from "../utils/helper";
import useOnlineStatus from "../hooks/useOnlineStatus"
import useRestaurantList from "../hooks/useRestaurantList";


const body = () =>{

  const[searchText, setSearchText] = useState("");
  const restaurants = useRestaurantList();
  const[filterRestaurant, setFilterRestaurant] = useState([]);
  const isOnline = useOnlineStatus();

  useEffect(()=>{
    // console.log(restaurants);
    setFilterRestaurant(restaurants);
  }, [restaurants]);

  if(!isOnline){
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500 mb-4">OPPS! Check your internet connection</h1>
        <p className="text-lg text-gray-700">It looks like you are offline. Please check your internet connection and try again.</p>
      </div>
    );
  }

  if(!restaurants) return null; // Early return 

  return restaurants?.length === 0 ? (<ShimmerBody/>):(

    <div data-testid="wrapper" className=" flex flex-col justify-center bg-[#f3f3f3]">

      <div data-testid="serchcontainer" className="flex justify-center align-middle mx-auto my-6 p-3 bg-white rounded-[25px] shadow-md w-[60%] border-4 border-red-400 ">
        <input 
         className="flex-1 px-5 py-2.5 rounded-l-[25px] text-base focus:outline-none"
         type="text"
         placeholder="search for restuarents, cuisine or a dish"
         value={searchText}
         onChange={(e)=>{
          setSearchText(e.target.value)
         }}
        />
        <button
          className="px-5 py-2 bg-[#ff6f61] text-white rounded-r-[25px] cursor-pointer text-base hover:bg-[#e55b50] transition-colors duration-300"
          onClick={()=>{
            const data = filterRestaurantData(searchText, restaurants); 
            setFilterRestaurant(data);
          }}
        >Search</button>
      </div>

      
      {filterRestaurant?.length === 0 ? (
        <div className=" h-72 text-center my-10 text-xl text-gray-600">
          No restaurants match your search "{searchText}"
        </div>
      ) : (
        <div data-testid = "restaurantList" className="my-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 p-5 bg-[#f3f3f3]"> 
          {filterRestaurant.map((restaurant) => {
            return ( 
              <Link className="no-underline cursor-pointer" to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id} > 
                <RestaurantCard restaurant={restaurant} /> 
              </Link> 
            ); 
          })} 
        </div>
      )}
    </div>
  )
}
export default body;