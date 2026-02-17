const FigmaComponent = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Diseño Exportado de Figma</h2>
            <p className="text-gray-600 mb-4">
                Este componente fue diseñado en Figma y convertido en React.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
                ¡Haz clic aquí!
            </button>
            <div className="mt-6 flex justify-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                    <span>Imagen</span>
                </div>
            </div>
        </div>
    );
};

export default FigmaComponent;
