import { Container, Carousel, Card } from "react-bootstrap"
import { useUser } from "../context/UserContext"
import { comoFuncionaOptions } from "../utils/comoFuncionaOptions"

const ComoFunciona = () => {
    const { userType } = useUser()
    const content = comoFuncionaOptions[userType]

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

                {/* CAROUSEL */}
                <Carousel indicators={false} interval={3000}>
                    {content.steps.map((step, index) => (
                        <Carousel.Item key={index}>
                            <div className="d-flex justify-content-center">
                                <Card
                                    className="shadow-sm text-center border-0"
                                    style={{
                                        maxWidth: "420px",
                                        padding: "30px"
                                    }}
                                >
                                    <i
                                        className={`bi ${step.icon} fs-1`}
                                        style={{ color: accent }}
                                    ></i>

                                    <h5 className="fw-bold mt-3" style={{ color: primary }}>
                                        Paso {index + 1}: {step.title}
                                    </h5>

                                    <p className="text-muted">
                                        {step.description}
                                    </p>
                                </Card>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>

            </Container>
        </section>
    )
}

export default ComoFunciona
