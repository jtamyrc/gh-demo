import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders demo link", () => {
    render(<App />);
    const linkElement = screen.getByText(/demo/i);
    expect(linkElement).toBeInTheDocument();
});
