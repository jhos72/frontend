import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    useEffect(() => {
        // 1. Coordenadas de Santa Cruz
        const santaCruz = [-17.7833, -63.1821];

        // 2. Crear el mapa
        const map = L.map("map").setView(santaCruz, 13);

        // 3. Agregar tiles (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        // 4. Agregar un marcador
        L.marker(santaCruz)
            .addTo(map)
            .bindPopup("Santa Cruz de la Sierra")
            .openPopup();

        // 5. Limpieza al desmontar el componente
        return () => {
            map.remove();
        };
    }, []);

    return (
        <div
            id="map"
            style={{ height: "1000px", width: "100%" }}
        />
    );
};

export default Map;
