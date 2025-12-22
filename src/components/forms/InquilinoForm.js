import { Form, Button } from "react-bootstrap";

const InquilinoForm = ({ onClose }) => {
    const whatsappUrl =
        "https://wa.me/591XXXXXXXXX?text=Hola, estoy buscando un alquiler";

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado. Un asesor te contactará.");
        onClose();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h5 className="fw-bold mb-4">Información personal</h5>

            <Form.Group className="mb-3">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" placeholder="Ej. María López" required />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Celular (WhatsApp)</Form.Label>
                <Form.Control type="tel" placeholder="Ej. 7XXXXXXX" required />
            </Form.Group>

            <h5 className="fw-bold mb-4">Perfil</h5>

            <Form.Group className="mb-3">
                <Form.Label>Ciudad de origen</Form.Label>
                <Form.Control type="text" placeholder="Ej. Cochabamba" />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Profesión / Actividad</Form.Label>
                <Form.Control type="text" placeholder="Ej. Ingeniero, Estudiante" />
            </Form.Group>

            <h5 className="fw-bold mb-4">Búsqueda de alquiler</h5>

            <Form.Group className="mb-3">
                <Form.Label>Ciudad donde desea alquilar</Form.Label>
                <Form.Control type="text" placeholder="Ej. Santa Cruz" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Presupuesto aproximado (Bs.)</Form.Label>
                <Form.Control type="number" placeholder="Ej. 2500" />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Tipo de inmueble deseado</Form.Label>
                <Form.Select>
                    <option>Departamento</option>
                    <option>Casa</option>
                    <option>Habitación</option>
                </Form.Select>
            </Form.Group>

            <div className="d-flex flex-column gap-3">
                <Button type="submit" variant="primary">
                    Enviar solicitud
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

export default InquilinoForm;
