import { Link } from "react-router-dom";

const EjercicioCard = ({ title, path }: { title: string; path: string }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <Link to={path} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Ver Ejercicio
            </Link>
        </div>
    );
};

export default EjercicioCard;
