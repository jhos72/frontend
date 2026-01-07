import { Routes, Route } from "react-router-dom";

import Layout from "../Layouts/Layout";

import Home from "../pages/Home";
import BuscarAlquiler from "../pages/BuscarAlquiler";
import VerDetalles from "../pages/VerDetalles";


const AppRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="buscar-alquiler" element={<BuscarAlquiler />} />
                <Route path="buscar-alquiler/:id" element={<VerDetalles />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
