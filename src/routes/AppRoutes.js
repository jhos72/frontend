import { Routes, Route } from "react-router-dom";

import Layout from "../Layouts/Layout";

import Home from "../pages/Home";
import BuscarAlquiler from "../pages/BuscarAlquiler";
import VerDetalles from "../pages/VerDetalles";
import Publicar from "../pages/Publicar";
import Faq from "../pages/Faq";
import RoleGuard from "../components/guards/RoleGuard";

const AppRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="/buscar-alquiler"
                    element={
                        <RoleGuard>
                            <BuscarAlquiler />
                        </RoleGuard>
                    }
                />
                <Route
                    path="/publicar"
                    element={
                        <RoleGuard>
                            <Publicar />
                        </RoleGuard>
                    }
                />
                <Route path="buscar-alquiler/:id" element={<VerDetalles />} />

                <Route path="faq" element={<Faq />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
