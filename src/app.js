import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Offer from "./components/Offer";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import RestaurantDetail from "./components/RestaurantDetail";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";


const AppLayout = () =>{
    return(
        <Provider store = {store}>
         <Header/>
         <Outlet/>
         <Footer/>
        </Provider>   
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "/",
                element: <Body/>

            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/offer",
                element: <Offer/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetail/>
            },
            {
                path : "/cart",
                element: <Cart/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);