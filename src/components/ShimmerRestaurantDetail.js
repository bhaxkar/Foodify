const ShimmerRestaurantDetail = () =>{
    return(
        <div>
            <div className= "max-w-4xl h-64 border-2 border-gray-400 bg-gray-100 mb-3 mt-2 rounded-sm flex mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse">

            </div>
            <div className="grid grid-cols-4 gap-4 m-2">
                {Array(8)
                    .fill("")
                    .map((index) => (
                        <div key={index} className="bg-gray-300 h-60 w-full animate-pulse rounded-xl"></div>
                    ))
                }
            </div>
        </div>
    )
}
export default ShimmerRestaurantDetail;