// filterRestaurentData() is filter out the restaurents which are searched

export function filterRestaurantData(searchText, restaurants){
    // console.log(restaurants);

    const filteredData = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    return filteredData;
} 