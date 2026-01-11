import deptoImg1 from "../assets/dept1.jpg";
import deptoImg2 from "../assets/dept2.jpg";
import deptoImg3 from "../assets/dept3.jpg";
import deptoImg4 from "../assets/dept4.jpg";
import deptoImg5 from "../assets/dept5.jpg"
import deptoImg6 from "../assets/dept6.jpg"
import deptoImg7 from "../assets/dept7.jpg"

import cuartoImg1 from "../assets/cuarto1.jpg";
import cuartoImg2 from "../assets/cuarto2.jpg";
import cuartoImg3 from "../assets/cuarto3.jpg";

const propiedades = [
    {
        id: 1,
        titulo: "Cuartos en alquiler",
        precio: 700,
        tipo: "Habitacion",
        tamanio: "6 m²",
        banos: "Privado",
        zona: "Este",
        direccion: "Calle Madrejon #18",
        servicios: [
            "Baño privado",
            "WiFi",
            "Agua",
            "Electricidad",
            "Cocina compartida"
        ],
        imagenes: [
            cuartoImg1,
            cuartoImg2,
            cuartoImg3
        ],
        /*contacto: {
            nombre: "José Luis",
            apellido: "Berrios",
            celular: "78625134",
        },*/
        ubicacion: {
            lat: -17.790806,
            lng: -63.201444,
        },
        descripcion: "Cuartos en alquiler sin amoblar, ideales para personas que desean acondicionar su espacio según sus propias necesidades y preferencias. Los ambientes son cómodos, bien iluminados y cuentan con todos los servicios básicos en perfecto funcionamiento, incluyendo agua, energía eléctrica y acceso a internet. El inmueble se encuentra estratégicamente ubicado, en una zona segura y de fácil acceso, cercana a transporte público, comercios y servicios esenciales. "
    },
    {
        id: 2,
        titulo: "Departamentos en alquiler",
        precio: 1800,
        tipo: "Departamento",
        tamanio: "15 m²",
        banos: "Privado",
        zona: "Norte",
        direccion: "Cambodromo 5to anillo",
        servicios: [
            "Baño privado",
            "WiFi",
            "Agua",
            "Electricidad",
            "Cocina"
        ],
        imagenes: [
            deptoImg1,
            deptoImg2,
            deptoImg3,
            deptoImg4,
            deptoImg5,
            deptoImg6,
            deptoImg7
        ],
        /*contacto: {
            nombre: "Jose Luis",
            apellido: "Berrios",
            celular: "78625134",
        },*/
        ubicacion: {
            lat: -17.749444,
            lng: -63.147472,
        },
        descripcion: "Departamento tipo monoambiente completamente amoblado, diseñado para brindar comodidad y funcionalidad en un solo espacio. El inmueble cuenta con todos los servicios básicos incluidos, ofreciendo un ambiente práctico y confortable, ideal tanto para estudiantes como para profesionales que buscan independencia y tranquilidad."
    },
];

export default propiedades;
