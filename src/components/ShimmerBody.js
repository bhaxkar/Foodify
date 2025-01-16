const ShimmerBody = () =>{
    return(
        <>
            <div className="bg-gray-300 h-20 w-full animate-pulse mt-5 mb-4 flex justify-center items-center">
                <div className=" w-9/12 border-2 border-gray-400 rounded-3xl h-16"> </div>
            </div>
            <div data-testid="shimmerBody" className="grid grid-cols-4 gap-4 m-2">
                {Array(8)
                    .fill("")
                    .map((index) => (
                        <div key={index} className="bg-gray-300 h-60 w-full animate-pulse rounded-xl"></div>
                    ))
                }
            </div>
        </>
    )
};
export default ShimmerBody;