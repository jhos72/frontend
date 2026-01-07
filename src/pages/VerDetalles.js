import { useParams } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Tabs,
    Tab,
    Carousel,
    ListGroup,
    Badge,
} from "react-bootstrap";
import Map from "../components/Map";
import propiedades from "../data/propiedades";

const VerDetalles = () => {
    const { id } = useParams();

    const propiedad = propiedades.find(
        (p) => p.id === Number(id)
    );

    if (!propiedad) {
        return (
            <Container className="py-5">
                <h4>Propiedad no encontrada</h4>
            </Container>
        );
    }

    return (
        <div style={{ backgroundColor: "#F7F9FC", minHeight: "100vh" }}>
            <Container className="py-4">
                <Card className="shadow-sm">
                    <Card.Body>
                        <Tabs
                            defaultActiveKey="detalles"
                            id="detalle-propiedad-tabs"
                            className="mb-3"
                            justify
                        >

                            {/* ================= TAB 1: DETALLES ================= */}
                            <Tab eventKey="detalles" title=" Detalles">
                                <Row className="g-4">

                                    {/* IMÁGENES */}
                                    <Col md={6}>
                                        {propiedad.imagenes?.length ? (
                                            <Carousel>
                                                {propiedad.imagenes.map(
                                                    (img, index) => (
                                                        <Carousel.Item key={index}>
                                                            <img
                                                                className="d-block w-100 rounded"
                                                                src={img}
                                                                alt={`Imagen ${index + 1}`}
                                                            />
                                                        </Carousel.Item>
                                                    )
                                                )}
                                            </Carousel>
                                        ) : (
                                            <div className="text-muted text-center py-5">
                                                Sin imágenes disponibles
                                            </div>
                                        )}
                                    </Col>

                                    {/* INFO */}
                                    <Col md={6}>
                                        <h4 className="fw-bold">
                                            {propiedad.titulo}
                                        </h4>

                                        <h5 className="text-success mb-3">
                                            Bs. {propiedad.precio}
                                        </h5>

                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <strong>Tipo:</strong>{" "}
                                                {propiedad.tipo}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>Cuartos:</strong>{" "}
                                                {propiedad.detalles?.cuartos ?? "N/D"}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>Baños:</strong>{" "}
                                                {propiedad.detalles?.banos ?? "N/D"}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>Tamaño:</strong>{" "}
                                                {propiedad.detalles?.tamanio
                                                    ? `${propiedad.detalles.tamanio} m²`
                                                    : "N/D"}
                                            </ListGroup.Item>
                                        </ListGroup>

                                        {/* SERVICIOS */}
                                        {propiedad.detalles?.servicios?.length > 0 && (
                                            <div className="mt-3">
                                                <strong>Servicios:</strong>
                                                <div className="mt-2">
                                                    {propiedad.detalles.servicios.map(
                                                        (s, i) => (
                                                            <Badge
                                                                bg="secondary"
                                                                className="me-2"
                                                                key={i}
                                                            >
                                                                {s}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        <hr />

                                        {/* CONTACTO */}
                                        <p className="fw-bold mb-1">Contacto</p>
                                        <p className="mb-3">
                                            {propiedad.contacto.nombre}{" "}
                                            {propiedad.contacto.apellido} <br />
                                            {propiedad.contacto.celular}
                                        </p>

                                        <Button variant="success">
                                            Contactar asesor
                                        </Button>
                                    </Col>
                                </Row>
                            </Tab>

                            {/* ================= TAB 2: UBICACIÓN ================= */}
                            <Tab eventKey="ubicacion" title=" Ubicación">
                                <Row className="g-4">

                                    {/* INFO UBICACIÓN */}
                                    <Col md={4}>
                                        <h5 className="fw-bold">
                                            Ubicación del inmueble
                                        </h5>

                                        <p className="mb-2">
                                            <strong>Zona:</strong>{" "}
                                            {propiedad.zona}
                                        </p>
                                        <p className="mb-2">
                                            <strong>Dirección:</strong>{" "}
                                            {propiedad.direccion}
                                        </p>

                                        <hr />

                                        {/* ENTORNO (SUGERENCIAS) */}
                                        <p className="fw-bold mb-1">
                                            Alrededores
                                        </p>
                                        <ul className="text-muted">
                                            <li>Cerca de transporte público</li>
                                            <li>Supermercados y tiendas</li>
                                            <li>Colegios / universidades</li>
                                            <li>Zonas comerciales</li>
                                        </ul>

                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            href={`https://www.google.com/maps?q=${propiedad.ubicacion.lat},${propiedad.ubicacion.lng}`}
                                            target="_blank"
                                        >
                                            Ver en Google Maps
                                        </Button>
                                    </Col>

                                    {/* MAPA */}
                                    <Col md={8}>
                                        <Card className="shadow-sm">
                                            <Card.Body>
                                                <Map propiedades={[propiedad]} />
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab>

                        </Tabs>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default VerDetalles;
