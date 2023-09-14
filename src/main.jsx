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
        path: "/Front-end-adv-task4",
        element: <App />,
        children: [
            {
                path: "Front-end-adv-task4",
                element: <Main />,
            },
            {
                path: "Front-end-adv-task4/about",
                element: <AboutUs />,
            },
            {
                path: "Front-end-adv-task4/news",
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