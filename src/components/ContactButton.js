import { Button } from "react-bootstrap";

const ContactButton = ({
    telefono,
    mensaje,
    
    variant = "success",
    size = "lg",
    className = ""
}) => {
    const url = `https://wa.me/591${telefono }?text=${encodeURIComponent(mensaje)}`;

    return (
        <Button
            href={url}
            target="_blank"
            variant={variant}
            size={size}
            className={className}
        >
            Contactar asesor
        </Button>
    );
};

export default ContactButton;
