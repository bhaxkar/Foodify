import offerLogo from '../assets/offer-logo.jpg';
import cartImg from '../assets/cart-logo.jpeg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between items-center bg-custom-red p-4">
            <div>
                <h3 data-testid="title" className="text-4xl font-semibold text-white">Foodify</h3>
            </div>

            <div className="flex space-x-6">

                <Link to="/" data-testid="home" className="font-button list-none text-white cursor-pointer relative group">
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link to="/about" data-testid="about" className="font-button list-none text-white cursor-pointer relative group">
                    About
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link to="/offer" data-testid="offer" className="font-button list-none text-white cursor-pointer relative group flex items-center">
                    <img src={offerLogo} alt="Offer Logo" className="w-8 h-8 inline-block rounded-full mr-2" />
                    <span className="relative group">
                        Offer
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </Link>

                <Link to="/cart" data-testid="cart" className="font-button pr-4 list-none text-white cursor-pointer relative group flex items-center">
                    <img src={cartImg} alt="Cart" className="w-8 h-8 inline-block rounded-full mr-2" />
                    <span className="relative group">
                        Cart {cartItems?.length}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </Link>
                
            </div> 
        </div>
    );
};

export default Header;