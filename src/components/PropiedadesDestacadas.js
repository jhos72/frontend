import React from "react";
import { Container, Card, Badge, Carousel } from "react-bootstrap";

const PropiedadesDestacadas = () => {
  const propiedades = [
    {
      id: 1,
      imagen: "https://picsum.photos/800/400?random=1",
      ubicacion: "La Paz, Calacoto",
      precio: "Bs. 3.200 / mes",
      caracteristicas: "2 dormitorios · 1 baño · 80 m²",
      etiqueta: "Disponible para contrato de 6+ meses",
    },
    {
      id: 2,
      imagen: "https://picsum.photos/800/400?random=2",
      ubicacion: "Cochabamba, Queru Queru",
      precio: "Bs. 2.800 / mes",
      caracteristicas: "3 dormitorios · 2 baños · 120 m²",
      etiqueta: "Disponible para contrato de 6+ meses",
    },
    {
      id: 3,
      imagen: "https://picsum.photos/800/400?random=3",
      ubicacion: "Santa Cruz, Equipetrol",
      precio: "Bs. 4.500 / mes",
      caracteristicas: "2 dormitorios · 2 baños · 95 m²",
      etiqueta: "Disponible para contrato de 6+ meses",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-4 fw-bold text-center">Propiedades destacadas</h2>

      <Carousel interval={5000} indicators={true} controls={true}>
        {propiedades.map((prop) => (
          <Carousel.Item key={prop.id}>
            <Card className="mx-auto shadow-sm border-0" style={{ maxWidth: "700px" }}>
              <Card.Img
                variant="top"
                src={prop.imagen}
                style={{ height: "350px", objectFit: "cover" }}
              />

              <Card.Body>
                <Badge bg="success" className="mb-2">
                  {prop.etiqueta}
                </Badge>

                <Card.Title className="mt-2">{prop.ubicacion}</Card.Title>

                <h5 className="text-primary fw-bold">{prop.precio}</h5>

                <Card.Text className="text-muted">{prop.caracteristicas}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default PropiedadesDestacadas;
