import Botoes from "./Botoes";
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Calculadora() {
    const [primeiro, setPrimeiro] = useState(null);
    const [operador, setOperador] = useState('');
    const [segundo, setSegundo] = useState(null);
    const [res, setRes] = useState(null);
    
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
                    {texto}
                </TextField>

                <Stack direction='row'>
                    <Botoes valor='%' />
                    <Botoes valor='C' />
                    <Botoes valor='D' />
                    <Botoes valor='/' />
                </Stack>
                
                <Stack direction='row'>
                    <Botoes valor='7' />
                    <Botoes valor='8' />
                    <Botoes valor='9' />
                    <Botoes valor='*' />
                </Stack>

                <Stack direction='row'>
                    <Botoes valor='4' />
                    <Botoes valor='5' />
                    <Botoes valor='6' />
                    <Botoes valor='-' />
                </Stack>

                <Stack direction='row'>
                    <Botoes valor='1' />
                    <Botoes valor='2' />
                    <Botoes valor='3' />
                    <Botoes valor='+' />
                </Stack>

                <Stack direction='row'>
                    <Botoes valor='' />
                    <Botoes valor='0' />
                    <Botoes valor='.' />
                    <Botoes valor='=' />
                </Stack>
            </Stack>
        </div>
    );
}