import React from 'react';

interface AnswerProps {
    answer: string;
}

const Answer: React.FC<AnswerProps> = ({ answer }) => {
    return (
        <div className="answer">
            <p>{answer}</p>
        </div>
    );
};

export default Answer;
