import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { ctaOptions } from "../utils/ctaOptions";
import CTAFormModal from "./CTAFormModal";

const CTA = () => {
    const { userType } = useUser();
    const [showModal, setShowModal] = useState(false);

    const primary = "#1F4E79";
    const accent = "#F3A712";
    const neutralLight = "#F7F9FC";

    const content = ctaOptions[userType];

    const whatsappUrl = `https://wa.me/591XXXXXXXXX?text=${encodeURIComponent(
        content.whatsappMessage
    )}`;

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
                <h2 className="fw-bold mb-4">{content.title}</h2>

                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                    {/* CTA PRINCIPAL */}
                    <Button
                        size="lg"
                        onClick={() => setShowModal(true)}
                        style={{
                            backgroundColor: accent,
                            border: "none",
                            color: "#2E2E2E",
                            fontWeight: "bold",
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

            {/* MODAL */}
            <CTAFormModal
                show={showModal}
                onHide={() => setShowModal(false)}
                userType={userType}
            />
        </>
    );
};

export default CTA;
