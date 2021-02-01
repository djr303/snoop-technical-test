import React, { ReactNode, MouseEvent } from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface ButtonProps {
    children: ReactNode,
    onClick: (e: MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <>
            <MuiButton onClick={onClick} variant="contained" disableElevation color="secondary">
                {children}
            </MuiButton>
        </>
    )
}

export default Button;

