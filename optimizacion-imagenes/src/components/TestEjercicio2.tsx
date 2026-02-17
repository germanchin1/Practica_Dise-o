import { useState } from "react";

const questions = [
    {
        question: "¿Qué hace Lazy Loading?",
        options: [
            "Carga todas las imágenes de inmediato",
            "Carga imágenes solo cuando son visibles",
            "Reduce la calidad de las imágenes",
        ],
        answer: "Carga imágenes solo cuando son visibles",
    },
    {
        question: "¿Qué API de JavaScript se usa para Lazy Loading?",
        options: ["Fetch API", "Intersection Observer", "Canvas API"],
        answer: "Intersection Observer",
    },
    {
        question: "¿Cuál es el principal beneficio de Lazy Loading?",
        options: ["Mejora el SEO", "Reduce el tiempo de carga inicial", "Aumenta el tamaño de las imágenes"],
        answer: "Reduce el tiempo de carga inicial",
    },
    {
        question: "¿Qué significa { threshold: 0.1 }?",
        options: ["La imagen se carga al 10% de visibilidad", "La imagen se carga al 100% de visibilidad", "La imagen se carga con 10% de opacidad"],
        answer: "La imagen se carga al 10% de visibilidad",
    },
    {
        question: "¿Qué atributo HTML nativo permite Lazy Loading?",
        options: ["loading='lazy'", "defer='true'", "async='async'"],
        answer: "loading='lazy'",
    },
];

const TestEjercicio2 = () => {
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
            <h2 className="text-2xl font-bold mb-4">Test de Lazy Loading</h2>
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

export default TestEjercicio2;
