import { useState } from 'react';

const OpenAIChat = () => {

    const { REACT_APP_API_URL } = process.env;
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${REACT_APP_API_URL}/openai_chat`, {
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
                <button type="submit">Enviar</button>
            </form>
            {outputText && (
                <div>
                    <h3>Respuesta:</h3>
                    <p>{outputText}</p>
                </div>
            )}
        </div>
    );
};

export default OpenAIChat;