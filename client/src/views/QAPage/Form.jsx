import React, { useState } from 'react';


const Formulario = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(question, answer);
        setQuestion('');
        setAnswer('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="questionInput">Pregunta:</label>
                <input
                    id="questionInput"
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="answerInput">Respuesta:</label>
                <input
                    id="answerInput"
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;