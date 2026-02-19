import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../layout/layout";
import Home from "../pages/home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [{
            path: '/',
            Component: Home 
        }],
    }
])