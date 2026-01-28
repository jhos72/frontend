import { Modal } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import PropietarioForm from "./forms/PropietarioForm";


const CTAFormModal = ({ show, onHide, userType }) => {

    // 👉 Si es inquilino y se intenta abrir el modal
    if (show && userType === "inquilino") {
        return <Navigate to="/buscar-alquiler" replace />;
    }

    // 👉 Solo propietarios ven el modal
    if (!show || userType !== "propietario") return null;

    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    Publicar mi propiedad
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <PropietarioForm onClose={onHide} />
            </Modal.Body>
        </Modal>
    );
};

export default CTAFormModal;
