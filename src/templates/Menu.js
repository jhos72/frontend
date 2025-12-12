import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Image, Form } from 'react-bootstrap'
import LogoCasa from '../assets/logoCasa.png'

/**
 * props:
 *  - userType: "propietario" | "inquilino"
 *  - onToggleUser: función para cambiar de usuario
 */
const Menu = ({ userType = "inquilino", onToggleUser }) => {

  const primary = "#1F4E79"
  //const secondary = "#4A8FD4"
  const accent = "#F3A712"
  //const neutralDark = "#2E2E2E"
  const neutralLight = "#F7F9FC"

  return (
    <Navbar 
      expand="lg" 
      style={{ backgroundColor: primary }}
      className="shadow-sm"
      variant="dark"
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="/">
          <Image 
            src={LogoCasa}
            width="90"
            height="60"
            className="d-inline-block align-top rounded mx-3"
            alt="Logo Casa"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">

            {/* INICIO */}
            <Nav.Link href="/" className="mx-2" style={{ color: neutralLight }}>
              Inicio
            </Nav.Link>

            {/* NOSOTROS */}
            <Nav.Link href="/nosotros" className="mx-2" style={{ color: neutralLight }}>
              Nosotros
            </Nav.Link>

            {/* REGISTRARME (puede cambiar según el usuario) */}
            <Nav.Link 
              href={userType === "propietario" ? "/registro-propietario" : "/registro-inquilino"} 
              className="mx-2"
              style={{ color: accent, fontWeight: "bold" }}
            >
              Registrarme
            </Nav.Link>
          </Nav>

          {/* SWITCH DE USUARIO */}
          <div className="d-flex align-items-center">
            <span style={{ color: neutralLight, marginRight: "10px" }}>
              {userType === "propietario" ? "Propietario" : "Inquilino"}
            </span>

            <Form.Check 
              type="switch"
              id="switch-user"
              checked={userType === "propietario"}
              onChange={onToggleUser}
              style={{ accentColor: accent }}
            />
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Menu
