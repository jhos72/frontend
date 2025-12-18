import { Container, Row, Col, Card } from "react-bootstrap"
import { useUser } from "../context/UserContext"
import { beneficiosOptions } from "../utils/beneficiosOptions.js"

const Beneficios = () => {
    const { userType } = useUser()
    const content = beneficiosOptions[userType]

    const primary = "#1F4E79"
    const accent = "#F3A712"
    const neutralLight = "#F7F9FC"

    return (
        <section style={{ backgroundColor: neutralLight }}>
            <Container className="py-5">

                {/* HEADER */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ color: primary }}>
                        {content.title}
                    </h2>
                    <p className="text-muted">
                        {content.subtitle}
                    </p>
                </div>

                {/* CARDS */}
                <Row className="g-4">
                    {content.items.map((item, index) => (
                        <Col lg={3} md={6} sm={12} key={index}>
                            <Card
                                className="h-100 border-0 shadow-sm text-center"
                                style={{
                                    transition: "transform 0.2s ease",
                                    cursor: "default"
                                }}
                            >
                                <Card.Body>
                                    <i
                                        className={`bi ${item.icon} fs-1`}
                                        style={{ color: accent }}
                                    ></i>

                                    <h5 className="fw-bold mt-3" style={{ color: primary }}>
                                        {item.title}
                                    </h5>

                                    <p className="text-muted">
                                        {item.description}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    )
}

export default Beneficios
