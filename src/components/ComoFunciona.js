import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const ComoFunciona = () => {
    return (
        <Container className="py-5">

            {/* TÍTULO */}
            <div className="text-center mb-5">
                <h2 className="fw-bold" style={{ color: '#333333' }}>
                    ¿Cómo funciona la plataforma?
                </h2>
                <p style={{ color: '#333333' }}>
                    Sigue estos pasos simples y renta tu próximo hogar de forma rápida y segura.
                </p>
            </div>

            <Row className="g-4">

                {/* PASO 1 */}
                <Col md={6} lg={3}>
                    <Card className="h-100 shadow-sm" style={{ backgroundColor: '#e1e1e1' }}>
                        <Card.Body className="text-center">
                            <i className="bi bi-search fs-1" style={{ color: '#333333' }}></i>
                            <h5 className="fw-bold mt-3" style={{ color: '#333333' }}>1. Busca y filtra</h5>
                            <p style={{ color: '#333333' }}>
                                Encuentra inmuebles por ciudad, precio, zona o tipo (casa, departamento, habitación).
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* PASO 2 */}
                <Col md={6} lg={3}>
                    <Card className="h-100 shadow-sm" style={{ backgroundColor: '#e1e1e1' }}>
                        <Card.Body className="text-center">
                            <i className="bi bi-camera-video fs-1" style={{ color: '#333333' }}></i>
                            <h5 className="fw-bold mt-3" style={{ color: '#333333' }}>2. Agenda una visita</h5>
                            <p style={{ color: '#333333' }}>
                                Solicita una visita presencial o un tour virtual directamente desde la plataforma.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* PASO 3 */}
                <Col md={6} lg={3}>
                    <Card className="h-100 shadow-sm" style={{ backgroundColor: '#e1e1e1' }}>
                        <Card.Body className="text-center">
                            <i className="bi bi-file-earmark-check fs-1" style={{ color: '#333333' }}></i>
                            <h5 className="fw-bold mt-3" style={{ color: '#333333' }}>3. Solicitud online</h5>
                            <p style={{ color: '#333333' }}>
                                Envía tu solicitud con documentos básicos y recibe aprobación rápida.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* PASO 4 */}
                <Col md={6} lg={3}>
                    <Card className="h-100 shadow-sm" style={{ backgroundColor: '#e1e1e1' }}>
                        <Card.Body className="text-center">
                            <i className="bi bi-pen fs-1" style={{ color: '#333333' }}></i>
                            <h5 className="fw-bold mt-3" style={{ color: '#333333' }}>4. Firma y mudanza</h5>
                            <p style={{ color: '#333333' }}>
                                Firma el contrato digital, realiza el depósito seguro y muda tu nuevo hogar.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default ComoFunciona
