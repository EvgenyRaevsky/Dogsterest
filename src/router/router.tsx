import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() =>
  import("../pages/Home/Home").then((module) => ({ default: module.Home }))
);

const Favorite = lazy(() =>
  import("../pages/Favorite/Favorite").then((module) => ({
    default: module.Favorite,
  }))
);

export const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={"Loading..."}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/favorite"
        element={
          <Suspense fallback={"Loading..."}>
            <Favorite />
          </Suspense>
        }
      />
    </Routes>
  );
};
