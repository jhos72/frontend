import { useState } from "react"
import { Container, Row, Col, Form, Card } from "react-bootstrap"
import Map from "../components/Map"
import CardAlquiler from "../components/CardAlquiler"
import propiedadesData from "../data/propiedades"
import { useSearchParams } from "react-router-dom"

const BuscarAlquiler = () => {
    const [propiedades] = useState(propiedadesData)

    const [searchParams] = useSearchParams()
    const tipoFromUrl = searchParams.get("tipo") || ""

    const [filtros, setFiltros] = useState({
        tipo: tipoFromUrl,
        presupuesto: 5000,
    })

    const propiedadesFiltradas = propiedades.filter((p) => {
        if (filtros.tipo && p.tipo.toLowerCase() !== filtros.tipo.toLowerCase()) {
            return false
        }

        if (p.precio > filtros.presupuesto) {
            return false
        }

        return true
    })

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#F7F9FC" }}>
            <Container fluid className="py-4">
                <Row className="g-4">

                    {/* FILTROS */}
                    <Col lg={3} md={4}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="fw-bold mb-3">Filtros</h5>

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
                                        <option value="Habitacion">Habitación</option>
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
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* MAPA + LISTA */}
                    <Col lg={9} md={8}>
                        <Row className="g-4">

                            <Col xs={12}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <Map propiedades={propiedadesFiltradas} />
                                    </Card.Body>
                                </Card>
                            </Col>

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
    )
}

export default BuscarAlquiler
