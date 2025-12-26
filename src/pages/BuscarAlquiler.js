import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import MapView from "../components/map/MapView";
//import FiltersPanel from "../components/map/FiltersPanel";

const buscarAlquiler = () => {
    return (
        <div style={{height:'100vh',display:'flex'}}>
            <Container>
                <Row>
                    <Col>
                        <p>Filtros</p>
                    </Col>
                    <Col>
                        <Row>
                            <p>Mapa</p>
                        </Row>
                        <Row>
                            <p>Lista de alquileres</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default buscarAlquiler
