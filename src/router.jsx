import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "reviews",
                element: <Reviews />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]);

export default router;