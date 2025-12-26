import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { ctaOptions } from "../utils/ctaOptions";
import CTAFormModal from "./CTAFormModal";
import { useNavigate } from "react-router-dom";

const CTA = () => {
    const { userType } = useUser();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const primary = "#1F4E79";
    const accent = "#F3A712";
    const neutralLight = "#F7F9FC";

    const content = ctaOptions[userType];

    const whatsappUrl = `https://wa.me/59161928711?text=${encodeURIComponent(
        content.whatsappMessage
    )}`;

    const handlePrimaryAction = () => {
        if (content.action === "redirect" && content.redirectTo) {
            if (content.openInNewTab) {
                window.open(
                    content.redirectTo,
                    "_blank",
                    "noopener,noreferrer"
                );
            } else {
                navigate(content.redirectTo);
            }
            return;
        }

        setShowModal(true);
    };


    return (
        <>
            <Container
                fluid
                className="py-5 text-center"
                style={{
                    backgroundColor: primary,
                    color: neutralLight,
                }}
            >
                <h2 className="fw-bold mb-4">
                    {content.title}
                </h2>

                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                    {/* CTA PRINCIPAL */}
                    <Button
                        size="lg"
                        onClick={handlePrimaryAction}
                        style={{
                            backgroundColor: accent,
                            border: "none",
                            color: "#1F4E79",
                            fontWeight: "600",
                            padding: "12px 30px",
                            borderRadius: "8px",
                        }}
                    >
                        {content.buttonText}
                    </Button>

                    {/* CTA SECUNDARIO (WhatsApp) */}
                    <Button
                        size="lg"
                        href={whatsappUrl}
                        target="_blank"
                        variant="outline-light"
                        style={{
                            padding: "12px 30px",
                            borderRadius: "8px",
                        }}
                    >
                        Hablar con una asesora
                    </Button>
                </div>
            </Container>

            {/* MODAL SOLO PARA PROPIETARIO */}
            {userType === "propietario" && (
                <CTAFormModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    userType={userType}
                />
            )}
        </>
    );
};

export default CTA;
