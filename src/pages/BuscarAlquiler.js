import { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Map from "../components/Map";
import CardAlquiler from "../components/CardAlquiler";
import propiedadesData from "../data/propiedades";

const BuscarAlquiler = () => {
    const [propiedades] = useState(propiedadesData);
    const [filtros, setFiltros] = useState({
        departamento: "",
        tipo: "",
        presupuesto: 5000,
    });

    const propiedadesFiltradas = propiedades.filter((prop) => {
        if (filtros.tipo && prop.tipo !== filtros.tipo) return false;
        if (prop.precio > filtros.presupuesto) return false;
        return true;
    });

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#F7F9FC" }}>
            <Container fluid className="py-4">
                <Row className="g-4">

                    {/* PANEL DE FILTROS */}
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
                                        <Form.Select
                                            value={filtros.tipo}
                                            onChange={(e) =>
                                                setFiltros({ ...filtros, tipo: e.target.value })
                                            }
                                        >
                                            <option value="">Todos</option>
                                            <option value="Departamento">Departamento</option>
                                            <option value="Casa">Casa</option>
                                            <option value="Habitación">Habitación</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>
                                            Presupuesto máximo: Bs. {filtros.presupuesto}
                                        </Form.Label>
                                        <Form.Range
                                            min={500}
                                            max={5000}
                                            step={100}
                                            value={filtros.presupuesto}
                                            onChange={(e) =>
                                                setFiltros({
                                                    ...filtros,
                                                    presupuesto: Number(e.target.value),
                                                })
                                            }
                                        />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* MAPA + LISTA */}
                    <Col lg={9} md={8}>
                        <Row className="g-4">

                            {/* MAPA */}
                            <Col xs={12}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <Map propiedades={propiedadesFiltradas} />
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* LISTA */}
                            <Col xs={12}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h6 className="fw-bold mb-3">
                                            Alquileres disponibles ({propiedadesFiltradas.length})
                                        </h6>

                                        {propiedadesFiltradas.length === 0 ? (
                                            <p className="text-muted">
                                                No hay propiedades con estos filtros.
                                            </p>
                                        ) : (
                                            propiedadesFiltradas.map((prop) => (
                                                <CardAlquiler
                                                    key={prop.id}
                                                    propiedad={prop}
                                                />
                                            ))
                                        )}
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
