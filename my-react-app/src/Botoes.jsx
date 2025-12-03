import Button from '@mui/material/Button';

export default function Botoes({ valor, handleClick, disabled = false }) {
    return (
        <Button 
            variant="outlined" 
            sx={{ 
                width: '60px',
                height: '60px',
                fontSize: '20px',
                '&:hover': {backgroundColor: 'lightblue'}
            }}
            onClick={handleClick}
            disabled={disabled}
        >
            {valor}
        </Button>
    );
}