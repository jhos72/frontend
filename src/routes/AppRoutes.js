import { Routes, Route } from 'react-router-dom'
import React from 'react'
//paginas publicas
import PropietarioLayout from '../Layouts/PropietarioLayout';

const AppRoutes = () => {
    return (
        <Routes>
            {/*Rutas publicas */}
            <Route path="/*" element={<PropietarioLayout />} />
        </Routes>
    )
}

export default AppRoutes;
