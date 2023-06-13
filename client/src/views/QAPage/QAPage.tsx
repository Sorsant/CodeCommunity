import React, { useState } from 'react';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import Formulario from './Form';

interface PyRProps {
    initialQuestion?: string;
}

const PyR: React.FC<PyRProps> = ({ initialQuestion }) => {
    const [question, setQuestion] = useState(initialQuestion || '');
    const [answer, setAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const handleSubmit = (submittedQuestion: string, submittedAnswer: string) => {
        setQuestion(submittedQuestion);
        setAnswer(submittedAnswer);
        setShowAnswer(true);
    };

    return (
        <div className="pyr">
            <Question question={question} />
            {showAnswer && <Answer answer={answer} />}
            <Formulario onSubmit={handleSubmit} />
        </div>
    );
};

export default PyR;
