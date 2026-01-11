import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardAlquiler = ({ propiedad }) => {
    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <Card.Title>{propiedad.titulo}</Card.Title>

                <Card.Text>
                    <strong>Zona:</strong> {propiedad.zona} <br />
                    <strong>Dirección:</strong> {propiedad.direccion} <br />
                    <strong>Precio:</strong> Bs. {propiedad.precio}

                </Card.Text>

              

                <Button
                    as={Link}
                    to={`/buscar-alquiler/${propiedad.id}`}
                    variant="primary"
                    size="sm"
                >
                    Ver detalles
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardAlquiler;
