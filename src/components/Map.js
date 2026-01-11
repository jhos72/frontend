import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ propiedades }) => {
    useEffect(() => {
        const map = L.map("map").setView([-17.7833, -63.1821], 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        propiedades.forEach((prop) => {
            L.marker([prop.ubicacion.lat, prop.ubicacion.lng])
                .addTo(map)
                .bindPopup(`<div style="font-size:14px">
    <strong>${prop.titulo}</strong><br/>
    ${prop.direccion}<br/>
    <span style="color:#198754;font-weight:bold">
      Bs. ${prop.precio}
    </span><br/>
    <a 
      href="/buscar-alquiler/${prop.id}" 
      style="
        display:inline-block;
        margin-top:8px;
        padding:6px 12px;
        background:#198754;
        color:#fff;
        text-decoration:none;
        border-radius:6px;
        font-size:13px;
      "
    >
      Ver detalles
    </a>
  </div>`);
        });

        return () => {
            map.remove();
        };
    }, [propiedades]);

    return <div id="map" style={{ height: "500px", width: "100%" }} />;
};

export default Map;
