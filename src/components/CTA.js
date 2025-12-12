import React from "react";
import { Container, Button } from "react-bootstrap";

const CTA = () => {
    return (
        <Container
            fluid
            className="py-5 text-center"
            style={{
                backgroundColor: "#333333",
                color: "white",
            }}
        >
            <h2 className="fw-bold mb-3">Encuentra tu próximo hogar hoy</h2>

            <Button
                href="/propiedades"
                size="lg"
                style={{
                    backgroundColor: "#d1bb9b",
                    borderColor: "#d1bb9b",
                    color: "#333333",
                    fontWeight: "bold",
                }}
            >
                Ver propiedades disponibles
            </Button>
        </Container>
    );
};

export default CTA;
