import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Beneficios = () => {
    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold" style={{ color: '#333333' }}>
                    Beneficios principales
                </h2>
                <p style={{ color: '#333333' }}>
                    Encuentra alquileres seguros, verificados y listos para contratos de larga duración.
                </p>
            </div>

            <Row className="g-4">

                {/* 1. Contratos claros */}
                <Col lg={3} md={6} sm={12}>
                    <Card className="h-100 shadow-sm" style={{ backgroundColor: '#e1e1e1' }}>
                        <Card.Body className="text-center">
                            <i className="bi bi-file-earmark-text fs-1" style={{ color: '#333333' }}></i>
                            <h5 className="fw-bold mt-3" style={{ color: '#333333' }}>Contratos claros y verificados</h5>
                            <p style={{ color: '#333333' }}>
                                Evita sorpresas. Todos los contratos son revisados y aprobados para mayor seguridad.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* 2. Propiedades revisadas */}
                <Col lg={3} md={6} sm={12}>
                    <Card className="h-100 shadow-sm" style={{ backgroundColor: '#e1e1e1' }}>
                        <Card.Body className="text-center">
                            <i className="bi bi-house-check fs-1" style={{ color: '#333333' }}></i>
                            <h5 className="fw-bold mt-3" style={{ color: '#333333' }}>Propiedades verificadas</h5>
                            <p style={{ color: '#333333' }}>
                                Cada inmueble pasa por un proceso de validación antes de publicarse.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* 3. Pagos seguros */}
                <Col lg={3} md={6} sm={12}>
                    <Card className="h-100 shadow-sm" style={{ backgroundColor: '#e1e1e1' }}>
                        <Card.Body className="text-center">
                            <i className="bi bi-shield-lock fs-1" style={{ color: '#333333' }}></i>
                            <h5 className="fw-bold mt-3" style={{ color: '#333333' }}>Pagos y depósitos seguros</h5>
                            <p style={{ color: '#333333' }}>
                                Protegemos tus pagos mediante métodos seguros y transparentes.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* 4. Soporte */}
                <Col lg={3} md={6} sm={12}>
                    <Card className="h-100 shadow-sm" style={{ backgroundColor: '#e1e1e1' }}>
                        <Card.Body className="text-center">
                            <i className="bi bi-headset fs-1" style={{ color: '#333333' }}></i>
                            <h5 className="fw-bold mt-3" style={{ color: '#333333' }}>Soporte 24/7</h5>
                            <p style={{ color: '#333333' }}>
                                Atención rápida para ayudarte en cualquier etapa del proceso.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default Beneficios
