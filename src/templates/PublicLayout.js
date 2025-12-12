import React from 'react'
import Menu from './Menu'
import Hero from '../components/Hero'
import { Outlet } from 'react-router-dom'
import Beneficios from '../components/Beneficios'
import ComoFunciona from '../components/ComoFunciona'
import PropiedadesDestacadas from '../components/PropiedadesDestacadas'
import SeguridadConfianza from '../components/SeguridadConfianza'
import Testimonios from '../components/Testimonios'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useState } from 'react'
const PublicLayout = () => {
  const [userType, setUserType] = useState("inquilino");



  return (
    <div>
      <Menu userType={userType}
        onToggleUser={() =>
          setUserType(userType === "inquilino" ? "propietario" : "inquilino")
        } />
      <Hero />
      <Beneficios />
      <ComoFunciona />
      <PropiedadesDestacadas />
      <SeguridadConfianza />
      <Testimonios />
      <CTA />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
