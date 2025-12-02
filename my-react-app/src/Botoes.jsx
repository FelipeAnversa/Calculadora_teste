import Button from '@mui/material/Button';
import { useState } from "react";

export default function Botoes({ valor }) {

    return (
        <Button 
            variant="outlined" 
            sx={{ '&:hover': {backgroundColor: 'lightblue' }}}
        >
            {valor}
        </Button>
    );
}