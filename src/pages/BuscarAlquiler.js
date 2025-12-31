import React from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Map from "../components/Map";
const BuscarAlquiler = () => {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#F7F9FC" }}>
            <Container fluid className="py-4">
                <Row className="g-4">

                    {/* ===================== */}
                    {/* PANEL DE FILTROS */}
                    {/* ===================== */}
                    <Col lg={3} md={4}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="fw-bold mb-3">Filtros</h5>

                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Departamento</Form.Label>
                                        <Form.Select>
                                            <option>Selecciona un departamento</option>
                                            <option>La Paz</option>
                                            <option>Cochabamba</option>
                                            <option>Santa Cruz</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Ciudad / Municipio</Form.Label>
                                        <Form.Select>
                                            <option>Selecciona una ciudad</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Zona / Barrio</Form.Label>
                                        <Form.Select>
                                            <option>Selecciona una zona</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Tipo de inmueble</Form.Label>
                                        <Form.Select>
                                            <option>Departamento</option>
                                            <option>Casa</option>
                                            <option>Habitación</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Presupuesto mensual (Bs.)</Form.Label>
                                        <Form.Range />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* ===================== */}
                    {/* MAPA + LISTA */}
                    {/* ===================== */}
                    <Col lg={9} md={8}>
                        <Row className="g-4">

                            {/* MAPA */}
                            <Col xs={12}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <Map />
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* LISTA DE ALQUILERES */}
                            <Col xs={12}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h6 className="fw-bold mb-3">
                                            Alquileres disponibles
                                        </h6>

                                        {/* Placeholder */}
                                        <p className="text-muted">
                                            Aquí se mostrará la lista de propiedades filtradas.
                                        </p>

                                        {/* Futuro: RentalCard */}
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default BuscarAlquiler;
