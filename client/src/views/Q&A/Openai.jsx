import { useState } from 'react';
import { API_URL } from '../../config/index'

const OpenAIChat = () => {

    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${API_URL}/openai_chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputText }),
            });

            const data = await response.json();
            const output = data.output_text;

            setOutputText(output);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputText} onChange={handleInputChange} />
                <button type="submit">Send</button>
            </form>
            {outputText && (
                <div>
                    <h3>Answer:</h3>
                    <p>{outputText}</p>

                </div>
            )}
        </div>
    );
};

export default OpenAIChat;