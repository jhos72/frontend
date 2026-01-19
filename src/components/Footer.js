import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <Container
            fluid
            className="py-5 text-light"
            style={{ backgroundColor: "#333333" }}
        >
            <Container>
                <Row className="g-4">

                    {/* Sobre la empresa */}
                    <Col md={4} sm={12}>
                        <h5 className="fw-bold mb-3">Sobre la empresa</h5>
                        <p className="text-light">
                            Plataforma boliviana especializada en alquileres de larga duración.
                            Conectamos propietarios verificados con inquilinos de manera segura,
                            rápida y 100% online.
                        </p>
                    </Col>

                    {/* Contacto */}
                    <Col md={4} sm={12}>
                        <h5 className="fw-bold mb-3">Contacto</h5>

                        <p className="mb-2">
                            Jose Luis Berrios<br />
                            <a href="https://wa.me/78625134?text=Quiero mas Informacion" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                                <FaWhatsapp className="me-2" /> 78625134
                            </a>
                        </p>

                        <p className="mb-2">
                            <FaEnvelope className="me-2" /> contacto@rentabolivia.com
                        </p>
                    </Col>

                    {/* Enlaces */}
                    <Col md={4} sm={12}>
                        <h5 className="fw-bold mb-3">Enlaces</h5>

                        <p className="mb-1">
                            <a href="/politicas" className="text-light text-decoration-none">
                                Política de privacidad
                            </a>
                        </p>

                        <p className="mb-1">
                            <a href="/faq" className="text-light text-decoration-none">
                                Preguntas frecuentes
                            </a>
                        </p>

                        <div className="d-flex mt-3">
                            <a className="text-light me-3" href="https://www.facebook.com">
                                <FaFacebook size={22} />
                            </a>
                            <a className="text-light me-3" href="https://www.instagram.com">
                                <FaInstagram size={22} />
                            </a>
                            <a className="text-light" href="https://www.tiktok.com">
                                <FaTiktok size={22} />
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-light mt-4" />

                <p className="text-center text-light-50 mt-3 mb-0">
                    © {new Date().getFullYear()} RentaBolivia. Todos los derechos reservados.
                </p>
            </Container>
        </Container>
    );
};

export default Footer;
