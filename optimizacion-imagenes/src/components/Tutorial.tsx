import EjercicioCard from "./EjercicioCard";
import MarkdownEditor from "./MarkdownEditor";
import Test from "./Test";

const ejercicios = [
    { id: 1, title: "Optimización de Imágenes", path: "/ejercicio1" },
    { id: 2, title: "Lazy Loading", path: "/ejercicio2" },
    { id: 3, title: "Manipulación con Canvas", path: "/ejercicio3" },
    { id: 4, title: "Figma a React", path: "/ejercicio4" },
];

const Tutorial = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Tutorial Interactivo</h1>
            <p className="mb-8 text-center text-gray-600 text-lg">
                Aquí puedes documentar y presentar los ejercicios realizados durante la práctica.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {ejercicios.map((ejercicio) => (
                    <EjercicioCard key={ejercicio.id} title={ejercicio.title} path={ejercicio.path} />
                ))}
            </div>

            <div className="mb-12">
                <MarkdownEditor />
            </div>

            <div className="mb-8">
                <Test />
            </div>
        </div>
    );
};

export default Tutorial;
