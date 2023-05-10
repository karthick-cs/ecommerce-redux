import React from "react";
import SiteLayout from "./layout/SiteLayout";

import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import BillingDetails from "./pages/BillingDetails";

const routes = [
    {
        path: "/",
        element: <SiteLayout/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "shopping-cart",
                element: <ShoppingCart/>,
            },
            {
                path: "billing-details",
                element: <BillingDetails/>,
            }
        ]
    },
    {
        path: "*",
        element: <h1>404</h1>
    }
];

export default routes;