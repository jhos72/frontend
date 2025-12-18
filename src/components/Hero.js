import { Container, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap"
import { useUser } from "../context/UserContext"
import { heroOptions } from "../utils/heroOptions"
import HeroImg from "../assets/imag1.jpg"

const Hero = () => {
    const { userType } = useUser()
    const content = heroOptions[userType]

    const primary = "#1F4E79"
    const accent = "#F3A712"
    const neutralLight = "#F7F9FC"

    return (
        <section
            style={{
                backgroundImage: `linear-gradient(
            rgba(31, 78, 121, 0.30),
            rgba(31, 78, 121, 0.10)
        ), url(${HeroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                color: neutralLight
            }}
        >
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1 className="fw-bold display-5">{content.title}</h1>
                        <p className="lead mt-3">{content.subtitle}</p>
                        <p className="mt-2">{content.description}</p>

                        <div className="mt-4 d-flex gap-3 flex-wrap">
                            <Button
                                style={{
                                    backgroundColor: accent,
                                    color: primary,
                                    border: "none",
                                    fontWeight: "600"
                                }}
                            >
                                {content.ctaPrimary}
                            </Button>

                            <Button variant="outline-light">
                                {content.ctaSecondary}
                            </Button>
                        </div>

                        {userType === "inquilino" && (
                            <InputGroup className="mt-4">
                                <FormControl placeholder="Ciudad, zona o tipo de inmueble" />
                                <Button
                                    style={{
                                        backgroundColor: accent,
                                        color: primary,
                                        border: "none"
                                    }}
                                >
                                    Buscar
                                </Button>
                            </InputGroup>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero
