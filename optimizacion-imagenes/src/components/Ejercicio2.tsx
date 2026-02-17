import LazyImage from "./LazyImage";
import TestEjercicio2 from "./TestEjercicio2";

const Ejercicio2 = () => {
    const images = [
        "https://via.placeholder.com/600x400.webp?text=Image+1",
        "https://via.placeholder.com/600x400.png?text=Image+2",
        "https://via.placeholder.com/600x400.jpg?text=Image+3",
        "https://via.placeholder.com/600x400.webp?text=Image+4",
        "https://via.placeholder.com/600x400.png?text=Image+5",
        "https://via.placeholder.com/600x400.jpg?text=Image+6",
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Ejercicio 2: Lazy Loading en Imágenes</h1>
            <p className="mb-4">
                Las siguientes imágenes solo se cargarán cuando sean visibles en la pantalla.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {images.map((src, index) => (
                    <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`} />
                ))}
            </div>
            <TestEjercicio2 />
        </div>
    );
};

export default Ejercicio2;
