import { useState } from "react";

const questions = [
    {
        question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
        options: ["WebGL", "Canvas API", "Intersection Observer"],
        answer: "Canvas API",
    },
    {
        question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
        options: ["getContext()", "getImageData()", "setTimeout()"],
        answer: "getImageData()",
    },
    {
        question: "¿Qué método se usa para dibujar una imagen en el Canvas?",
        options: ["drawImage()", "paintImage()", "renderImage()"],
        answer: "drawImage()",
    },
    {
        question: "¿Cómo se accede al contexto de renderizado 2D?",
        options: ["canvas.getContext('2d')", "canvas.get2DContext()", "canvas.context2D()"],
        answer: "canvas.getContext('2d')",
    },
    {
        question: "¿Qué propiedad del objeto imageData contiene los valores de los píxeles?",
        options: ["values", "pixels", "data"],
        answer: "data",
    },
];

const TestEjercicio3 = () => {
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
            <h2 className="text-2xl font-bold mb-4">Test de Manipulación de Imágenes</h2>
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

export default TestEjercicio3;
