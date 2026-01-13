import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ propiedades }) => {
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = L.map("map-container", {
      center: [-17.7833, -63.1821],
      zoom: 12,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapRef.current);
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    // Eliminar marcadores anteriores
    markersRef.current.forEach(marker =>
      mapRef.current.removeLayer(marker)
    );
    markersRef.current = [];

    if (!propiedades || propiedades.length === 0) return;

    const bounds = [];

    propiedades.forEach((prop) => {
      const marker = L.marker([
        prop.ubicacion.lat,
        prop.ubicacion.lng,
      ]).addTo(mapRef.current);

      marker.bindPopup(`
                <div style="font-size:14px;line-height:1.4">
                    <strong>${prop.titulo}</strong><br/>
                    <small>${prop.direccion}</small><br/>
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
                </div>
            `);

      markersRef.current.push(marker);
      bounds.push([prop.ubicacion.lat, prop.ubicacion.lng]);
    });

    // Ajustar el mapa a los marcadores
    if (bounds.length > 1) {
      mapRef.current.fitBounds(bounds, { padding: [40, 40] });
    } else {
      mapRef.current.setView(bounds[0], 15);
    }
  }, [propiedades]);

  return (
    <div
      id="map-container"
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    />
  );
};

export default Map;
