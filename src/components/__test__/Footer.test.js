import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom"


test("Testing Footer", () =>{
    render(
        <Footer/>
    )

    const footerTitle = screen.getByTestId('suggestionTitle');
    expect (footerTitle.innerHTML).toBe('For better experience, download the Foodify app now');

    const playStore = screen.getByTestId('play-store');
    expect(playStore).toBeInTheDocument();
    expect(playStore).toHaveAttribute('alt', 'Play Store');

    const appStore = screen.getByTestId('app-store');
    expect(appStore).toBeInTheDocument();
    expect(appStore).toHaveAttribute('alt', 'App Store');

})