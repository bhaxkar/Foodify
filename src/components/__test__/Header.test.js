import { render, screen } from "@testing-library/react";
import Header from "../Header";
import store from "../../store/index";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import "@testing-library/jest-dom";


test("Testing the Header Component", () =>{

    const header = render (
        <StaticRouter>
            <Provider store = {store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )

    const title = screen.getByTestId('title')
    expect (title.innerHTML).toBe("Foodify")

    const home = header.getByTestId('home')
    expect (home).toBeInTheDocument(); // toBeInTheDocument() is define in @testing-library/jest-dom
    expect (home.textContent).toBe("Home")

    const cart = header.getByTestId('cart')
    expect (cart.textContent).toBe("Cart 0")

})