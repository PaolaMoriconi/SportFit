import { createBrowserRouter } from "react-router-dom";
import App from "./layouts/App";
import { Home } from "./pages/Home";
import { FormProducts } from "./pages/FormProducts";


export const router= createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                index:true,
                element : <Home/>
            },
            {
                path:"/edit/:id",
                element: <FormProducts/>
            }
    ]
    }
]) 