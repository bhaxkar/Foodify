const Footer = () =>{
    return(
        <div className="max-w-6xl mx-auto flex gap-20 my-7">
            <p data-testid="suggestionTitle" className="text-2xl text-center font-bold text-gray-800">For better experience, download the Foodify app now</p>
            <div className="flex gap-5">
                <img className="w-52 h-16" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/appstore-logo.svg" alt="Play Store" data-testid="play-store" />
                <img className="w-52 h-16" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/playstore-logo-300x92.webp" alt="App Store" data-testid="app-store" />
            </div>
        </div>
    )
}
export default Footer;