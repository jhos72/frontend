import { Routes, Route } from 'react-router-dom'
import React from 'react'
//paginas publicas
import PublicLayout from '../templates/PublicLayout';

const AppRoutes = () => {
    return (
        <Routes>
            {/*Rutas publicas */}
            <Route path="/*" element={<PublicLayout />} />
        </Routes>
    )
}

export default AppRoutes;
