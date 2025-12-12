import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
                            <FaWhatsapp className="me-2" /> +591 70000000
                        </p>
                        <p className="mb-2">
                            <FaPhone className="me-2" /> (2) 2200000
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
                            <a className="text-light me-3" href="#">
                                <FaFacebook size={22} />
                            </a>
                            <a className="text-light me-3" href="#">
                                <FaInstagram size={22} />
                            </a>
                            <a className="text-light" href="#">
                                <FaTwitter size={22} />
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
