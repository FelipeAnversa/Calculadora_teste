import Botoes from "./Botoes";
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Calculadora() {
    const [display, setDisplay] = useState('0');
    const [primeiro, setPrimeiro] = useState(null);
    const [operador, setOperador] = useState('');
    const [aguardandoSegundo, setAguardandoSegundo] = useState(false);
    
    function handleClick(valor) {
        if (valor === 'C') {
            setDisplay('0');
            setPrimeiro(null);
            setOperador('');
            setAguardandoSegundo(false);
            return;
        }
        if (valor === 'D') {
            if (display.length === 1) {
                setDisplay('0');
            } else {
                setDisplay(display.slice(0, -1));
            }
            return;
        }    
        if (valor === '.') {
            if (!display.includes('.')) {
                setDisplay(display + '.');
            }
            return;
        }
        if (['+', '-', '*', '/'].includes(valor)) {
            if (primeiro === null) {
                setPrimeiro(parseFloat(display));
                setOperador(valor);
                setAguardandoSegundo(true);
            } else if (aguardandoSegundo) {
                setOperador(valor);
            } else {
                const resultado = calcular(primeiro, parseFloat(display), operador);
                setPrimeiro(resultado);
                setOperador(valor);
                setDisplay(String(resultado));
                setAguardandoSegundo(true);
            }
            return;
        }
        if (valor === '=') {
            if (primeiro !== null && operador && !aguardandoSegundo) {
                const resultado = calcular(primeiro, parseFloat(display), operador);
                setDisplay(String(resultado));
                setPrimeiro(resultado);
                setAguardandoSegundo(true);
            }
            return;
        }
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(valor)) {
            if (aguardandoSegundo) {
                setDisplay(valor);
                setAguardandoSegundo(false);
            } else {
                setDisplay(display === '0' ? valor : display + valor);
            }
        }
    }
    
    function calcular(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : 'Erro';
            default: return b;
        }
    }

    const theme = createTheme({
        palette: {
            custom: {
                black: '#000',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Stack direction='column' alignItems='center' spacing={2} sx={{ marginTop: '120px' }}>
                <h1>Calculadora React</h1>
                <Stack direction='column' spacing={1}>
                    <TextField
                        variant='outlined'
                        value={display}
                        disabled
                        sx={{
                            width: '280px',
                            fontSize: '30px',
                            '& .MuiInputBase-input.Mui-disabled': {
                                WebkitTextFillColor: theme.palette.custom.black,
                                textAlign: 'right',
                                fontSize: '30px',
                            },
                        }}
                    />

                    <Stack direction='row' spacing={1}>
                        <Botoes valor='' disabled={true} />
                        <Botoes valor='C' handleClick={() => handleClick('C')} />
                        <Botoes valor='D' handleClick={() => handleClick('D')} />
                        <Botoes valor='/' handleClick={() => handleClick('/')} />
                    </Stack>
                    
                    <Stack direction='row' spacing={1}>
                        <Botoes valor='7' handleClick={() => handleClick('7')} />
                        <Botoes valor='8' handleClick={() => handleClick('8')} />
                        <Botoes valor='9' handleClick={() => handleClick('9')} />
                        <Botoes valor='*' handleClick={() => handleClick('*')} />
                    </Stack>

                    <Stack direction='row' spacing={1}>
                        <Botoes valor='4' handleClick={() => handleClick('4')} />
                        <Botoes valor='5' handleClick={() => handleClick('5')} />
                        <Botoes valor='6' handleClick={() => handleClick('6')} />
                        <Botoes valor='-' handleClick={() => handleClick('-')} />
                    </Stack>

                    <Stack direction='row' spacing={1}>
                        <Botoes valor='1' handleClick={() => handleClick('1')} />
                        <Botoes valor='2' handleClick={() => handleClick('2')} />
                        <Botoes valor='3' handleClick={() => handleClick('3')} />
                        <Botoes valor='+' handleClick={() => handleClick('+')} />
                    </Stack>

                    <Stack direction='row' spacing={1}>
                        <Botoes valor='' disabled={true} />
                        <Botoes valor='0' handleClick={() => handleClick('0')} />
                        <Botoes valor='.' handleClick={() => handleClick('.')} />
                        <Botoes valor='=' handleClick={() => handleClick('=')}/>
                    </Stack>
                </Stack>
            </Stack>
        </ThemeProvider>
    );
}