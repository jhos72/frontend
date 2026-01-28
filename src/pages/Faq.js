import React from "react"
import { useUser } from "../context/UserContext"
import { Container, Accordion, Card, Button } from "react-bootstrap"
import { faqOptions } from "../utils/faqOptions"
import { FaWhatsapp } from "react-icons/fa"

const Faq = () => {
    const primary = "#1F4E79"
    const accent = "#F3A712"
    const neutralLight = "#F7F9FC"

    const { userType } = useUser()

    // Filtrado opcional por tipo de usuario (escalable)
    const categoriasVisibles = faqOptions.filter(
        c =>
            (userType === "inquilino" && c.categoria === "Inquilinos") ||
            (userType === "propietario" && c.categoria === "Propietarios")
    );


    return (
        <div style={{ backgroundColor: neutralLight, minHeight: "100vh" }}>
            <Container className="py-5">

                {/* TÍTULO */}
                <h1 className="fw-bold mb-2" style={{ color: primary }}>
                    Preguntas Frecuentes
                </h1>
                <p className="text-muted mb-4">
                    Resolvemos las dudas más comunes para {userType === "inquilino" ? "inquilinos" : "propietarios"}.
                </p>

                {/* FAQ POR CATEGORÍAS */}
                {categoriasVisibles.map((categoria, index) => (
                    <Card key={index} className="mb-4 shadow-sm border-0">
                        <Card.Body>

                            {/* CATEGORÍA */}
                            <div
                                className="px-3 py-2 mb-3 rounded"
                                style={{
                                    backgroundColor: `${accent}22`,
                                    color: primary,
                                    fontWeight: "600"
                                }}
                            >
                                {categoria.categoria}
                            </div>

                            <Accordion>
                                {categoria.items.map((item, idx) => (
                                    <Accordion.Item
                                        eventKey={`${index}-${idx}`}
                                        key={idx}
                                        className="mb-2"
                                    >
                                        <Accordion.Header>
                                            {item.pregunta}
                                        </Accordion.Header>
                                        <Accordion.Body className="text-muted">
                                            {item.respuesta}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>

                        </Card.Body>
                    </Card>
                ))}

                {/* CTA FINAL */}
                <Card className="text-center shadow-sm mt-5 border-0">
                    <Card.Body>
                        <h5 className="fw-bold mb-3" style={{ color: primary }}>
                            ¿No encontraste tu respuesta?
                        </h5>

                        <Button
                            href="https://wa.me/78625134?text=Hola,%20tengo%20una%20consulta"
                            target="_blank"
                            style={{
                                backgroundColor: accent,
                                color: primary,
                                border: "none",
                                fontWeight: "600",
                                padding: "10px 20px"
                            }}
                        >
                            <FaWhatsapp className="me-2" />
                            Escríbenos por WhatsApp
                        </Button>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    )
}

export default Faq
