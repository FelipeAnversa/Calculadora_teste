import Button from '@mui/material/Button';

export default function Botoes({ valor, handleClick }) {
    return (
        <Button 
            variant="outlined" 
            sx={{ '&:hover': {backgroundColor: 'lightblue' }}}
            onClick={handleClick}
        >
            {valor}
        </Button>
    );
}