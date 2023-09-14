import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import AboutUs from "./modules/about-us/pages/AboutUs.jsx";
import Main from "./modules/main/pages/Main.jsx";
import App from "./App.jsx";
import News from "./modules/news/pages/News.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Main />,
            },
            {
                path: "about",
                element: <AboutUs />,
            },
            {
                path: "news",
                element: <News />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);