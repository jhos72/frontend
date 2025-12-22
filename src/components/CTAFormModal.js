import { Modal } from "react-bootstrap";
import PropietarioForm from "./forms/PropietarioForm";
import InquilinoForm from "./forms/InquilinoForm";

const CTAFormModal = ({ show, onHide, userType }) => {
    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    {userType === "propietario"
                        ? "Publicar mi propiedad"
                        : "Buscar un alquiler"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {userType === "propietario" ? (
                    <PropietarioForm onClose={onHide} />
                ) : (
                    <InquilinoForm onClose={onHide} />
                )}
            </Modal.Body>
        </Modal>
    );
};

export default CTAFormModal;
