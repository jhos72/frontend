import { Form, Button } from "react-bootstrap";

const PropietarioForm = ({ onClose }) => {
    const whatsappUrl =
        "https://wa.me/591XXXXXXXXX?text=Hola, quiero publicar mi propiedad";

    const handleSubmit = (e) => {
        e.preventDefault();
        // 👉 Aquí luego conectas backend o email
        alert("Formulario enviado. Un asesor te contactará.");
        onClose();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h5 className="fw-bold mb-4">Información de contacto</h5>

            <Form.Group className="mb-3">
                <Form.Label>Nombre(s)</Form.Label>
                <Form.Control type="text" placeholder="Ej. Juan Carlos" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Apellido(s)</Form.Label>
                <Form.Control type="text" placeholder="Ej. Pérez" required />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Celular (WhatsApp)</Form.Label>
                <Form.Control type="tel" placeholder="Ej. 7XXXXXXX" required />
            </Form.Group>

            <h5 className="fw-bold mb-4">Ubicación del inmueble</h5>

            <Form.Group className="mb-3">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Ej. La Paz" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Zona / Barrio</Form.Label>
                <Form.Control type="text" placeholder="Ej. Sopocachi" />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Referencia cercana</Form.Label>
                <Form.Control type="text" placeholder="Ej. Cerca a supermercado" />
            </Form.Group>

            <h5 className="fw-bold mb-4">Información del inmueble</h5>

            <Form.Group className="mb-3">
                <Form.Label>Tipo de inmueble</Form.Label>
                <Form.Select required>
                    <option value="">Selecciona una opción</option>
                    <option>Casa</option>
                    <option>Departamento</option>
                    <option>Habitación</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Cantidad de dormitorios</Form.Label>
                <Form.Control type="number" min="0" placeholder="Ej. 2" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>¿Está amoblado?</Form.Label>
                <Form.Select>
                    <option>No</option>
                    <option>Sí</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Descripción adicional</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Detalles importantes del inmueble"
                />
            </Form.Group>

            <div className="d-flex flex-column gap-3">
                <Button type="submit" variant="primary">
                    Enviar información
                </Button>

                <Button
                    variant="outline-success"
                    href={whatsappUrl}
                    target="_blank"
                >
                    Hablar con una asesora por WhatsApp
                </Button>
            </div>
        </Form>
    );
};

export default PropietarioForm;
