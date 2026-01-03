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
                .bindPopup(`
          <strong>${prop.titulo}</strong><br/>
          ${prop.direccion}<br/>
          Bs. ${prop.precio}
        `);
        });

        return () => {
            map.remove();
        };
    }, [propiedades]);

    return <div id="map" style={{ height: "500px", width: "100%" }} />;
};

export default Map;
