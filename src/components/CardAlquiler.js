import { Card, Button } from "react-bootstrap";

const CardAlquiler = ({ propiedad }) => {
    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <Card.Title>{propiedad.titulo}</Card.Title>

                <Card.Text>
                    <strong>Zona:</strong> {propiedad.zona} <br />
                    <strong>Dirección:</strong> {propiedad.direccion} <br />
                    {/*Aun no se usa, por confirmar <strong>Precio:</strong> Bs. {propiedad.precio}*/}

                </Card.Text>

                <Card.Text className="text-muted">
                    Contacto: {propiedad.contacto.nombre}{" "}
                    {propiedad.contacto.apellido} <br />
                    {propiedad.contacto.celular}
                </Card.Text>

                <Button variant="primary" size="sm">
                    Ver detalles
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardAlquiler;
