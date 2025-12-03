import Botoes from "./Botoes";
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Calculadora() {
    const [primeiro, setPrimeiro] = useState(null);
    const [operador, setOperador] = useState('');
    const [segundo, setSegundo] = useState(null);
    const [res, setRes] = useState(null);
    
    function handleClick(valor) {
        const resultado = calculadora(primeiro, operador, segundo, res, valor);
        if (resultado === null) {
            setPrimeiro(null);
            setOperador('');
            setSegundo(null);
            setRes(null);
        } else if (typeof resultado === 'number' || (typeof resultado === 'string' && !isNaN(resultado))) {
            if (operador === '') {
                setPrimeiro(Number(resultado));
            } else {
                setSegundo(Number(resultado));
            }
        } else if (['+', '-', '*', '/'].includes(resultado)) {
            setOperador(resultado);
        } else {
            if (segundo === null) {
                setSegundo(resultado);
            } else {
                setPrimeiro(resultado);
                setOperador('');
                setSegundo(null);
                setRes(null);
            }
        }
    }

    return (
        <div style={{textAlign: 'center'}}>
            <Stack direction='column'>

                <TextField
                    variant='outlined'
                    disabled
                    sx={{
                        width: '256px',
                        fontSize: '30px'
                    }}
                >
                    {primeiro}{operador}{segundo}{res !== null ? `=${res}` : ''}
                </TextField>

                <Stack direction='row'>
                    <Botoes valor='' />
                    <Botoes valor='C' handleClick={() => handleClick('C')} />
                    <Botoes valor='D' handleClick={() => handleClick('D')} />
                    <Botoes valor='/' handleClick={() => handleClick('/')} />
                </Stack>
                
                <Stack direction='row'>
                    <Botoes valor='7' handleClick={() => handleClick('7')} />
                    <Botoes valor='8' handleClick={() => handleClick('8')} />
                    <Botoes valor='9' handleClick={() => handleClick('9')} />
                    <Botoes valor='*' handleClick={() => handleClick('*')} />
                </Stack>

                <Stack direction='row'>
                    <Botoes valor='4' handleClick={() => handleClick('4')} />
                    <Botoes valor='5' handleClick={() => handleClick('5')} />
                    <Botoes valor='6' handleClick={() => handleClick('6')} />
                    <Botoes valor='-' handleClick={() => handleClick('-')} />
                </Stack>

                <Stack direction='row'>
                    <Botoes valor='1' handleClick={() => handleClick('1')} />
                    <Botoes valor='2' handleClick={() => handleClick('2')} />
                    <Botoes valor='3' handleClick={() => handleClick('3')} />
                    <Botoes valor='+' handleClick={() => handleClick('+')} />
                </Stack>

                <Stack direction='row'>
                    <Botoes valor='' />
                    <Botoes valor='0' handleClick={() => handleClick('0')} />
                    <Botoes valor='.' handleClick={() => handleClick('.')} />
                    <Botoes valor='=' handleClick={() => handleClick('=')}/>
                </Stack>
            </Stack>
        </div>
    );
}

function calculadora(primeiro, operador, segundo, res, valor) {
    if (primeiro === null) {
        primeiro = valor;
        return primeiro;
    }
    if (valor === '.') {
        if (segundo !== null) {
            segundo = String(segundo) + '.';
            return segundo;
        }
        if (primeiro !== null) {
            primeiro = String(primeiro) + '.';
            return primeiro;
        }
    }
    if (operador === '') {
        operador = valor;
        return operador;
    }
    if (segundo === null) {
        segundo = valor;
        return segundo;
    }
    if (valor === '.') {
        if (segundo !== null) {
            segundo = String(segundo) + '.';
            return segundo;
        }
        if (primeiro !== null) {
            primeiro = String(primeiro) + '.';
            return primeiro;
        }
    }
    if (valor === 'C') {
        return null;
    }
    if (valor === 'D') {
        if (segundo !== null) {
            segundo = null;
            return segundo;
        }
        if (operador !== '') {
            operador = '';
            return operador;
        }
        if (primeiro !== null) {
            primeiro = null;
            return primeiro;
        }
    }
    if (valor === '=') {
        if (primeiro !== null && operador !== '' && segundo !== null) {
            switch (operador) {
                case '+':
                    res = primeiro + segundo;
                    return res;
                case '-':
                    res = primeiro - segundo;
                    return res;
                case '*':
                    res = primeiro * segundo;
                    return res;
                case '/':
                    res = primeiro / segundo;
                    return res;
                default:
                    break;
            }
        }
    }
}