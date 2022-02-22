import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Change from "./components/Change";
import Circle from "./components/Circle";
import Counter from "./components/Counter";
import Grade from "./components/Grade";
import Login from "./components/Login";
import Week from "./components/Week";

export default function App(){
    return useRoutes([
        {path:"/",element:<Home/>},
        {path:"/bmi",element:<Bmi/>},
        {path:"/calc",element:<Calc/>},
        {path:"/change",element:<Change/>},
        {path:"/week",element:<Week/>},
        {path:"/circle",element:<Circle/>},
        {path:"/counter",element:<Counter/>},
        {path:"/grade",element:<Grade/>},
        {path:"/login",element:<Login/>}
    ]);
}