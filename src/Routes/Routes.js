import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Layout/Main";
import About from "../Page/About/About";
import Products from "../Page/Products/Products";
import Booking from "../Page/Booking/Booking";
import Contact from "../Page/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router;