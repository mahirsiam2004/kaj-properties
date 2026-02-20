import { createBrowserRouter } from "react-router";
import MainLayoutes from "../layoutes/MainLayoutes";
import { Home } from "../pages/Home";

export const Router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayoutes,
        children:[
            {
index:true,
Component:Home
            }
        ]
    }
])