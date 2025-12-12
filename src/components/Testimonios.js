import React from "react";
import { Container, Carousel, Card } from "react-bootstrap";

const Testimonios = () => {
    const testimonios = [
        {
            id: 1,
            texto: "“Encontré un departamento en La Paz en 3 días, todo digital.”",
            autor: "María F.",
            ciudad: "La Paz",
        },
        {
            id: 2,
            texto: "“Muy seguro, sin estafas como pasa en Facebook.”",
            autor: "Carlos R.",
            ciudad: "Santa Cruz",
        },
        {
            id: 3,
            texto: "“Pude firmar el contrato desde mi celular en minutos.”",
            autor: "Andrea S.",
            ciudad: "Cochabamba",
        },
        {
            id: 4,
            texto: "“Los pagos son claros y siempre llega recibo. Muy confiable.”",
            autor: "Jorge M.",
            ciudad: "El Alto",
        },
    ];

    return (
        <Container className="my-5">
            <h2 className="text-center fw-bold mb-4">Testimonios</h2>

            <Carousel indicators={true} controls={true} interval={5000}>
                {testimonios.map((item) => (
                    <Carousel.Item key={item.id}>
                        <Card
                            className="mx-auto p-4 shadow-sm border-0"
                            style={{ maxWidth: "700px" }}
                        >
                            <Card.Body className="text-center">
                                <p className="fs-4 fw-semibold">{item.texto}</p>

                                <div className="mt-3">
                                    <span className="fw-bold">{item.autor}</span>
                                    <br />
                                    <span className="text-muted">{item.ciudad}</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default Testimonios;
