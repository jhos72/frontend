import { useParams } from "react-router-dom";
import {
    Container,
    Card,
    Carousel,
    Button,
    Tabs,
    Tab,
    ListGroup,
} from "react-bootstrap";
import Map from "../components/Map";
import propiedades from "../data/propiedades";
import ContactButton from "../components/ContactButton";

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
                            className="mb-4"
                            justify
                        >

                            {/* ================= TAB DETALLES ================= */}
                            <Tab eventKey="detalles" title="Detalles">

                                {propiedad.imagenes?.length ? (
                                    <Carousel className="mb-4">
                                        {propiedad.imagenes.map((img, index) => (
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="d-inline-block w-100 rounded"
                                                    src={img}
                                                    alt={`Imagen ${index + 1}`}

                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                ) : (
                                    <p className="text-muted text-center">
                                        Sin imágenes disponibles
                                    </p>
                                )}
                                {/* TÍTULO */}
                                <h4 className="fw-bold mb-2">
                                    {propiedad.titulo}
                                </h4>

                                {/* PRECIO */}
                                <h5 className="text-success mb-3">
                                    Bs. {propiedad.precio}
                                </h5>

                                {/* DESCRIPCIÓN */}
                                {propiedad.descripcion && (
                                    <p className="text-muted mb-4">
                                        {propiedad.descripcion}
                                    </p>
                                )}
                                {propiedad.servicios?.length > 0 && (
                                    <div className="mb-4">
                                        <p className="fw-bold mb-2">Servicios</p>
                                        <div className="d-flex flex-wrap gap-2">
                                            {propiedad.servicios.map((servicio, index) => (
                                                <span key={index} className="badge bg-secondary">
                                                    {servicio}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {/* DETALLES */}
                                <ListGroup className="mb-4">
                                    <ListGroup.Item>
                                        <strong>Tipo:</strong>{" "}
                                        {propiedad.tipo}
                                    </ListGroup.Item>
                                    {propiedad.tamanio && (
                                        <ListGroup.Item>
                                            <strong>Tamaño:</strong>{" "}
                                            {propiedad.tamanio}
                                        </ListGroup.Item>
                                    )}

                                </ListGroup>

                                {/* CONTACTO 
                                <div className="mb-4">
                                    <p className="fw-bold mb-1">
                                        Contacto
                                    </p>
                                    <p className="mb-0">
                                        {propiedad.contacto.nombre}{" "}
                                        {propiedad.contacto.apellido}
                                        <br />
                                        {propiedad.contacto.celular}
                                    </p>
                                </div>
*/}
                                {/* BOTÓN */}
                                <ContactButton
                                    telefono={propiedad.contacto?.celular || "78070618"}
                                    mensaje={`Hola, estoy interesado en la propiedad: ${propiedad.titulo}, ubicada en ${propiedad.direccion}., ¿podrías brindarme más información?.`}
                                    variant="success"
                                    size="lg"
                                >
                                    Contactar al asesor
                                </ContactButton>
                            </Tab>

                            {/* ================= TAB UBICACIÓN ================= */}
                            <Tab eventKey="ubicacion" title="Ubicación">

                                {/* TÍTULO UBICACIÓN */}
                                <h5 className="fw-bold mb-3">
                                    Santa Cruz, zona {propiedad.zona},{" "}
                                    {propiedad.direccion}
                                </h5>

                                {/* MAPA */}
                                <div className="mb-4">
                                    <Map propiedades={[propiedad]} />
                                </div>

                                {/* ENTORNO */}
                                <div className="mb-4">
                                    <p className="fw-bold mb-1">
                                        Alrededores
                                    </p>
                                    <ul className="text-muted mb-3">
                                        <li>Transporte público cercano</li>
                                        <li>Supermercados y tiendas</li>
                                        <li>Zonas residenciales tranquilas</li>
                                    </ul>

                                    <Button
                                        variant="outline-primary"
                                        className="me-2"
                                        href={`https://www.google.com/maps?q=${propiedad.ubicacion.lat},${propiedad.ubicacion.lng}`}
                                        target="_blank"
                                    >
                                        Ver en Google Maps
                                    </Button>

                                    <Button variant="success">
                                        Contactar asesor
                                    </Button>
                                </div>
                            </Tab>

                        </Tabs>

                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default VerDetalles;
