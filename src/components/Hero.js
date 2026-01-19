import { Container, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap"
import { useUser } from "../context/UserContext"
import { heroOptions } from "../utils/heroOptions"
import HeroImg from "../assets/imag1.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"

const Hero = () => {
    const { userType } = useUser()
    const content = heroOptions[userType]

    const [search, setSearch] = useState("")

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
                                as={Link}
                                to={content.pathPrimary}
                                style={{
                                    backgroundColor: accent,
                                    color: primary,
                                    border: "none",
                                    fontWeight: "600"
                                }}
                            >
                                {content.ctaPrimary}
                            </Button>

                            <Button
                                as={Link}
                                to={content.pathSecondary}
                                variant="outline-light"
                            >
                                {content.ctaSecondary}
                            </Button>
                        </div>

                        {userType === "inquilino" && (
                            <InputGroup className="mt-4">
                                <FormControl
                                    placeholder="Departamento, casa o habitación"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <Button
                                    as={Link}
                                    to={`/buscar-alquiler${search ? `?tipo=${encodeURIComponent(search)}` : ""}`}
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
