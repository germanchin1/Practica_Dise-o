import { useState } from "react";

const questions = [
    {
        question: "¿Cuál de estos formatos soporta transparencia?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "PNG",
    },
    {
        question: "¿Qué formato es más eficiente en la web?",
        options: ["PNG", "JPEG", "WebP", "AVIF"],
        answer: "AVIF",
    },
    {
        question: "¿Qué formato es ideal para gráficos vectoriales?",
        options: ["JPEG", "PNG", "SVG", "GIF"],
        answer: "SVG",
    },
    {
        question: "¿Qué formato fue desarrollado por Google?",
        options: ["JPEG", "PNG", "WebP", "TIFF"],
        answer: "WebP",
    },
    {
        question: "¿Cuál es un formato de compresión con pérdida?",
        options: ["PNG", "JPEG", "SVG", "BMP"],
        answer: "JPEG",
    },
    {
        question: "¿Cuál es mejor para fotografías complejas?",
        options: ["SVG", "GIF", "JPEG", "PNG"],
        answer: "JPEG",
    },
    {
        question: "¿Qué propiedad CSS se usa para ajustar cómo se ajusta una imagen a su contenedor?",
        options: ["background-size", "object-fit", "image-render", "display"],
        answer: "object-fit",
    },
    {
        question: "¿Qué atributo HTML mejora el rendimiento de carga de imágenes?",
        options: ["src", "alt", "loading", "title"],
        answer: "loading",
    },
    {
        question: "¿Qué formato permite animaciones?",
        options: ["JPEG", "PDF", "GIF", "BMP"],
        answer: "GIF",
    },
    {
        question: "¿Qué significa SVG?",
        options: ["Simple Vector Graphics", "Scalable Vector Graphics", "Super Vector Graphics", "Standard Vector Graphics"],
        answer: "Scalable Vector Graphics",
    },
];

const TestEjercicio1 = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));

    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de ${questions.length}`);
    };

    return (
        <div className="p-6 mt-8 border-t border-gray-300">
            <h2 className="text-2xl font-bold mb-4">Test de Conocimientos</h2>
            {questions.map((q, i) => (
                <div key={i} className="mb-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <p className="font-semibold mb-2">{q.question}</p>
                    <div className="flex flex-wrap gap-2">
                        {q.options.map((opt) => (
                            <button
                                key={opt}
                                className={`px-4 py-2 rounded transition-colors ${selectedAnswers[i] === opt
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                                    }`}
                                onClick={() => handleSelect(i, opt)}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <button
                onClick={checkAnswers}
                className="bg-green-500 text-white px-6 py-2 mt-4 rounded shadow hover:bg-green-600 transition-colors"
            >
                Verificar respuestas
            </button>
        </div>
    );
};

export default TestEjercicio1;
