import React from 'react'
import { useTheme } from '@mui/material'

import { StyledRoot, StyledAcceptIcon, StyledRejectIcon } from './styles'
import { ButtonComponentProps } from './types'


const Button = ({ actionType, nextMovieProposition }: ButtonComponentProps) => {
    const theme = useTheme()

    const onClick = () => {
        nextMovieProposition(actionType)
    }

    return <StyledRoot role={`button-${actionType}`} style={{ color: actionType === "accept" ? theme.palette.success.main : theme.palette.error.main }} actionType={actionType} onClick={onClick}>
        {actionType === 'accept' ? <StyledAcceptIcon /> : <StyledRejectIcon />}
        
    </StyledRoot>
}

export default Button