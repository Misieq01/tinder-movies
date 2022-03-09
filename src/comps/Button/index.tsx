import React from 'react'

import { StyledRoot,StyledAcceptIcon,StyledRejectIcon } from './styles'
import { ButtonComponentProps } from './types'


const Button = ({ actionType, nextMovieProposition }: ButtonComponentProps) =>{

    const onClick = () => {
        nextMovieProposition(actionType)
    }

    return <StyledRoot role={`button-${actionType}`} actionType={actionType} onClick={onClick}>
        {actionType === 'accept' ? <StyledAcceptIcon /> : <StyledRejectIcon />}
        
    </StyledRoot>
}

export default Button