import { useState } from "react";

export default function Botoes({ botao }) {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput(prevValue => prevValue + value);
    };

    return (
        <button style={{padding: '20px', fontSize: '30px'}} onClick={() => handleButtonClick(botao)}>{botao}</button>
    );
}