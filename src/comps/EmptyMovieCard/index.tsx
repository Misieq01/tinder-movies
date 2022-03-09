//Dependencies scoped imports
import React from 'react'

//Module scoped imports
import { StyledRoot, StyledVerticalStack, StyledWrapper, StyledText, StyledMissingIcon } from './styles';


const EmptyMovieCard = () => {

    return <StyledRoot role="empty">
        <StyledWrapper>
            <StyledVerticalStack>
                <StyledMissingIcon />
                <StyledText >NO MORE MOVIES</StyledText>
            </StyledVerticalStack>
        </StyledWrapper>


    </StyledRoot>
}

export default EmptyMovieCard 