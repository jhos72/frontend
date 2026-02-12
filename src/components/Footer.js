import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    FaWhatsapp,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";

import { footerData } from "../utils/footerData";

const Footer = () => {
    const { about, contact, social, legal } = footerData;

    return (
        <Container fluid className="py-5 text-light" style={{ backgroundColor: "#333333" }}>
            <Container>
                <Row className="g-4">

                    {/* Sobre la empresa */}
                    <Col md={4} sm={12}>
                        <h5 className="fw-bold mb-3">{about.title}</h5>
                        <p className="text-light">{about.description}</p>
                    </Col>

                    {/* Contacto */}
                    <Col md={4} sm={12}>
                        <h5 className="fw-bold mb-3">{contact.title}</h5>

                        <p className="mb-2">
                            {contact.name}
                            <br />
                            <a
                                href={contact.whatsapp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light text-decoration-none"
                            >
                                <FaWhatsapp className="me-2" />
                                {contact.whatsapp.number}
                            </a>
                        </p>

                        <p className="mb-2">
                            <FaEnvelope className="me-2" />
                            {contact.email}
                        </p>
                    </Col>

                    {/* Redes */}
                    <Col md={4} sm={12}>
                        <h5 className="fw-bold mb-3">{social.title}</h5>

                        <div className="d-flex my-3">
                            <a className="text-light me-3" href={social.links.facebook} target="_blank" rel="noreferrer">
                                <FaFacebook size={22} />
                            </a>
                            <a className="text-light me-3" href={social.links.instagram} target="_blank" rel="noreferrer">
                                <FaInstagram size={22} />
                            </a>
                            <a className="text-light" href={social.links.tiktok} target="_blank" rel="noreferrer">
                                <FaTiktok size={22} />
                            </a>
                        </div>

                        {legal.map((item) => (
                            <p key={item.path} className="mb-1">
                                <a href={item.path} className="text-light text-decoration-none">
                                    {item.label}
                                </a>
                            </p>
                        ))}
                    </Col>
                </Row>

                <hr className="border-light mt-4" />

                <p className="text-center text-light-50 mt-3 mb-0">
                    © {new Date().getFullYear()} RentaFijaBolivia. Todos los derechos reservados.
                </p>
            </Container>
        </Container>
    );
};

export default Footer;
