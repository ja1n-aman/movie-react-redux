import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Explore from "./pages/Explore/Explore.jsx";
import Home from "./pages/Home/Home.jsx";
import Details from "./pages/Details/Details.jsx";
import SearchResults from "./pages/SearchResults/SearchResults.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore/:mediaType",
        element: <Explore />,
      },
      {
        path: "/search/:query",
        element: <SearchResults />,
      },
      {
        path: "/:mediaType/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
