import React from 'react'
import { Container, Button, InputGroup, FormControl } from 'react-bootstrap'
import HeroImg from '../assets/imag1.jpg'

const Hero = () => {
    return (
        <div
            className="py-5 mb-4 d-flex align-items-center"
            style={{
                backgroundImage: `url(${HeroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '70vh',
                color: 'white'
            }}
        >
            <Container>

                {/* TEXTO A LA IZQUIERDA */}
                <div className="col-lg-6">
                    <h1 className="fw-bold">
                        Alquileres de larga duración en Bolivia de forma rápida, segura y 100% online.
                    </h1>
                    <br />
                    <h4>
                        Encuentra departamentos y casas disponibles, contratos de alquiler de larga duracion  
                        sin complicaciones y con garantías claras.
                    </h4>

                    {/* BARRA DE BÚSQUEDA */}
                    <InputGroup className="mt-4">
                        <FormControl
                            placeholder="Busca por ciudad, zona o tipo de inmueble"
                            aria-label="Buscar alquileres"
                        />
                        <Button
                            style={{ backgroundColor: '#d1bb9b', border: 'none', color: '#333' }}
                        >
                            Buscar
                        </Button>
                    </InputGroup>
                </div>

                {/* CTA CENTRADO */}
                <div className="text-center mt-5">
                    <Button
                        size="lg"
                        style={{
                            backgroundColor: '#d1bb9b',
                            border: 'none',
                            padding: '12px 30px',
                            color: '#333333',
                            fontWeight: '600',
                            borderRadius: '8px'
                        }}
                    >
                        Ver propiedades disponibles
                    </Button>
                </div>

            </Container>
        </div>
    )
}

export default Hero
