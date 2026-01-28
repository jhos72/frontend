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

import dep3img1 from "../assets/dep3img1.jpeg";
import dep3img2 from "../assets/dep3img2.jpeg";
import dep3img3 from "../assets/dep3img3.jpeg";
import dep3img4 from "../assets/dep3img4.jpeg";

import dep4img1 from "../assets/dep4img1.jpeg";
import dep4img2 from "../assets/dep4img2.jpeg";
import dep4img3 from "../assets/dep4img3.jpeg";
import dep4img4 from "../assets/dep4img4.jpeg";
import dep4img5 from "../assets/dep4img5.jpeg";
import dep4img6 from "../assets/dep4img6.jpeg";
import dep4img7 from "../assets/dep4img7.jpeg";
import dep4img8 from "../assets/dep4img8.jpeg";
import dep4img9 from "../assets/dep4img9.jpeg"; 
import dep4img10 from "../assets/dep4img10.jpeg";

const propiedades = [
    {
        id: 1,
        titulo: "Cuartos en alquiler",
        precio: 700,
        tipo: "Habitacion",
        tamanio: "6 m²",
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
        contacto: {
            nombre: "Marianela",
            apellido: "Salvatierra",
            celular: "78070618",
        },
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
        contacto: {
            nombre: "Marinela",
            apellido: "Salvatierra",
            celular: "78070618",
        },
        ubicacion: {
            lat: -17.749444,
            lng: -63.147472,
        },
        descripcion: "Departamento tipo monoambiente completamente amoblado, diseñado para brindar comodidad y funcionalidad en un solo espacio. El inmueble cuenta con todos los servicios básicos incluidos, ofreciendo un ambiente práctico y confortable, ideal tanto para estudiantes como para profesionales que buscan independencia y tranquilidad."
    },
    {
        id: 3,
        titulo: "Habitacion en alquiler",
        precio: 600,
        tipo: "Habitacion",
        tamanio: "16 m²",
        zona: "Norte",
        direccion: "Calle 4(entre 3er y 4to anillo).Cerca de IC Norte, Multicenter y Mercado 4 de noviembre",
        servicios: [
            "Agua",
            "Electricidad",
            "Garaje para moto"
        ],
        imagenes: [
            dep3img1,
            dep3img2,
            dep3img3,
            dep3img4
        ],
        contacto: {
            nombre: "Marinela",
            apellido: "Salvatierra",
            celular: "78070618",
        },
        ubicacion: {
            lat: -17.776273,
            lng: -63.207523,
        },
        descripcion: "Solo para una persona. No se aceptan mascotas. Sin deposito de garantia.  "
    },
    {
        id: 4,
        titulo:"DEPARTAMENTO EN ALQUILER",
        precio: 4000,
        tipo: "Departamento",
        tamanio: "215 m²",
        zona: "Norte",
        direccion: "1er Anillo (C/ Warner esq. Viedman)",
        servicios: [
            "Agua",
            "Electricidad",
            "Gas domiciliario",
            "Area de servicio"
        ],
        imagenes: [
            dep4img1,
            dep4img2,
            dep4img3,
            dep4img4,
            dep4img4,
            dep4img4,
            dep4img5,
            dep4img6,
            dep4img7,
            dep4img8,
            dep4img9,
            dep4img10
        ],
        contacto: {
            nombre: "Marinela",
            apellido: "Salvatierra",
            celular: "78070618",
        },
        ubicacion: {
            lat: -17.785534,
            lng: -63.172183,
        },
        descripcion: "El departamento cuenta con 3 dormitorios(1 en Suite), todos los ambientes con A/C, cocina cerrada y area de servicio completa"
    },
];

export default propiedades;
