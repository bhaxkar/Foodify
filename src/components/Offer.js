import { useState } from "react";
import upChevron from "../assets/up-chevron.png";
import downChevron from "../assets/down-chevron.png"

const Offer = () => {

    const [seeMore, setSeeMore] = useState(false)

    return (
        <>
        <div className="max-w-6xl mx-auto mt-5">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" />
        </div>

        <div className="max-w-6xl mx-auto bg-white border-2 border-gray-200 shadow-lg rounded-lg overflow-hidden mt-10 p-6">

            <h3 className="text-xl text-gray-700 font-bold mb-4 ">Get the Best Offers on Food from Top Restaurants Near You</h3>

            <p className="text-gray-600 mb-6">Get ready for a delicious adventure packed with unbeatable dining offers at your favorite restaurants. Whether you’re craving a cheesy pizza, a juicy burger, or a delightful bowl of pasta, now is the perfect time to head out and indulge in your favorite meals—while saving big!</p>


            {
                seeMore ? (<button className="flex items-center justify-center text-custom-red hover:text-red-700 transition  duration-300 ease-in-out transform hover:scale-105" onClick={()=>{setSeeMore(false)}}>
                  Hide
                <img className="w-5 h-5 ml-2 bg-custom-red" src={upChevron} />
                </button>):
                (<button className="flex items-center justify-center text-custom-red hover:text-red-700 transition  duration-300 ease-in-out transform hover:scale-105" onClick={()=>{setSeeMore(true)}}>
                    See more
                <img className="w-5 h-5 ml-2 bg-custom-red" src={downChevron} />
                </button>)
            }


            { seeMore &&  
                <div className="text-gray-600">
                    <p className="m-2">
                    All the top-rated restaurants and popular eateries are offering enticing deals that are too good to     pass up. From buy-one-get-one-free offers to irresistible combo meals, there’s something for     everyone. And with a wide variety of restaurant deals near you, enjoying a delectable dining     experience has never been more affordable.
                    </p>
                    <p className="m-2">
                    Picture yourself dining out and savoring a juicy burger with crispy fries, or sharing an oven-fresh      pizza topped with all your favorites—all at a fraction of the price. These incredible restaurant     offers ensure that you can enjoy delicious meals without worrying about the cost. Whether you’re     looking for a casual bite or a special night out, these dining deals make it easy to experience the     best without breaking the bank. 
                    </p>
                    <p className="m-2">
                    Planning a night out with friends, a family dinner, or a date night? Take advantage of these     fantastic restaurant offers and make every dining experience unforgettable. With top-notch food at     unbeatable prices, you can treat yourself and your loved ones to a feast without stretching your     budget. Plus, you’ll be supporting local restaurants while enjoying a cost-effective meal out.
                    </p>
                    <p className="m-2">
                    Don’t miss the chance to explore new dining spots and revisit old favorites—all while enjoying     amazing discounts. Let your taste buds rejoice as you discover incredible dishes at unbeatable     prices. With Swiggy’s restaurant deals, dining out is more affordable than ever, turning every meal     into a celebration. So why wait? Embrace the joy of dining well and saving more today!
                    </p>
                </div>
            }

        </div>
        </>
    );
}
export default Offer;