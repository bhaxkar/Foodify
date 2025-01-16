import { render, waitFor } from "@testing-library/react";
import Body from "../Body";
import store from "../../store/index";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import {RESTAURENT_DATA} from "../../mocks/data"
import "@testing-library/jest-dom";

global.fetch = jest.fn ( () => {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(RESTAURENT_DATA);
        }
    })
})



describe("Testing the Body Component", () =>{



    test("Testing the Shimmer Component", ()=>{
        
        const body = render (
            <StaticRouter>
                <Provider store = {store}>
                    <Body/>
                </Provider>
            </StaticRouter>
        )

        const shimmer = body.getByTestId("shimmerBody");
        expect (shimmer).toBeInTheDocument();
        expect (shimmer.children.length).toBe(8);

    })


    test("Testing the Body Component", async () =>{
    
        const body = render (
            <StaticRouter>
                <Provider store = {store}>
                    <Body/>
                </Provider>
            </StaticRouter>
        )

        await waitFor(() => expect (body.getByTestId("wrapper")))

       const searchInput = body.getByPlaceholderText("search for restuarents, cuisine or a dish");
       expect(searchInput).toBeInTheDocument();

    })
})

