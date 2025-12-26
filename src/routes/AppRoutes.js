import { Routes, Route } from "react-router-dom";

import Layout from "../Layouts/Layout";

import Home from "../pages/Home";
import BuscarAlquiler from "../pages/BuscarAlquiler";


const AppRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="buscar-alquiler" element={<BuscarAlquiler />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
