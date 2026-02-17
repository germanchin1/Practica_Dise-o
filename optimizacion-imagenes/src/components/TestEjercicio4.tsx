import { useState } from "react";

const questions = [
    {
        question: "¿Qué formato es ideal para exportar iconos desde Figma?",
        options: ["JPEG", "PNG", "SVG"],
        answer: "SVG",
    },
    {
        question: "¿Qué plugin permite exportar código JSX desde Figma?",
        options: ["Tailwind CSS for Figma", "Anima for Figma", "SVG Export"],
        answer: "Anima for Figma",
    },
    {
        question: "¿Cuál es una ventaja de usar Figma con React?",
        options: ["Compila el código automáticamente", "Permite exportar activos optimizados", "Reemplaza a React"],
        answer: "Permite exportar activos optimizados",
    },
    {
        question: "¿Qué formato de imagen soporta mejor la compresión sin pérdida para la web?",
        options: ["BMP", "WebP", "TIFF"],
        answer: "WebP",
    },
    {
        question: "¿Para qué sirve el plugin 'Figma to Code'?",
        options: ["Para diseñar en código", "Para convertir diseños a HTML/JSX", "Para depurar React"],
        answer: "Para convertir diseños a HTML/JSX",
    },
];

const TestEjercicio4 = () => {
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
            <h2 className="text-2xl font-bold mb-4">Test sobre Figma y React</h2>
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

export default TestEjercicio4;
