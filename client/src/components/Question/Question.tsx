import React from 'react';

interface QuestionProps {
    question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
    return (
        <div className="question">
            <p>{question}</p>
        </div>
    );
};

export default Question;
