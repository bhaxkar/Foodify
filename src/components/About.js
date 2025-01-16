import GetToKnowUs from "./GetToKnowUs";

const About = () => {
    return(
    <div className="bg-gray-100 p-8 flex flex-col">

        <div className="mx-auto">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                <div className="h-1 w-40 bg-custom-red mx-auto mt-4" />
            </div>
            <p className="text-lg text-gray-700  my-6">
            Foodify is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.
            </p>
        </div>

        <GetToKnowUs/>

        <div>
            <div className="text-center mt-20 mb-12">
                <h2 className="text-4xl font-bold text-gray-800">GET IN TOUCH WITH US</h2>
                <div className="h-1 w-96 bg-custom-red mx-auto mt-4" />
            </div>
            <div className="flex justify-between ">
                <div className="ml-28">
                    <h2 className="text-2xl font-bold text-gray-700">Head Office Address:</h2>
                    <h6 className="text-base text-gray-700">Foodify Limited <br/>Earth, Milky Way Galaxy <br/>Observable Universe</h6>
                </div>
                <div className="mr-28">
                    <h2 className="text-2xl font-bold text-gray-700">For help and support:</h2>
                    <h3 className="text-base text-gray-700">Email : support@foodify.in <br/> Email : admin@foodify.in</h3>
                </div>
            </div>
        </div>
        
    </div>)
}



export default About;