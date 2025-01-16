import { useSelector } from "react-redux";
import emptyCart from "../assets/empty-cart.png"
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            {cartItems?.length === 0 ? (
                <div className="flex flex-col gap-12 justify-center items-center my-20">
                    <img className="w-60 h-50" src={emptyCart} alt="Empty Cart"/>
                    <h4 className="text-4xl text-gray-800 font-bold">Your cart is empty!</h4>
                </div>) : ( 
                <div className="flex flex-col ml-12 mr-12 mt-10">
                    <div className="flex justify-between mb-8">
                        <h3 className="text-2xl font-bold">Cart Items - {cartItems?.length || 0}</h3>
                        <button 
                            className="cursor-pointer text-white font-semibold text-lg p-2 border-2 bg-red-500 rounded-2xl" 
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                        {cartItems?.map((item) => (
                            <FoodItem key={item.id} {...item}/>
                        ))}
                    </div>
                </div>)
            }
        </>
    );
};

export default Cart;