import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PropietarioForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        titulo: "",
        precio: "",
        tipo: "",
        tamanio: "",
        zona: "",
        direccion: "",
        servicios: [],
        nombre: "",
        apellido: "",
        celular: "",
        descripcion: "",
        ubicacion: ""
    });

    const serviciosDisponibles = [
        "Baño privado",
        "WiFi",
        "Agua",
        "Electricidad",
        "Cocina compartida"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleServicios = (servicio) => {
        setFormData((prev) => ({
            ...prev,
            servicios: prev.servicios.includes(servicio)
                ? prev.servicios.filter((s) => s !== servicio)
                : [...prev.servicios, servicio]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mensaje = `
Nueva publicación de inmueble:

Título: ${formData.titulo}
Precio: Bs ${formData.precio}
Tipo: ${formData.tipo}
Tamaño: ${formData.tamanio ? `${formData.tamanio} m²` : "No especificado"}
Zona: ${formData.zona}
Dirección referencial: ${formData.direccion || "No especificada"}

Servicios:
${formData.servicios.length ? formData.servicios.join(", ") : "No especificados"}

Descripción:
${formData.descripcion}

Contacto:
${formData.nombre} ${formData.apellido}
Celular: ${formData.celular}

Ubicación (Google Maps):
${formData.ubicacion || "No proporcionada"}
        `;

        window.location.href = `mailto:jhos243@gmail.com?subject=Publicación de inmueble&body=${encodeURIComponent(mensaje)}`;

        onClose(); // cerrar modal
    };

    return (
        <Form onSubmit={handleSubmit} className="d-grid gap-3">

            {/* INFO DEL INMUEBLE */}
            <Form.Group>
                <Form.Label>Título del anuncio</Form.Label>
                <Form.Control
                    name="titulo"
                    placeholder="Ej. Departamento céntrico"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Precio (Bs)</Form.Label>
                <Form.Control
                    name="precio"
                    type="number"
                    placeholder="Ej. 1500"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Tipo de inmueble</Form.Label>
                <Form.Select name="tipo" onChange={handleChange} required>
                    <option value="">Selecciona una opción</option>
                    <option value="Casa">Casa</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Habitacion">Habitación</option>
                </Form.Select>
            </Form.Group>

            <Form.Group>
                <Form.Label>Tamaño aproximado (m²)</Form.Label>
                <Form.Control
                    name="tamanio"
                    type="number"
                    min="5"
                    placeholder="Opcional"
                    onChange={handleChange}
                />
                <small className="text-muted">Ej: 12, 20, 35</small>
            </Form.Group>

            <Form.Group>
                <Form.Label>Zona</Form.Label>
                <Form.Select name="zona" onChange={handleChange} required>
                    <option value="">Selecciona zona</option>
                    <option>Norte</option>
                    <option>Sur</option>
                    <option>Este</option>
                    <option>Oeste</option>
                    <option>Centro</option>
                </Form.Select>
            </Form.Group>

            <Form.Group>
                <Form.Label>Dirección referencial</Form.Label>
                <Form.Control
                    name="direccion"
                    placeholder="Ej. a 2 cuadras del 2do anillo"
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="descripcion"
                    placeholder="Describe el inmueble, condiciones, etc."
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <hr />

            {/* SERVICIOS */}
            <strong>Servicios</strong>
            <div className="d-flex flex-wrap gap-3">
                {serviciosDisponibles.map((s) => (
                    <Form.Check
                        key={s}
                        type="checkbox"
                        label={s}
                        onChange={() => handleServicios(s)}
                    />
                ))}
            </div>

            <hr />

            {/* CONTACTO */}
            <strong>Contacto</strong>

            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    name="nombre"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                    name="apellido"
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Celular / WhatsApp</Form.Label>
                <Form.Control
                    name="celular"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <hr />

            {/* UBICACIÓN */}
            <strong>Ubicación</strong>
            <Form.Group>
                <Form.Control
                    name="ubicacion"
                    placeholder="Pega el enlace de Google Maps (opcional)"
                    onChange={handleChange}
                />
                <small className="text-muted">
                    Ayuda a ubicar mejor el inmueble
                </small>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
                Enviar publicación
            </Button>
        </Form>
    );
};

export default PropietarioForm;
