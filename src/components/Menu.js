import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Image, Form } from 'react-bootstrap'
import { useUser } from '../context/UserContext'
import { menuOptions } from '../utils/menuOptions'
import LogoRenta from '../assets/renta-fija-logo.png'

const Menu = () => {
    const { userType, toggleUserType } = useUser()

    // 🎨 PALETA
    const primary = "#1F4E79"
    const accent = "#F3A712"
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
                        src={LogoRenta}
                        width="90"
                        height="60"
                        className="d-inline-block align-top rounded mx-3"
                        alt="Logo Casa"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">

                    {/* OPCIONES DINÁMICAS */}
                    <Nav className="me-auto">
                        {menuOptions[userType].map((item, index) => (
                            <Nav.Link
                                key={index}
                                href={item.path || "#"}
                                className="mx-2"
                                style={{
                                    color: item.highlight ? accent : neutralLight,
                                    fontWeight: item.highlight ? "bold" : "normal"
                                }}
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>

                    {/* SWITCH DE USUARIO */}
                    <div className="d-flex align-items-center gap-2">
                        <span style={{ color: neutralLight, fontSize: "0.9rem" }}>
                            {userType === "propietario" ? "Propietario" : "Inquilino"}
                        </span>

                        <Form.Check
                            type="switch"
                            id="switch-user"
                            checked={userType === "propietario"}
                            onChange={toggleUserType}
                            style={{ accentColor: accent }}
                        />
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu
