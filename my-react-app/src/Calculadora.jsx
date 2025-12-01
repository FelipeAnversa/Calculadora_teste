import Botoes from "./Botoes";

export default function Calculadora() {

    return (
        <div style={{ border: '5px solid black', textAlign: 'center'}}>
            <input style={{ width: '220px'}} readOnly value={input}></input>
            <div style={{display: 'flex'}}>
                <Botoes label="%" botao="%" />
                <Botoes label="C" botao="C" />
                <Botoes label="D" botao="D" />
                <Botoes label="/" botao="/" />
            </div>
            <div style={{display: 'flex'}}>
                <Botoes label="7" botao="7" />
                <Botoes label="8" botao="8" />
                <Botoes label="9" botao="9" />
                <Botoes label="*" botao="*" />
            </div>
            <div style={{display: 'flex'}}>
                <Botoes label="4" botao="4" />
                <Botoes label="5" botao="5" />
                <Botoes label="6" botao="6" />
                <Botoes label="-" botao="-" />
            </div>
            <div style={{display: 'flex'}}>
                <Botoes label="1" botao="1" />
                <Botoes label="2" botao="2" />
                <Botoes label="3" botao="3" />
                <Botoes label="+" botao="+" />
            </div>
            <div style={{display: 'flex'}}>
                <Botoes label="0" botao="0" />
                <Botoes label="." botao="." />
                <Botoes label="=" botao="=" />
            </div>
        </div>
    );
}