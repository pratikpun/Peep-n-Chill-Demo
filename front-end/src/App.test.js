import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test("renders App component", () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const linkElement = screen.getByText(/Peep n Chitter/i);
//   expect(linkElement).toBeInTheDocument();
// });
