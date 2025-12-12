import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FiShield, FiClock, FiDollarSign, FiAward, FiBriefcase } from "react-icons/fi";

const SeguridadConfianza = () => {
  const beneficios = [
    {
      id: 1,
      icon: <FiShield size={50} />,
      titulo: "Propietarios Verificados",
      descripcion: "Validamos documentos y la titularidad de cada inmueble.",
    },
    {
      id: 2,
      icon: <FiClock size={50} />,
      titulo: "Soporte 24/7",
      descripcion: "Atención al cliente permanente para resolver cualquier duda.",
    },
    {
      id: 3,
      icon: <FiDollarSign size={50} />,
      titulo: "Pagos Seguros",
      descripcion: "Procesamiento confiable para depósitos y alquileres.",
    },
    {
      id: 4,
      icon: <FiAward size={50} />,
      titulo: "Garantía de Depósito",
      descripcion: "Reembolsos asegurados según contrato digital firmado.",
    },
    {
      id: 5,
      icon: <FiBriefcase size={50} />,
      titulo: "Corredores Legales",
      descripcion: "Alianza con agentes autorizados para mayor seguridad.",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-5">Seguridad y Confianza</h2>

      <Row className="g-4 justify-content-center">
        {beneficios.map((item) => (
          <Col
            key={item.id}
            md={4}
            sm={6}
            xs={12}
            className="d-flex align-items-stretch"
          >
            <Card className="p-4 text-center shadow-sm border-0">
              <div className="text-primary mb-3">{item.icon}</div>
              <h5 className="fw-bold">{item.titulo}</h5>
              <p className="text-muted">{item.descripcion}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SeguridadConfianza;

