import React, { useState } from "react"

const Publicar = () => {
    const primary = "#1F4E79"
    const accent = "#F3A712"
    const neutralLight = "#F7F9FC"

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
    })

    const serviciosDisponibles = [
        "Baño privado",
        "WiFi",
        "Agua",
        "Electricidad",
        "Cocina compartida"
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleServicios = (servicio) => {
        setFormData((prev) => ({
            ...prev,
            servicios: prev.servicios.includes(servicio)
                ? prev.servicios.filter((s) => s !== servicio)
                : [...prev.servicios, servicio]
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

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
        `

        window.location.href = `mailto:jhos243@gmail.com?subject=Publicación de inmueble&body=${encodeURIComponent(mensaje)}`
    }

    return (
        <div style={{ backgroundColor: neutralLight, minHeight: "100vh", padding: "40px 16px" }}>
            <div
                style={{
                    maxWidth: "720px",
                    margin: "auto",
                    backgroundColor: "#fff",
                    padding: "32px",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
                }}
            >
                <h2 className="fw-bold mb-4" style={{ color: primary }}>
                    Publicar inmueble
                </h2>

                <form onSubmit={handleSubmit} className="d-grid gap-3">

                    <input className="form-control" name="titulo" placeholder="Título del anuncio" onChange={handleChange} required />

                    <input className="form-control" name="precio" type="number" placeholder="Precio (Bs)" onChange={handleChange} required />

                    <select className="form-select" name="tipo" onChange={handleChange} required>
                        <option value="">Tipo de inmueble</option>
                        <option value="Casa">Casa</option>
                        <option value="Departamento">Departamento</option>
                        <option value="Habitacion">Habitación</option>
                    </select>

                    {/* UX MEJORADA PARA TAMAÑO */}
                    <div>
                        <input
                            className="form-control"
                            name="tamanio"
                            type="number"
                            placeholder="Tamaño aproximado en m² (opcional)"
                            onChange={handleChange}
                            min="5"
                        />
                        <small className="text-muted">
                            Ej: 12, 20, 35 (no es obligatorio)
                        </small>
                    </div>

                    <select className="form-select" name="zona" onChange={handleChange} required>
                        <option value="">Zona</option>
                        <option value="Norte">Norte</option>
                        <option value="Sur">Sur</option>
                        <option value="Este">Este</option>
                        <option value="Oeste">Oeste</option>
                        <option value="Centro">Centro</option>
                    </select>

                    <input
                        className="form-control"
                        name="direccion"
                        placeholder="Dirección referencial (ej: a 2 cuadras del 2do anillo)"
                        onChange={handleChange}
                    />

                    <textarea
                        className="form-control"
                        name="descripcion"
                        placeholder="Describe el inmueble, condiciones, a quién va dirigido, etc."
                        rows={4}
                        onChange={handleChange}
                        required
                    />

                    <hr />

                    <strong style={{ color: primary }}>Servicios</strong>

                    <div className="d-flex flex-wrap gap-3">
                        {serviciosDisponibles.map((s) => (
                            <label key={s} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={() => handleServicios(s)}
                                />
                                <span className="ms-2">{s}</span>
                            </label>
                        ))}
                    </div>

                    <hr />

                    <strong style={{ color: primary }}>Contacto</strong>

                    <input className="form-control" name="nombre" placeholder="Nombre" onChange={handleChange} required />

                    <input className="form-control" name="apellido" placeholder="Apellido" onChange={handleChange} />

                    <input className="form-control" name="celular" placeholder="Celular / WhatsApp" onChange={handleChange} required />

                    <hr />

                    <strong style={{ color: primary }}>Ubicación</strong>

                    <input
                        className="form-control"
                        name="ubicacion"
                        placeholder="Pega aquí el enlace de Google Maps (opcional)"
                        onChange={handleChange}
                    />
                    <small className="text-muted">
                        Ayuda a los interesados a ubicar mejor el inmueble
                    </small>

                    <button
                        type="submit"
                        style={{
                            backgroundColor: accent,
                            color: primary,
                            border: "none",
                            padding: "12px",
                            borderRadius: "8px",
                            fontWeight: "600",
                            marginTop: "16px"
                        }}
                    >
                        Enviar publicación
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Publicar
