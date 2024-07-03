import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./router/router";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainRouter />
    </BrowserRouter>
  );
};
