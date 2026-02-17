import { useState } from "react";

const questions = [
    {
        question: "¿Cuál es el formato más eficiente para imágenes en la web?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "AVIF",
    },
    {
        question: "¿Qué herramienta permite diseñar interfaces web?",
        options: ["Photoshop", "Figma", "GIMP"],
        answer: "Figma",
    },
    {
        question: "¿Qué hook se usa para referencias mutables?",
        options: ["useState", "useEffect", "useRef"],
        answer: "useRef",
    },
    {
        question: "¿Qué extensión de archivo usa TypeScript en React?",
        options: [".js", ".jsx", ".ts", ".tsx"],
        answer: ".tsx",
    },
];

const Test = () => {
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
            <h2 className="text-2xl font-bold mb-4">Test Final</h2>
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

export default Test;
